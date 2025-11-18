import "./About.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const sectionRef = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      id="aboutSec"
      ref={sectionRef}
      className="about-section scroll-animate"
    >
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            <span id="about-title" className="title-accent">
              {t.about.title}
            </span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <p className="intro-text">
              <span className="greeting">{t.about.greeting}</span>{" "}
              {t.about.intro}{" "}
              <span className="name-highlight">Martín Saporiti</span>,{" "}
              {t.about.description}
            </p>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <span className="detail-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </span>
              <p>
                {t.about.detail1} <strong>{t.about.detail1Bold}</strong>
                {t.about.detail1Rest}
              </p>
            </div>

            <div className="detail-item">
              <span className="detail-icon">
                <i className="bi bi-book"></i>
              </span>
              <p>
                {t.about.detail2} <strong>{t.about.detail2Bold}</strong>
                {t.about.detail2Rest}
              </p>
            </div>

            <div className="detail-item">
              <span className="detail-icon">
                <i className="bi bi-lightning"></i>
              </span>
              <p>
                {t.about.detail3} <strong>{t.about.detail3Bold}</strong>
                {t.about.detail3Rest}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="lineAbout"></hr>
    </section>
  );
}
