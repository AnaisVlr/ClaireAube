import { Link, NavLink } from "react-router";

import './header.css';
import logoWhite from '../assets/img/logo_text_white.webp'

export default function Header() {
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Consultations", href: "/consultations" },
    { label: "Soins rituels", href: "/soin-rituels" },
    { 
      label: "Autres services", 
      href: "", 
      children: [
        { label: "Guidances", href: "/guidances" },
        { label: "Cercles et céremonies", href: "/cercles-ceremonies" },
        { label: "Ateliers", href: "/ateliers" },
        { label: "Retraites et transmissions", href: "/retraites-formations" },
      ]
    }
  ];

  return (
    <>
    <header className="header">
      <Link to="/">
      <img src={logoWhite} alt="Logo Claire Aube" className='logo' loading="lazy"/>
      </Link>
      <nav className="navMenu">
          {navItems.map((item) => (
            item.children ? (
              <div className="dropdown" key={item.label}>
                <span className="dropdown-label">{item.label}</span>
                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <NavLink 
                      key={child.href}
                      to={child.href} 
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink 
                key={item.href}
                to={item.href} 
                className={({ isActive }) => isActive ? "nav-active" : ""}
              >
                {item.label}
              </NavLink>
            )
          ))}
      </nav>
      <Link to="/contact">
        <button className="contact-button">
          Me contacter
        </button>
      </Link>
    </header>
  </>
  );
}
