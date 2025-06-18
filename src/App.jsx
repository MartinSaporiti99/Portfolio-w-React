import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";

export default function App() {
  const contactRef = useRef();

  const scrollToContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  const downloadCV = () => window.open("/descargas/cv.pdf");

  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Header onContact={scrollToContact} onDownload={downloadCV} />
      <About />
      <Projects />
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </>
  );
}
