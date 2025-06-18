import React from "react";
import "./Projects.css";

export default function Projects() {
  const proyectos = [
    {
      title: "Dolar Value",
      description:
        "Pagina web que trae mediante una API los valores del dia del dolar y los muestra en moneda nacional",
      link: "GitHub",
    },
    {
      title: "TheFrogGames",
      description: "E-Commerce de videojuegos hecho con React y Node.js",
      link: "GitHub",
    },
  ];

  return (
    <section id="projectsSec" className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
