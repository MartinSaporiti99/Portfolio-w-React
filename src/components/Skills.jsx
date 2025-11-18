import React from "react";
import "./Skills.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const sectionRef = useScrollAnimation();
  const { t } = useLanguage();

  const skillsData = {
    backend: {
      icon: <i className="bi bi-gear"></i>,
      skills: [
        "Node.js",
        "Express",
        ".NET",
        "C#",
        "Python Flask",
        "SQL Server",
        "SQLite",
        "Sequelize",
      ],
    },
    frontend: {
      icon: <i className="bi bi-palette"></i>,
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Bootstrap"],
    },
    tools: {
      icon: <i className="bi bi-tools"></i>,
      skills: ["Git", "GitHub", "GitHub Actions", "Azure", "Trello", "Postman"],
    },
  };

  return (
    <section
      id="skillsSec"
      ref={sectionRef}
      className="skills-section scroll-animate"
    >
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">
            <span id="skills-title" className="title-accent">
              {t.skills.title}
            </span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-icon">{skillsData.backend.icon}</div>
            <h3 className="category-title">{t.skills.backend}</h3>
            <ul className="skills-list">
              {skillsData.backend.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-bullet">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-category">
            <div className="category-icon">{skillsData.frontend.icon}</div>
            <h3 className="category-title">{t.skills.frontend}</h3>
            <ul className="skills-list">
              {skillsData.frontend.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-bullet">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-category">
            <div className="category-icon">{skillsData.tools.icon}</div>
            <h3 className="category-title">{t.skills.tools}</h3>
            <ul className="skills-list">
              {skillsData.tools.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-bullet">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="lineAbout"></hr>
    </section>
  );
}
