require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;
let isMongoConnected = false;
let isMailReady = false;

// Credentials — trim & strip internal spaces (Gmail shows App Passwords as
// "abcd efgh ijkl mnop"; pasted spaces are the #1 cause of EAUTH).
const MAIL_HOST = (process.env.MAIL_HOST || "smtp.gmail.com").trim();
const MAIL_USER = (process.env.MAIL_USER || "").trim();
const MAIL_PASS = (process.env.MAIL_PASS || "").replace(/\s+/g, "");
const RECEIVER_EMAIL = (process.env.RECEIVER_EMAIL || MAIL_USER).trim();

const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URL, { serverSelectionTimeoutMS: 8000 })
  .then(() => {
    isMongoConnected = true;
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("⚠️  MongoDB connection error:", err.message);
    console.warn("   Continuing without MongoDB — Contact API will still send email.");
  });

// Mongoose Schema
const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", ContactSchema);

// One reusable transporter (created at startup, not per request).
const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: 587,
  secure: false,
  requireTLS: true,
  connectionTimeout: 12000,
  greetingTimeout: 12000,
  socketTimeout: 20000,
  auth: { user: MAIL_USER, pass: MAIL_PASS },
});

// Verify SMTP at startup so the status is obvious in logs.
function verifyMail() {
  if (!MAIL_USER || !MAIL_PASS) {
    console.error("❌ Email disabled: MAIL_USER / MAIL_PASS not set in environment.");
    isMailReady = false;
    return;
  }
  transporter
    .verify()
    .then(() => {
      isMailReady = true;
      console.log(`✅ Email ready — sending as ${MAIL_USER} → ${RECEIVER_EMAIL}`);
    })
    .catch((err) => {
      isMailReady = false;
      console.error("❌ Email auth FAILED:", err.code || "", err.message);
      if (err.code === "EAUTH") {
        console.error(
          "   Gmail rejected the login. Fix: enable 2-Step Verification on " +
            MAIL_USER +
            ", generate a fresh App Password (Google Account → Security → App passwords), " +
            "and set MAIL_PASS to that 16-char value (spaces are auto-stripped)."
        );
      }
    });
}
verifyMail();

const buildTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.5; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
    <h2 style="color: #333;">Rahul Choudhary | New Contact Form Submission</h2>
    <p>You have a new message from your portfolio contact form:</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
      <tr style="background-color: #f9f9f9;">
        <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Field</th>
        <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Value</th>
      </tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td></tr>
    </table>
    <p style="margin-top: 20px;">Sent automatically from your portfolio.</p>
    <p style="color: #888;">&copy; ${new Date().getFullYear()} Rahul Choudhary</p>
  </div>
`;

const sendMail = async (data) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${MAIL_USER}>`,
    to: RECEIVER_EMAIL,
    replyTo: `"${data.name}" <${data.email}>`, // reply goes straight to the sender
    subject: `New Contact Submission from ${data.name}`,
    html: buildTemplate(data),
  });
  console.log(`📧 Email sent for ${data.email}`);
};

// Health check — open this in the browser to see backend status.
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    mongo: isMongoConnected ? "connected" : "disconnected",
    email: isMailReady ? "ready" : "not-ready",
    time: new Date().toISOString(),
  });
});

app.post("/api/contact", async (req, res) => {
  const { email, name, message } = req.body;

  const payload = {
    email: String(email || "").trim(),
    name: String(name || "").trim(),
    message: String(message || "").trim(),
  };

  if (!payload.email || !payload.name || !payload.message) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  let isSavedToDb = false;
  if (isMongoConnected) {
    try {
      await Contact.updateOne(
        { email: payload.email },
        { $set: { name: payload.name, message: payload.message, createdAt: new Date() } },
        { upsert: true }
      );
      isSavedToDb = true;
    } catch (dbError) {
      console.error("Failed to save contact to MongoDB:", dbError.message);
    }
  }

  try {
    await sendMail(payload);
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending contact email:", error.code || "", error.message);

    // Message isn't lost if it was stored.
    if (isSavedToDb) {
      return res.status(202).json({
        message: "Message received! (Email notification is temporarily unavailable, but your message was saved.)",
      });
    }

    if (error.code === "EAUTH") {
      return res.status(500).json({
        error: "Mail service authentication failed. Please try again later or email me directly at " + RECEIVER_EMAIL + ".",
      });
    }
    if (error.code === "ETIMEDOUT" || error.code === "ECONNECTION" || error.code === "ESOCKET") {
      return res.status(504).json({ error: "Mail service timed out. Please try again in a moment." });
    }
    return res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
