import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

export default function ContactForm() {
  const sectionRef = useScrollAnimation();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send("service_dhafka1", "template_9qwu5ad", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "martinsaporiti7@gmail.com",
      })
      .then(() => {
        setStatus("success");
        setFormData({ name: "", subject: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error enviando email:", error);
        setStatus("idle");
      });
  };

  return (
    <section
      id="contactameSec"
      ref={sectionRef}
      className="contact-section scroll-animate"
    >
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2 className="contact-title">
            <span id="contact-title" className="title-accent">
              {t.contact.title}
            </span>
          </h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-layout">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <div className="input-wrapper">
                  <span className="input-icon">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="form-input"
                    required
                  />
                  <div className="input-highlight"></div>
                </div>
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <span className="input-icon">
                    <i className="bi bi-chat-left-dots"></i>
                  </span>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className="form-input"
                    required
                  />
                  <div className="input-highlight"></div>
                </div>
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <span className="input-icon">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="form-input"
                    required
                  />
                  <div className="input-highlight"></div>
                </div>
              </div>

              <div className="input-group">
                <div className="textarea-wrapper">
                  <span className="textarea-icon">
                    <i className="bi bi-pencil-square"></i>
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="form-textarea"
                    rows="5"
                    required
                  />
                  <div className="input-highlight"></div>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${status}`}
                disabled={status === "sending"}
              >
                <span className="btn-text">
                  {status === "sending" ? (
                    <>
                      <span className="spinner"></span>
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <span className="send-icon"></span>
                      {t.contact.sendButton}
                    </>
                  )}
                </span>
              </button>

              {status === "success" && (
                <div className="success-message">
                  <span className="success-icon"></span>
                  <p>{t.contact.successMessage}</p>
                </div>
              )}
            </form>
          </div>

          <aside className="info-card" aria-label="Información de contacto">
            <h3 className="info-title">{t.contact.infoTitle}</h3>
            <p className="info-description">{t.contact.infoDescription}</p>

            <div className="info-section">
              <h4 className="info-section-title">{t.contact.email}:</h4>
              <div className="info-item">
                <i className="bi bi-envelope-fill info-icon-bi"></i>
                <span className="info-text">martinsaporiti7@gmail.com</span>
              </div>
            </div>

            <div className="info-section">
              <h4 className="info-section-title">{t.contact.location}:</h4>
              <div className="info-item">
                <i className="bi bi-geo-alt-fill info-icon-bi"></i>
                <span className="info-text">{t.contact.locationValue}</span>
              </div>
            </div>

            <div className="info-section">
              <h4 className="info-section-title">{t.contact.social}:</h4>
              <div className="info-item">
                <a
                  href="https://github.com/MartinSaporiti99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mart%C3%ADn-saporiti-566433238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="info-availability">
              <i className="bi bi-clock-fill"></i>
              <span>Disponible para proyectos</span>
            </div>
          </aside>
        </div>
      </div>
      <hr className="lineContact"></hr>
    </section>
  );
}
