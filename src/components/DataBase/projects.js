import RKTECHNICALSUPPORT from "../../components/DataBase/ProjectImages/RKTECHNICALSUPPORT.png"
import srajinfra from "../../components/DataBase/ProjectImages/srajinfra.png"
import BharatMarket from "../../components/DataBase/ProjectImages/BharatMarket.png"
import ComboFinder from "../../components/DataBase/ProjectImages/ComboFinder.png"
import MEDO_SHIELD_AI from "../../components/DataBase/ProjectImages/medoshieldai.png"
import CipherSQLStudio from "../../components/DataBase/ProjectImages/ciphersqlschool.png"
import durabolt from "../../components/DataBase/ProjectImages/durabolt.svg"

const projects = [
  {
    id: 0,
    title: "durabolt",
    description:
      "A zero-dependency Node.js library that makes risky backend operations — charges, emails, third-party API calls, webhooks — safe, correct, and self-healing, using nothing but the Postgres you already run. Ships three composable primitives: once() for exactly-once idempotency, a transactional Outbox so a write and its event commit or roll back together, and signed, retried, dead-lettered Webhooks you can actually trust.",
    image: durabolt,
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "npm", "Open Source"],
    highlights: [
      "once() stores the first successful result by idempotency key so retries never duplicate side-effects.",
      "Transactional outbox inserts the event inside your write's transaction — no dual-write drift.",
      "Signed webhooks with exponential-backoff retries and a dead-letter state for manual replay.",
    ],
    github: "https://github.com/RahulChoudhary05/durabolt",
    demo: "https://www.npmjs.com/package/@rahulchoudhary05/durabolt",
    date: "2026",
  },
  {
    id: 1,
    title: "CipherSQL Studio",
    description:
      "An interactive SQL learning platform with 20–30 real-world dataset challenges, instant query feedback, schema visualization (PK/FK), and an AI hint engine. Optimized multi-user workspace provisioning from 60s+ to under 1s, enabling scalable concurrent sessions with independent execution environments.",
    image: CipherSQLStudio,
    technologies: ["JavaScript", "PostgreSQL", "SQL Server", "Full-Stack"],
    highlights: [
      "Interactive SQL workspace with instant query feedback and schema visualization (PK/FK).",
      "AI hint engine and 20–30 real-world dataset challenges for practical, job-ready practice.",
      "Optimized workspace provisioning from 60s+ to under 1s for scalable concurrent sessions.",
    ],
    github: "https://github.com/RahulChoudhary05/CipherSchools",
    demo: "https://ciphersqlschool.vercel.app/",
    date: "March 2026",
  },
  {
    id: 2,
    title: "MEDO SHIELD AI",
    description:
      "A full telemedicine platform with dedicated Doctor and Patient portals supporting appointment management, real-time WebSocket chat, and AI-powered symptom guidance. Its privacy-first video engine converts patient uploads into 33-point skeletal data without raw storage — detecting tremors (4–12 Hz) and gait anomalies for neurological risk classification.",
    image: MEDO_SHIELD_AI,
    technologies: ["React", "FastAPI", "Python", "MongoDB", "WebSockets", "Docker", "Gemini AI"],
    highlights: [
      "Dedicated Doctor & Patient portals with appointment management and real-time WebSocket chat.",
      "Privacy-first video engine converts uploads into 33-point skeletal data with no raw storage.",
      "Detects tremors (4–12 Hz) and gait anomalies for neurological risk classification.",
    ],
    github: "https://github.com/RahulChoudhary05/MEDO_SHIELD_AI",
    demo: "https://medoshieldai.vercel.app/",
    date: "January 2026",
  },
  {
    id: 3,
    title: "ComboFinder ",
    description: "ComboFinder is a web-based tool to upload and process data files efficiently. Users can select specific columns like Product Name or Price and generate refined outputs. Built with React.js, TailwindCSS, and Node.js, it offers a modern UI, secure file handling, and fast data customization for e-commerce, data analysis, and reporting.",
    image: ComboFinder,
    technologies: ["React", "Node.js", "Express", "Vercel", "Tailwind CSS"],
    github: "https://github.com/RahulChoudhary05/ComboFinder",
    demo: "https://combofinder.vercel.app",
    date: "March 2025",
  },
  {
    id: 4,
    title: "S RAJ INFRA PROJECTS PRIVATE LIMITED",
    description: "Spearheaded the design and development of an enterprise-level SaaS platform, utilizing React and Tailwind CSS. Engineered dynamic user interfaces with Framer Motion animations, achieving 40% improved user engagement metrics. Successfully deployed to production, serving as the primary client acquisition and service showcase platform.",
    image: srajinfra,
    technologies: ["React", "Node.js", "Express", "Firebase", "Vercel", "Tailwind CSS"],
    github: "https://github.com/RahulChoudhary05/S-RAJ-INFRA",
    demo: "https://srajinfra.vercel.app/",
    date: "December 2024 - Present",
  },
  {
    id: 5,
    title: "BharatMarket",
    description: "Developed a full-fledged ecommerce website using React, Node.js, Express.js, Tailwind CSS with backend by Firebase. Implemented CI/CD pipeline using Docker and Jenkins for automated testing, building, and deployment, ensuring rapid updates. Implemented features like authentication, real-time database updates, and a smooth checkout process.",
    image: BharatMarket,
    technologies: ["React", "Node.js", "Express", "Firebase", "Vercel", "Tailwind CSS", "Docker", "Jenkins", "CI/CD"],
    github: "https://github.com/RahulChoudhary05/BharatMarket-EcommerceWebsite",
    demo: "https://blog-platform-demo.com",
    date: "March 2024 - April 2024",
  },
  {
    id: 6,
    title: "R K TECHNICAL SUPPORT",
    description: "Led the development of a professional healthcare clinic website, utilizing HTML, CSS, and JavaScript. Achieved a fully responsive design for mobile, desktop, and tablet, integrating dynamic Google Maps for real-time tracking. Deployed by the client for real-world use on mobile, desktop, and tablet platforms.",
    image: RKTECHNICALSUPPORT,
    technologies: ["HTML", "CSS", "JavaScript", "Google Maps API", "Vercel"],
    github: "https://github.com/RahulChoudhary05/RKTECHNICALSUPPORT",
    demo: "https://www.rktechs.co/",
    date: "December 2023 - January 2024",
  },
]

export default projects