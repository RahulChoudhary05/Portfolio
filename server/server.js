require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: "https://rahulchoudhary05.vercel.app", credentials: true }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

const ContactSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", ContactSchema);

const mailSender = async (to, data) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
        <h2 style="color: #333;">Rahul Choudhary | New Contact Form Submission</h2>
        <p>Hello,</p>
        <p>You have a new message from your contact form:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr style="background-color: #f9f9f9; padding: 10px;">
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Field</th>
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Value</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Message</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">Sent automatically from Rahul Choudhary.</p>
        <p style="color: #888;">&copy; ${new Date().getFullYear()} Rahul Choudhary </p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Rahul Choudhary | Portfolio Contact Notifications" <${process.env.MAIL_USER}>`,
      to,
      subject: `Rahul Choudhary | New Contact Submission from ${data.name}`,
      html: emailTemplate,
    });

    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error occurred while sending email:", error.message);
    throw error;
  }
};

app.post("/api/contact", async (req, res) => {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ error: "You have already submitted the form!" });
    }

    const newContact = new Contact({ email, name, message });
    await newContact.save();

    await mailSender(process.env.RECEIVER_EMAIL, { email, name, message });

    res.status(200).json({ message: "Form submitted successfully and email sent!" });
  } catch (error) {
    console.error("Error submitting the form:", error);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));