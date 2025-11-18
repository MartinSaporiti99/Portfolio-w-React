import "./Footer.css";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-simple">
      <div className="footer-content-simple">
        <div className="footer-text">
          <span>
            © {new Date().getFullYear()} Martín Saporiti. {t.footer.madeWith}
          </span>
        </div>
      </div>
    </footer>
  );
};
