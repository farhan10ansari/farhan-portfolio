import { useMemo, useState } from "react";
import "./App.css";

const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL", "C++"],
  frontend: ["React.js", "React Native", "Redux Toolkit", "Zustand", "TanStack Query"],
  backend: ["Node.js", "Express.js", "Python Flask", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "SQLite", "Drizzle ORM"],
};

const achievements = [
  "70% performance improvement with virtualized datagrid",
  "60% reduction in manual research via intelligent supplier search",
  "90% query relevance in AI-powered document search",
  "Sub-50ms query response for 1000+ transactions in SpendMate",
  "50+ active users served by project management platform",
];

const projects = [
  {
    name: "AI-Harness (Generative AI Platform)",
    desc: "Built from scratch with multi-model LLM chatbots, AI guardrails, supplier search, and document AI.",
    stack: "React, TypeScript, Python Flask, OpenAI API, Gemini API",
  },
  {
    name: "SpendMate (Play Store)",
    desc: "Production-ready personal finance app with analytics, biometric lock, backup/restore, and multi-currency support.",
    stack: "React Native, Expo, SQLite, Drizzle ORM, Zustand",
    link: "https://play.google.com/store/apps/details?id=com.farhan10ansari.spendmate",
  },
  {
    name: "Connect With UGI",
    desc: "College social platform for 500+ students with real-time chat and academic resource sharing.",
    stack: "React, Node.js, Express.js, MongoDB, Socket.IO",
  },
];

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const themeLabel = useMemo(() => (theme === "dark" ? "Switch to Light" : "Switch to Dark"), [theme]);

  return (
    <div className={`page ${theme}`}>
      <header className="hero card">
        <div className="topbar">
          <p className="badge">Full Stack Developer • 2.5+ Years</p>
          <button className="theme-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{themeLabel}</button>
        </div>
        <h1>Mohd Farhan Ansari</h1>
        <p>
          I build high-performance web and mobile products with React, TypeScript, and AI-powered systems that create measurable business impact.
        </p>
        <div className="links">
          <a href="mailto:farhan10ansari@gmail.com">farhan10ansari@gmail.com</a>
          <a href="tel:+919919636968">+91 9919636968</a>
          <a href="https://www.linkedin.com/in/farhan10ansari/" target="_blank">LinkedIn</a>
          <a href="https://github.com/farhan10ansari" target="_blank">GitHub</a>
        </div>
      </header>

      <section className="card">
        <h2>Experience</h2>
        <h3>Sngy Machines Private Limited, Noida — Full Stack Developer</h3>
        <p className="muted">Apr 2023 – Present</p>
        <ul>
          <li>Built AI-Harness platform with multi-model LLMs, guardrails, and document AI.</li>
          <li>Delivered Excel-replacement project platform for 50+ team members.</li>
          <li>Improved frontend performance by up to 70% using virtualization.</li>
        </ul>
        <h3>CodeQuotient — Software Developer Intern</h3>
        <p className="muted">Feb 2023 – Apr 2023</p>
      </section>

      <section className="card grid">
        <div>
          <h2>Tech Stack</h2>
          <p><strong>Languages:</strong> {skills.languages.join(", ")}</p>
          <p><strong>Frontend:</strong> {skills.frontend.join(", ")}</p>
          <p><strong>Backend:</strong> {skills.backend.join(", ")}</p>
          <p><strong>Databases:</strong> {skills.databases.join(", ")}</p>
        </div>
        <div>
          <h2>Key Metrics</h2>
          <ul>
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Featured Projects</h2>
        <div className="projects">
          {projects.map((p) => (
            <article key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <p className="muted">{p.stack}</p>
              {p.link && <a href={p.link} target="_blank">View on Play Store</a>}
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Education</h2>
        <p><strong>B.Tech, CSE</strong> — United Institute of Technology, Prayagraj (2019–2023), CGPA: 8.06/10</p>
      </section>
    </div>
  );
}
