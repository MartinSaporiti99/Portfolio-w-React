import React from "react";
import { useScrollNav } from "../hooks/useScrollNav";
import "./Navbar.css";

export default function Navbar() {
  const { hidden, scrolled } = useScrollNav();
  return (
    <nav
      id="navbar"
      className={`${hidden ? "hidden" : ""} ${scrolled ? "scrolled" : ""}`}
    >
      <ul className="nav-links">
        <li>
          <a href="#presentacionSec">Inicio</a>
        </li>
        <li>
          <a href="#aboutSec">Sobre mí</a>
        </li>
        <li>
          <a href="#projectsSec">Proyectos</a>
        </li>
        <li>
          <a href="#contactameSec">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
