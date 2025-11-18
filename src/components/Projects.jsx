import React from "react";
import "./Projects.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const sectionRef = useScrollAnimation();
  const { t } = useLanguage();

  const proyectos = [
    {
      title: "Dolar Value",
      descriptionKey: "project1",
      technologies: ["JavaScript", "HTML", "CSS", "Python Flask"],
      githubLink: "https://github.com/MartinSaporiti99/TpProgDolar",
    },
    {
      title: "TheFrogGames V1.0",
      descriptionKey: "project2",
      technologies: ["React", "Node.js", "SQLite", "Sequelize", "Express"],
      githubLink: "https://github.com/TP-UTN-GRUPO1/TP-Front",
    },
    {
      title: "TheFrogGames BackEnd V2.0",
      descriptionKey: "project3",
      technologies: ["C#", ".NET", "Azure", "GitHub Actions", "SQLServer"],
      githubLink: "https://github.com/TP-UTN-GRUPO1/TheFrogGames",
    },
  ];

  return (
    <section id="projectsSec" className="projects-section">
      <div className="projects-header scroll-animate">
        <h2 className="projects-title">
          <span id="projects-title" className="title-accent">
            {t.projects.title}
          </span>
        </h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-list scroll-animate">
        {proyectos.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <h3>{p.title}</h3>
            </div>
            <p className="project-description">
              {t.projects[p.descriptionKey].description}
            </p>
            <div className="project-technologies">
              {p.technologies.map((tech, idx) => (
                <span key={idx} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={p.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <i className="bi bi-github"></i>
              <span>{t.projects.codeButton}</span>
            </a>
          </div>
        ))}
      </div>
      <hr className="lineAbout"></hr>
    </section>
  );
}
