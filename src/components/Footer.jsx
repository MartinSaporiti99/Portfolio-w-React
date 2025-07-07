import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <section id="despedidaSec">
        <div className="despedida">
          <h2>Gracias por visitar mi portfolio!</h2>
          <a className="haciaAContacto">Contactame</a>
          <p>O tambien puedes contactarme a través de:</p>
          <ul className="ulBotonesAbajo">
            <li>
              <a
                href="https://github.com/MartinSaporiti99"
                className="linkContacto"
              >
                <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mart%C3%ADn-saporiti-566433238/"
                className="linkContacto"
              >
                <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
              </a>
            </li>
          </ul>
          <h3>Hecho con ❤️ por Martin Saporiti.</h3>
        </div>
      </section>
    </>
  );
};
