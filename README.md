# 🤖 RoboTUM Website

This is the official website for **RoboTUM**, a student robotics initiative at the Technical University of Munich (TUM).  
Our mission is to bridge the gap between academia and industry in robotics by showcasing our projects, events, and collaborations.

Built with **React**, **Vite**, and **Tailwind CSS**, this site is fully responsive, modular, and designed for scalability.

## 🌍 Vision
To establish Munich as a global hub for robotics innovation and collaboration.

## 🎯 Goals
- Showcase RoboTUM’s technical, operational, and innovation projects.
- Highlight sponsors, events, and academic partnerships.
- Provide an easy way for new students and companies to get involved.

## 🧱 Tech Stack

- **Frontend Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom design system in `globals.css`)
- **Routing:** React Router v7
- **Component System:** Reusable components (`Button`, `ImageFrame`, etc.)
- **Data Management:** Static JS data files (e.g., `/src/data/projects.js`)
- **Deployment:** GitHub Pages (temporary) → Custom Domain (production)

## 🗂 Folder Structure

src/
├── assets/               # Images, icons, logos
├── components/           # Reusable UI components
│    ├── ui/              # Buttons, ImageFrame, etc.
│    └── sections/        # Page sections (Hero, Events, Projects…)
├── data/                 # Static content files (projects.js, events.js, etc.)
├── pages/                # Route-based pages (Home, Partners, Projects…)
├── styles/               # globals.css, variables.css
├── utils/                # scrollToSection.js, hooks
├── App.jsx               # Root app with routes
├── main.jsx              # Entry point
└── vite.config.js        # Build & alias configuration

---

### 5. **Getting Started**
> How to set up the project locally (make sure it works for new members).

**Example:**
```markdown
## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/robotum/robotum-frontend.git
cd robotum-frontend

