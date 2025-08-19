import { Link } from "react-router";

import './footer.css';
import logoTerracota from '../assets/img/logo/logo_terracota.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const navItems = [
    { label: "À propos", href: "/about" },
    { label: "CGS", href: "/CGS" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
    { label: "Médical disclaimer", href: "/medical-disclaimer" },
    { label: "Mentions légales", href: "/mentions-legales" },
  ];

  return (
    <>
      <footer className="flex-column">
        <div className="flex-row align-center justify-between">
          <div className="flex-column gap-1">
            <div className="gap-50 flex-column">
              <h2>Claire Aube</h2>
              <p className="head-title">Thérapeute holistique en santé<br />Féminine et Ritualiste</p>
            </div>
            <nav className="flex-column gap-50">
              {navItems.map((item) => (
                <div>
                  <Link to={item.href}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex-column gap-1">
            <img src={logoTerracota} alt="Logo Claire Aube" className='logo' loading="lazy" />
          </div>
          <div className="flex-column gap-1">
            <div className="instagram-title">
              Retrouve moi sur Instagram
              <FontAwesomeIcon icon={faInstagram} className='instagram-icon' />
            </div>
            <div className="flex-column gap-1 align-center">
              <div className="flex-row gap-1 justify-center">
                <div className="instagram-feed-item">
                  <img src="" alt="Instagram feed" />
                </div>
                <div className="instagram-feed-item">
                  <img src="" alt="Instagram feed" />
                </div>
                <div className="instagram-feed-item">
                  <img src="" alt="Instagram feed" />
                </div>
              </div>
            </div>
            <div className="flex-column gap-1 align-center">
              <Link to="/contact" className="btn btn-sm btn-primary">
                Me contacter
              </Link>
              <div className="flex-row gap-2">
                <button className="btn-sm btn-outline-primary">
                  <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
                </button>
                <button className="btn-sm btn-primary">
                  <FontAwesomeIcon icon={faPhone} className='contact-icon' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row align-center justify-between gap-2 pt-2">
          <p>
            © 2025 Claire Aube - Tous droits réservés - Made by Anaïs
          </p>
        </div>
      </footer>
    </>
  );
}
