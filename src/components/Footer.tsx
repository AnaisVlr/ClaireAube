import { Link } from "react-router";

import './footer.css';
import logoTerracota from '../assets/img/logo/logo_terracota.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button, Grid, Typography } from "@mui/material";
import { useTexts } from "../hooks/useTexts";

export default function Footer() {
  const t = useTexts();

  const navItems = [
    { label: t.aboutMe.aboutMe, href: "/about" },
    { label: t.general.CGS, href: "/CGS" },
    { label: t.general.privatePolicy, href: "/politique-de-confidentialite" },
    { label: t.general.medicalDisclaimer, href: "/medical-disclaimer" },
    { label: t.general.legalMention, href: "/mentions-legales" },
  ];

  return (
    <>
      <footer>
        <Grid
          size={12}
          container
          spacing={2}
          flexDirection={"column"}
          px={{ xs: 2, sm: 8 }}
          py={{ xs: 2, sm: 4 }}
        >

          <Grid size={12} container spacing={2} flexDirection={{ xs: "column", sm: "row" }}>
            {/* Pages */}
            <Grid size={{ xs: 12, sm: 4 }} container spacing={2} flexDirection={"column"}>
              <Grid>
                <Typography variant="h4" fontWeight={700} className="typoTanPearl">{t.general.fullName}</Typography>
                <Typography fontWeight={500}>{t.general.job}</Typography>
              </Grid>
              <nav>
                <Grid size={12} container spacing={1} flexDirection={"column"}>
                  {navItems.map((item) => (
                    <Link to={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </Grid>
              </nav>
            </Grid>
            {/* Logo */}
            <Grid size={{ xs: 12, sm: 4 }} textAlign={"center"}>
              <img src={logoTerracota} alt="Logo Claire Aube" loading="lazy" width={"80%"} />
            </Grid>
            {/* Contact */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography fontWeight={700}>
                {t.general.findMeOnInsta}
                <FontAwesomeIcon icon={faInstagram} />
              </Typography>
              <Grid>
                {/* <InstagramPost url="https://www.instagram.com/p/DN5MBPzjAHi/?utm_source=ig_web_copy_link" /> */}
              </Grid>
              <Grid>
                <Link to="/contact">
                  {t.general.contactMe}
                </Link>
                <Grid>
                  <Button variant={"contained"}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Button>
                  <Button variant={"contained"}>
                    <FontAwesomeIcon icon={faPhone} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid >
            <Typography textAlign={{ xs: "center", sm: "left" }}>
              © 2025 Claire Aube - Tous droits réservés - Made by Anaïs
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
