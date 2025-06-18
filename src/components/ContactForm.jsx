import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
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
      .send("service_dhafka1", "template_9qwu5ad", formData)
      .then(() => setStatus("success"))
      .catch(() => setStatus("idle"));
  };

  return (
    <section id="contactameSec" className="contact-section">
      <div className="contact-wrapper">
        <h2>Contactactame !</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensaje"
            required
          />
          <button type="submit">
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
          {status === "success" && (
            <p className="mensaje-exito">¡Mensaje enviado!</p>
          )}
        </form>
      </div>
    </section>
  );
}
