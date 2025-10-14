import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { useTexts } from "../hooks/useTexts";

import logoTerracota from '../assets/img/logo/logo_terracota.webp'

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
              <img src={logoTerracota} alt="Logo Claire Aube" loading="lazy" width={"60%"} />
            </Grid>

            {/* Contact */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Grid container gap={1} alignItems={"center"}>
                <Typography fontWeight={700}>
                  {t.general.findMeOnInsta}
                </Typography>
                <FontAwesomeIcon icon={faInstagram} />

                {/* <InstagramPost url="https://www.instagram.com/p/DN5MBPzjAHi/?utm_source=ig_web_copy_link" /> */}

              </Grid>

              <Divider sx={{ my: 2 }} />

              <Grid>
                <Button sx={{ flexDirection: 'row', gap: 1, textTransform: "none" }} component="a" href={"/contact"}>
                  <FontAwesomeIcon icon={faMessage} />
                  <Typography >{t.general.contactForm}</Typography>
                </Button>

                <Divider sx={{ my: 2 }} />

                <Button sx={{ flexDirection: 'row', gap: 1, textTransform: "none" }} component="a" href={"mailto:" + t.general.email}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <Typography variant="body2">{t.general.email}</Typography>
                </Button>

                <Button sx={{ flexDirection: 'row', gap: 1 }} component="a" href={"tel:" + t.general.phone}>
                  <FontAwesomeIcon icon={faPhone} />
                  <Typography variant="body2">{t.general.phone}</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid >
            <Typography textAlign={{ xs: "center", sm: "left" }}>{t.general.footer}</Typography>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
