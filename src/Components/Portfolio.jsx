import React from "react";
import "./Portfolio.css";

const resumeUrl =
  "https://drive.google.com/file/d/1_SXPl-uOK5QKageAdnGuC066nS_VbFxT/view?pli=1";

const projects = [
  {
    number: "01",
    title: "Provisioning System",
    description:
      "Access, entitlement, and onboarding workflows for internal teams. Built React interfaces and Node.js APIs, with PostgreSQL data and integrations to Salesforce and BackOffice systems through AWS Lambda.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS Lambda", "Salesforce"],
  },
  {
    number: "02",
    title: "Case Management System",
    description:
      "An internal support application for raising and tracking cases. Delivered responsive screens, CRUD services, and knowledge-base features to make issue resolution easier for support teams.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Jenkins"],
  },
  {
    number: "03",
    title: "CoFFi",
    subtitle: "Codes, Forms, Fields",
    description:
      "A centralized tool for managing disclosure forms, fields, and error codes. Replaced spreadsheet-based tracking with a web application and SAML-authenticated access for admin and user roles.",
    stack: ["React", "Node.js", "PostgreSQL", "SAML", "AWS"],
  },
  {
    number: "04",
    title: "Toolbox",
    description:
      "A set of internal troubleshooting utilities that brings together data from Kibana, Splunk, and internal databases to help customer support teams investigate issues faster.",
    stack: ["JavaScript", "Node.js", "Express", "EJS", "Sequelize"],
  },
];

const skillGroups = [
  { label: "Frontend", skills: "React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Material UI" },
  { label: "Backend", skills: "Node.js, Express.js, REST APIs, EJS" },
  { label: "Data", skills: "PostgreSQL, MongoDB, Sequelize" },
  { label: "Cloud & delivery", skills: "AWS EC2, S3, RDS, Lambda, CloudWatch, Jenkins, Git, CI/CD" },
  { label: "Integration & workflow", skills: "SAML, Salesforce, API integration, Agile Scrum, Jira, Confluence" },
  { label: "AI-assisted development", skills: "Claude, Cursor, GitHub Copilot" },
];

const Portfolio = () => (
  <div className="portfolio">
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Sujit Nangare, home">SN<span>.</span></a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#experience">Experience</a>
        <a href="#work">Selected work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-resume" href={resumeUrl} target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
    </header>

    <main id="top">
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Pune, India · Full Stack Engineer</p>
          <h1 id="hero-title">Sujit Nangare</h1>
          <p className="hero-tagline">Full Stack Engineer building software that makes <span>complex work</span> feel simple.</p>
          <p className="hero-summary">I build enterprise applications and workflow tools with React, Node.js, PostgreSQL, and AWS.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">Explore my experience <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="mailto:sujeetnangare@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Career snapshot">
          <p className="aside-label">A little context</p>
          <div className="stat-line"><strong>5+</strong><span>years building<br />full-stack products</span></div>
          <div className="stat-line"><strong>500<span>+</span></strong><span>internal users<br />supported</span></div>
          <div className="current-role">
            <span className="role-mark" aria-hidden="true">ICE</span>
            <span>Software Engineer II<br /><b>ICE Mortgage Technology</b></span>
          </div>
        </aside>
        <div className="hero-index" aria-hidden="true">FULL STACK · PRODUCT ENGINEERING</div>
      </section>

      <section className="experience section-band" id="experience" aria-labelledby="experience-title">
        <div className="page-width section-layout">
          <div className="section-heading"><p className="eyebrow">01 / Experience</p><h2 id="experience-title">Building software<br />that teams rely on.</h2></div>
          <div className="experience-content">
            <div className="experience-topline">
              <div><h3>Software Engineer II</h3><p>ICE Mortgage Technology <span>·</span> Pune, India</p></div>
              <span className="date-range">Jan 2022 — Present</span>
            </div>
            <p className="experience-intro">Full-stack product development for enterprise applications serving more than 500 internal users, from workflow interfaces to cloud-hosted services.</p>
            <ul className="experience-list">
              <li>Build responsive React single-page applications with reusable components, state management, and REST API integrations.</li>
              <li>Develop Node.js and Express services backed by PostgreSQL, including CRUD workflows and integrations with internal systems.</li>
              <li>Connect provisioning workflows with Salesforce and BackOffice systems using APIs and AWS Lambda.</li>
              <li>Support applications running on EC2, S3, RDS, Lambda, and CloudWatch, contributing to Jenkins and Git-based delivery.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="work page-width" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <div><p className="eyebrow">02 / Selected work</p><h2 id="work-title">Useful tools.<br /><span>Real workflows.</span></h2></div>
          <p className="work-note">A selection of enterprise products and internal tools I’ve contributed to at ICE Mortgage Technology.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-topline"><span className="project-number">{project.number}</span><span className="project-type">Enterprise application</span></div>
              <h3>{project.title}</h3>
              {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
              <p className="project-description">{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} technology stack`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-band" id="skills" aria-labelledby="skills-title">
        <div className="page-width section-layout">
          <div className="section-heading"><p className="eyebrow">03 / Toolkit</p><h2 id="skills-title">A practical<br />full-stack toolkit.</h2></div>
          <div className="skill-list">
            {skillGroups.map((group) => <div className="skill-row" key={group.label}><h3>{group.label}</h3><p>{group.skills}</p></div>)}
          </div>
        </div>
      </section>

      <section className="education page-width" aria-labelledby="education-title">
        <div><p className="eyebrow">04 / Education</p><h2 id="education-title">The starting point.</h2></div>
        <div className="education-detail">
          <h3>Bachelor of Engineering</h3>
          <p>Indira College of Engineering and Management, Pune</p>
          <span>Mechanical Engineering · Aug 2015 — Jul 2018 · 76%</span>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="page-width contact-inner">
          <div><p className="eyebrow">05 / Contact</p><h2 id="contact-title">Have a good problem<br />to solve?</h2></div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:sujeetnangare@gmail.com">sujeetnangare@gmail.com <span aria-hidden="true">↗</span></a>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sujit6060/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/sujit6060" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={resumeUrl} target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer page-width">
      <span>Sujit Nangare · Full Stack Engineer</span>
      <span>© 2026 Sujit Nangare</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  </div>
);

export default Portfolio;