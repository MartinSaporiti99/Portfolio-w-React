import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import ParticlesBackground from "./components/ParticlesBackground";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

export default function App() {
  const contactRef = useRef();

  const scrollToContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/MARTIN-SAPORITI-DESARROLLADOR-WEB.pdf";
    link.download = "Martin_Saporiti_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <LanguageProvider>
      <ParticlesBackground />
      <Navbar />
      <Header onContact={scrollToContact} onDownload={downloadCV} />
      <About />
      <Projects />
      <Skills />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </LanguageProvider>
  );
}
