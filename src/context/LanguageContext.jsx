import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    header: {
      greeting: "Hola 👋, soy",
      title: "Técnico en Programación",
      contactButton: "Contáctame",
      cvButton: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      greeting: "👋 ¡Hola!",
      intro: "Soy",
      description:
        "Técnico en Programacion apasionado por crear experiencias digitales únicas.",
      detail1: "Me especializo en",
      detail1Bold: "desarrollo web",
      detail1Rest:
        ", especialmente con React y .NET, construyendo interfaces modernas y responsivas.",
      detail2: "Disfruto",
      detail2Bold: "aprendiendo nuevas tecnologías",
      detail2Rest:
        " y manteniéndome actualizado con las últimas tendencias del desarrollo.",
      detail3: "Mi objetivo es",
      detail3Bold: "resolver problemas complejos",
      detail3Rest:
        " y crear soluciones que impacten positivamente en los usuarios.",
    },
    projects: {
      title: "Proyectos",
      codeButton: "Código",
      project1: {
        description:
          "Pagina web que trae mediante una API los valores del dia del dolar y los muestra en moneda nacional",
      },
      project2: {
        description:
          "Tienda online de videojuegos desarrollada con React y Node.js",
      },
      project3: {
        description:
          "Migracion del backend a .NET, deploy en Azure, creacion de Secret Keys, coneccion con API's externas",
      },
    },
    skills: {
      title: "Habilidades",
      backend: "Backend",
      frontend: "Frontend",
      tools: "Herramientas",
    },
    contact: {
      title: "¡Contáctame!",
      subtitle: "Me encargare de responderte lo antes posible. ¡Hablemos!",
      namePlaceholder: "Tu nombre",
      subjectPlaceholder: "Asunto",
      emailPlaceholder: "Tu correo electrónico",
      messagePlaceholder: "Tu mensaje",
      sendButton: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje Enviado!",
      successMessage: "Gracias por contactarme. Te responderé pronto.",
      infoTitle: "Información de Contacto",
      infoDescription:
        "¿Tienes alguna pregunta o propuesta? No dudes en contactarme.",
      email: "Correo",
      location: "Ubicación",
      locationValue: "Rosario, Argentina",
      social: "Redes Sociales",
    },
    footer: {
      madeWith: "Hecho con ❤️",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    header: {
      greeting: "Hi 👋, I'm",
      title: "Programming Technician",
      contactButton: "Contact Me",
      cvButton: "Download CV",
    },
    about: {
      title: "About Me",
      greeting: "👋 Hello!",
      intro: "I'm",
      description:
        "Programming Technician passionate about creating unique digital experiences.",
      detail1: "I specialize in",
      detail1Bold: "web development",
      detail1Rest:
        ", especially with React and .NET, building modern and responsive interfaces.",
      detail2: "I enjoy",
      detail2Bold: "learning new technologies",
      detail2Rest: " and staying updated with the latest development trends.",
      detail3: "My goal is to",
      detail3Bold: "solve complex problems",
      detail3Rest: " and create solutions that positively impact users.",
    },
    projects: {
      title: "Projects",
      codeButton: "Code",
      project1: {
        description:
          "Web page that fetches daily dollar values through an API and displays them in local currency",
      },
      project2: {
        description: "Online video game store developed with React and Node.js",
      },
      project3: {
        description:
          "Backend migration to .NET, Azure deployment, Secret Keys creation, external APIs connection",
      },
    },
    skills: {
      title: "Skills",
      backend: "Backend",
      frontend: "Frontend",
      tools: "Tools",
    },
    contact: {
      title: "Contact Me!",
      subtitle: "I'll make sure to respond as soon as possible. Let's talk!",
      namePlaceholder: "Your name",
      subjectPlaceholder: "Subject",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      sendButton: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thank you for contacting me. I'll respond soon.",
      infoTitle: "Contact Information",
      infoDescription:
        "Have any questions or proposals? Feel free to contact me.",
      email: "Email",
      location: "Location",
      locationValue: "Rosario, Argentina",
      social: "Social Networks",
    },
    footer: {
      madeWith: "Made with ❤️",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
