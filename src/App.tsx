import { useState } from "react";
import profilePhoto from "./assets/profile.jpg";
import "./App.css";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "TypeScript", "Redux Toolkit", "Zustand", "TanStack Query", "React Native"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Python Flask", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Drizzle ORM"],
  },
  {
    title: "AI & Tooling",
    items: ["OpenAI API", "Gemini API", "Docker", "Git", "Postman"],
  },
];

const highlights = [
  { metric: "70%", label: "Datagrid performance improvement" },
  { metric: "90%", label: "Document AI query relevance" },
  { metric: "60%", label: "Manual research time reduced" },
  { metric: "50+", label: "Users served by PM platform" },
];

const projects = [
  {
    name: "AI-Harness",
    subtitle: "Enterprise Generative AI Platform",
    impact:
      "Built multi-model LLM workflows with AI guardrails and document intelligence, improving supplier research and internal knowledge retrieval.",
    stack: ["React", "TypeScript", "Python Flask", "OpenAI", "Gemini"],
  },
  {
    name: "SpendMate",
    subtitle: "Personal Finance App (Play Store)",
    impact:
      "Designed a production-grade mobile expense tracker with biometric lock, backup/restore, and sub-50ms SQLite+Drizzle performance.",
    stack: ["React Native", "Expo", "SQLite", "Drizzle ORM", "Zustand"],
    link: "https://play.google.com/store/apps/details?id=com.farhan10ansari.spendmate",
  },
  {
    name: "Connect With UGI",
    subtitle: "College Social Platform",
    impact:
      "Created a social + realtime messaging app for 500+ students, enabling cross-year collaboration and faster resource sharing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
  },
];

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <div className={`portfolio ${theme}`}>
      <header className="hero container reveal">
        <nav className="topnav">
          <span className="brand">Mohd Farhan Ansari</span>
          <button className="themeToggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </nav>

        <div className="heroContent">
          <img className="profilePhoto" src={profilePhoto} alt="Mohd Farhan Ansari" />
          <p className="eyebrow">Full Stack Developer • 2.5+ Years Experience</p>
          <h1>Building scalable products with measurable business impact.</h1>
          <p className="summary">
            I’m a Full Stack Developer focused on React, TypeScript, and AI-integrated systems. I build performant
            web/mobile products that improve speed, usability, and team output.
          </p>
          <div className="ctaRow">
            <a className="btn primary" href="mailto:farhan10ansari@gmail.com">
              Hire Me
            </a>
            <a className="btn" href="https://www.linkedin.com/in/farhan10ansari/" target="_blank">
              LinkedIn
            </a>
            <a className="btn" href="https://github.com/farhan10ansari" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section className="container stats reveal">
        {highlights.map((h) => (
          <article key={h.label} className="card statCard">
            <h3>{h.metric}</h3>
            <p>{h.label}</p>
          </article>
        ))}
      </section>

      <section className="container reveal">
        <div className="sectionHead">
          <h2>Experience</h2>
          <p>Delivering production systems across AI, project management, and mobile platforms.</p>
        </div>

        <div className="timeline">
          <article className="card timelineItem">
            <h3>Full Stack Developer — Sngy Machines Pvt. Ltd. (Noida)</h3>
            <span>Apr 2023 — Present</span>
            <ul>
              <li>Built AI-Harness from scratch with multi-model LLMs and enterprise safety controls.</li>
              <li>Developed a virtualized project platform replacing Excel for 50+ active users.</li>
              <li>Improved render performance by 70% and reduced component re-renders by 40%.</li>
            </ul>
          </article>

          <article className="card timelineItem">
            <h3>Software Developer Intern — CodeQuotient</h3>
            <span>Feb 2023 — Apr 2023</span>
            <ul>
              <li>Built MERN e-commerce modules with auth, product catalog, and cart workflows.</li>
              <li>Developed full-stack mini products including a discussion portal and productivity tools.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="container reveal">
        <div className="sectionHead">
          <h2>Featured Projects</h2>
          <p>Selected work focused on real users, speed, and business outcomes.</p>
        </div>
        <div className="projectGrid">
          {projects.map((p) => (
            <article key={p.name} className="card projectCard">
              <h3>{p.name}</h3>
              <p className="subtitle">{p.subtitle}</p>
              <p>{p.impact}</p>
              <div className="tags">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              {p.link && (
                <a className="projectLink" href={p.link} target="_blank">
                  View Project ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="container reveal">
        <div className="sectionHead">
          <h2>Skills</h2>
          <p>Strong product engineering foundation across frontend, backend, data, and AI integrations.</p>
        </div>
        <div className="skillsGrid">
          {skillGroups.map((group) => (
            <article key={group.title} className="card skillCard">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container reveal">
        <article className="card contact">
          <h2>Let’s build something impactful.</h2>
          <p>
            Open to full-time opportunities where I can contribute across modern frontend, backend, and AI-driven product
            development.
          </p>
          <div className="contactMeta">
            <a href="mailto:farhan10ansari@gmail.com">farhan10ansari@gmail.com</a>
            <a href="tel:+919919636968">+91 9919636968</a>
            <span>Pratapgarh, Uttar Pradesh, India</span>
          </div>
        </article>
      </section>
    </div>
  );
}
