import "./About.css";

export default function About() {
  return (
    <section id="aboutSec" className="about-section">
      <div className="aboutDiv">
        <h2>Sobre mí</h2>
        <p>
          <span>
            ¡Hola! Soy Martín Saporiti, estudiante de programación. Me apasiona
            el desarrollo web, especialmente con React, y disfruto aprendiendo
            nuevas tecnologías. Me encanta resolver problemas y construir
            interfaces intuitivas que impacten positivamente en los usuarios.
          </span>
        </p>
      </div>
      <hr className="lineAbout"></hr>
    </section>
  );
}
