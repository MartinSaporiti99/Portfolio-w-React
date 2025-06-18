import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded((prev) => !prev);

  const textoCompleto = `¡Hola! Soy Martín Saporiti, estudiante de programación. Me apasiona el desarrollo web, especialmente con React, y disfruto aprendiendo nuevas tecnologías. Me encanta resolver problemas y construir interfaces intuitivas que impacten positivamente en los usuarios.`;
  const teaser = textoCompleto.slice(0, 150);

  return (
    <section id="aboutSec" className="about-section">
      <div className="aboutDiv">
        <h2>Sobre mí</h2>
        <p>
          {isExpanded ? textoCompleto : teaser}
          {textoCompleto.length > teaser.length && (
            <span className="toggle-btn" onClick={handleToggle}>
              {isExpanded ? " Ver menos" : "...Más Información"}
            </span>
          )}
        </p>
      </div>
    </section>
  );
}
