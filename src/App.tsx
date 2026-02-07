import { useState } from "react";
import profilePhoto from "./assets/profile.jpg";
import "./App.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Sngy Machines Private Limited, Noida",
    period: "Apr 2023 — Present",
    points: [
      "Built AI-Harness (multi-model LLM platform with enterprise guardrails).",
      "Developed project management platform replacing Excel for 50+ users.",
      "Improved datagrid performance by 70% and reduced re-renders by 40%.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "CodeQuotient",
    period: "Feb 2023 — Apr 2023",
    points: [
      "Built MERN e-commerce modules (auth, catalog, cart, order flows).",
      "Created full-stack mini products for practical product engineering.",
    ],
  },
];

const projects = [
  {
    title: "AI-Harness",
    subtitle: "Generative AI Platform",
    description:
      "Architected a multi-model chatbot and document intelligence system with AI safety guardrails and supplier search automation.",
    tags: ["React", "TypeScript", "Flask", "OpenAI", "Gemini"],
  },
  {
    title: "SpendMate",
    subtitle: "Personal Finance App (Play Store)",
    description:
      "Built and shipped a full-stack expense app with biometric lock, backup/restore, multi-currency support, and sub-50ms query performance.",
    tags: ["React Native", "Expo", "SQLite", "Drizzle ORM", "Zustand"],
    link: "https://play.google.com/store/apps/details?id=com.farhan10ansari.spendmate",
  },
  {
    title: "Connect With UGI",
    subtitle: "College Social Platform",
    description:
      "Developed a social network with real-time chat and academic sharing for 500+ students across batches and branches.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
  },
];

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "layout dark" : "layout"}>
      <aside className="sidebar">
        <img src={profilePhoto} alt="Mohd Farhan Ansari" className="avatar" />
        <h1>Mohd Farhan Ansari</h1>
        <p className="title">Full Stack Developer</p>
        <p className="muted">2.5+ years • React • TypeScript • AI-integrated products</p>

        <div className="contact">
          <a href="mailto:farhan10ansari@gmail.com">farhan10ansari@gmail.com</a>
          <a href="tel:+919919636968">+91 9919636968</a>
          <a href="https://www.linkedin.com/in/farhan10ansari/" target="_blank">LinkedIn</a>
          <a href="https://github.com/farhan10ansari" target="_blank">GitHub</a>
        </div>

        <button className="toggle" onClick={() => setDark(!dark)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>

      <main className="content">
        <section className="section hero">
          <h2>Professional Summary</h2>
          <p>
            Full Stack Developer with proven impact in performance optimization, scalable platform development, and
            enterprise AI integration. I focus on shipping robust products with measurable outcomes.
          </p>
          <div className="kpis">
            <div><strong>70%</strong><span>Performance boost</span></div>
            <div><strong>90%</strong><span>AI query relevance</span></div>
            <div><strong>50+</strong><span>Active users served</span></div>
            <div><strong>&lt;50ms</strong><span>SQLite query time</span></div>
          </div>
        </section>

        <section className="section">
          <h2>Experience</h2>
          <div className="timeline">
            {experiences.map((exp) => (
              <article key={exp.role + exp.company} className="card">
                <h3>{exp.role}</h3>
                <p className="meta">{exp.company} • {exp.period}</p>
                <ul>
                  {exp.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p className="meta">{project.subtitle}</p>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {project.link && <a className="link" href={project.link} target="_blank">View Project ↗</a>}
              </article>
            ))}
          </div>
        </section>

        <section className="section twoCol">
          <article className="card">
            <h2>Skills</h2>
            <p><strong>Frontend:</strong> React.js, TypeScript, Redux Toolkit, Zustand, TanStack Query, React Native</p>
            <p><strong>Backend:</strong> Node.js, Express.js, Python Flask, REST APIs</p>
            <p><strong>Databases:</strong> PostgreSQL, MongoDB, SQLite, Drizzle ORM</p>
            <p><strong>Tools:</strong> Git, Docker, Postman, OpenAI API, Gemini API</p>
          </article>
          <article className="card">
            <h2>Education</h2>
            <p><strong>B.Tech, CSE</strong><br />United Institute of Technology, Prayagraj (2019–2023)<br />CGPA: 8.06 / 10</p>
            <h2>Location</h2>
            <p>Pratapgarh, Uttar Pradesh, India</p>
            <h2>Notice Period</h2>
            <p>30 Days (Negotiable)</p>
          </article>
        </section>
      </main>
    </div>
  );
}
