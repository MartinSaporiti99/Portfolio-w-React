import React, { useState, useEffect } from "react";
import "./Header.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

export default function Header({ onContact, onDownload }) {
  const sectionRef = useScrollAnimation();
  const { t } = useLanguage();

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = t.header.title;

  useEffect(() => {
    let timer;

    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && text === "") {
      timer = setTimeout(() => setIsDeleting(false), 1000);
    } else if (isDeleting) {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, 80);
    } else {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText]);
  return (
    <section
      id="presentacionSec"
      ref={sectionRef}
      className="header-section scroll-animate"
    >
      <h3>{t.header.greeting}</h3>
      <h1 className="rainbow-text">
        <span className="word">Martín</span>
        <br></br>
        <span className="word">Saporiti</span>
      </h1>
      <h3 className="typewriter-header">
        <span className="typewriter-text-header">{text}</span>
        <span className="cursor-header">|</span>
      </h3>
      <div className="header-buttons">
        <button onClick={onContact} className="buttonHeader">
          <i className="bi bi-send-fill"></i>
          {t.header.contactButton}
        </button>
        <button onClick={onDownload} className="buttonHeader">
          <i className="bi bi-download"></i>
          {t.header.cvButton}
        </button>
      </div>
      <ul className="social-links">
        <li>
          <a
            href="https://github.com/MartinSaporiti99"
            target="_blank"
            rel="noreferrer"
            className="iconButton"
          >
            <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/martin-saporiti-566433238/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
          </a>
        </li>
      </ul>
      <hr className="lineAbout"></hr>
    </section>
  );
}
