import RKTECHNICALSUPPORT from "../../components/DataBase/ProjectImages/RKTECHNICALSUPPORT.png"
import srajinfra from "../../components/DataBase/ProjectImages/srajinfra.png"
import BharatMarket from "../../components/DataBase/ProjectImages/BharatMarket.png"
import ComboFinder from "../../components/DataBase/ProjectImages/ComboFinder.png"
import MEDO_SHIELD_AI from "../../components/DataBase/ProjectImages/medoshieldai.png"
import CipherSQLStudio from "../../components/DataBase/ProjectImages/ciphersqlschool.png"

const projects = [
  {
    id: 1,
    title: "CipherSQL Studio",
    description:
      "Built an end-to-end SQL learning studio focused on real interview and job workflows. Delivered instant query feedback, AI hints, resilient auto-recovery, and a Kaggle-driven challenge pipeline that transforms production-style datasets into structured SQL problems.",
    image: CipherSQLStudio,
    technologies: ["JavaScript", "SQL", "Full-Stack Web App"],
    highlights: [
      "Interactive SQL workspace with immediate query validation and AI-assisted hints.",
      "Kaggle dataset challenge pipeline converts real data into practical SQL problem sets.",
      "Optimized workspace startup from 60s+ to under 1s for better multi-user scale.",
    ],
    github: "https://github.com/RahulChoudhary05/CipherSchools",
    demo: "https://ciphersqlschool.vercel.app/",
    date: "March 2026",
  },
  {
    id: 2,
    title: "MEDO SHIELD AI",
    description:
      "Engineered a privacy-first AI platform that processes Parkinson's assessment videos into 33-point skeletal motion signals without storing raw video. Built an AI motion engine to detect tremor frequency bands and gait irregularities, then classify patient risk levels with individualized baselines for better longitudinal monitoring.",
    image: MEDO_SHIELD_AI,
    technologies: ["React", "FastAPI", "Python", "MongoDB", "Docker", "Gemini AI"],
    highlights: [
      "Privacy-focused video pipeline converts raw footage into 33-point skeletal data with no raw storage.",
      "AI motion analysis detects tremors (4-12 Hz) and gait signatures for Low/Medium/High risk classification.",
      "Personalized baseline tracking improves patient-level monitoring over time.",
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