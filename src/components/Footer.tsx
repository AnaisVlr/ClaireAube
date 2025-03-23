import { Link } from "react-router";

import './footer.css';
import logoTerracota from '../assets/img/logo_terracota.webp'

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
    <footer>
      <div className="footer-container">
        <div className="col">
          <div className="head">
            <h2>Claire Aube</h2>
            <p className="head-title">Thérapeute holistique en santé<br/>Féminine et Ritualiste</p>
          </div>
          <nav>
            {navItems.map((item) => (
              <div>
                <Link to={item.href}>
                  {item.label}
                </Link>
              </div>
              ))}
          </nav>
        </div>
        <div className="col">
          <img src={logoTerracota} alt="Logo Claire Aube" className='logo' loading="lazy"/>
        </div>
        <div className="col">
          <div className="instagram-title">
            Retrouve moi sur Instagram  
            <FontAwesomeIcon icon={faInstagram} className='instagram-icon'/>
          </div>
          <div className="instagram-feed">
            <div className="instagram-feed-row">
              <div className="instagram-feed-item">
                <img src="" alt="Instagram feed"/>
              </div>
              <div className="instagram-feed-item">
                <img src="" alt="Instagram feed"/>
              </div>
              <div className="instagram-feed-item">
                <img src="" alt="Instagram feed"/>
              </div>
            </div>
          </div>
          <div className="contact">
            <Link to="/contact">
              <button>
                Me contacter
              </button>
            </Link>
            <div className="contact-ways">
              <button>
                <FontAwesomeIcon icon={faEnvelope} className='icon'/>
              </button>
              <button>
                <FontAwesomeIcon icon={faPhone} className='icon'/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Claire Aube - Tous droits réservés - Made by Anaïs
        </p>
      </div>
    </footer>
  </>
  );
}
