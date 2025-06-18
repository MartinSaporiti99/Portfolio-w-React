import React from "react";
import "./Header.css";

export default function Header({ onContact, onDownload }) {
  return (
    <section id="presentacionSec" className="header-section">
      <h3>Hola 🤗, soy</h3>
      <h1 className="rainbow-text">
        <span className="word">Martín</span>
        <br></br>
        <span className="word">Saporiti</span>
      </h1>
      <h3>Estudiante de Programación 💻</h3>
      <div className="header-buttons">
        <button onClick={onContact}>Contáctame</button>
        <button onClick={onDownload}>Descargar CV</button>
      </div>
      <ul className="social-links">
        <li>
          <a
            href="https://github.com/MartinSaporiti99"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/martin-saporiti-566433238/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
