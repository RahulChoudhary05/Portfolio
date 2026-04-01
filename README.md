# Rahul Choudhary Portfolio

A modern full-stack developer portfolio built with React, Framer Motion, and Tailwind CSS.

## About

This repository contains my personal portfolio website with animated sections for:

- Hero and introduction
- About and experience timeline
- Skills and services
- Project journey with detailed modal showcases
- Education and contact form

The project is focused on performance, clean UI, and recruiter-friendly project storytelling.

## Tech Stack

- Frontend: React, Tailwind CSS, Framer Motion
- Icons: Lucide React, React Icons
- Backend (contact API): Node.js/Express (deployed separately)
- Deployment: Vercel (frontend), Render (API)

## Featured Projects

### 1. MEDO SHIELD AI (January 2026)

- Stack: React, FastAPI, Python, MongoDB, Docker, Gemini AI
- GitHub: https://github.com/RahulChoudhary05/MEDO_SHIELD_AI
- Live: https://medoshieldai.vercel.app/
- Highlights:
	- Engineered a privacy-focused processor that converts Parkinson's videos into 33-point skeletal motion data without storing raw video.
	- Built an AI motion engine for tremor (4-12 Hz) and gait pattern analysis.
	- Implemented Low/Medium/High risk classification with personalized patient baselines.

### 2. CipherSQL Studio (March 2026)

- Stack: JavaScript, SQL (Full-Stack Web App)
- GitHub: https://github.com/RahulChoudhary05/CipherSchools
- Live: https://ciphersqlschool.vercel.app/
- Highlights:
	- Built an interactive SQL learning platform with instant query feedback, AI hints, and auto-recovery.
	- Designed a Kaggle-based challenge pipeline that turns real datasets into structured SQL tasks.
	- Improved workspace initialization from 60s+ to under 1 second for scalable multi-user usage.

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Frontend

```bash
npm start
```

App runs on http://localhost:3000

### Build for Production

```bash
npm run build
```

## Project Structure

```text
src/
	components/
		DataBase/
			projects.js        # Project timeline data source
		Hero.jsx
		About.jsx
		Experience.jsx
		Skills.jsx
		Projects.jsx         # Projects timeline + modal showcase
		Services.jsx
		Education.jsx
		Contact.jsx
```

## Contact

- LinkedIn: https://www.linkedin.com/in/rahulchoudhary210505/
- GitHub: https://github.com/RahulChoudhary05/
- Email: rahulchoudhary.sk@gmail.com

## License

This project is open for learning and reference.
