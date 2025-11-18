import React, { useState } from "react";
import { useScrollNav } from "../hooks/useScrollNav";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

export default function Navbar() {
  const { hidden, scrolled } = useScrollNav();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      const extraSpace = 20;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight - extraSpace;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`navbar ${hidden ? "hidden" : ""} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <a
            href="#presentacionSec"
            className="brand-link"
            onClick={(e) => handleSmoothScroll(e, "#presentacionSec")}
          >
            <span className="brand-text">
              <span className="brand-name">{"< MS/>"}</span>
            </span>
          </a>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a
              href="#presentacionSec"
              className="nav-link"
              onClick={(e) => handleSmoothScroll(e, "#presentacionSec")}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">{t.nav.home}</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about-title"
              className="nav-link"
              onClick={(e) => handleSmoothScroll(e, "#about-title")}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">{t.nav.about}</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects-title"
              className="nav-link"
              onClick={(e) => handleSmoothScroll(e, "#projects-title")}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">{t.nav.projects}</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills-title"
              className="nav-link"
              onClick={(e) => handleSmoothScroll(e, "#skills-title")}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">{t.nav.skills}</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact-title"
              className="nav-link cta-link"
              onClick={(e) => handleSmoothScroll(e, "#contact-title")}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">{t.nav.contact}</span>
            </a>
          </li>
        </ul>

        <button
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          <span className="lang-text">{language === "es" ? "EN" : "ES"}</span>
        </button>

        <div className="navbar-indicator"></div>
      </div>
    </nav>
  );
}
