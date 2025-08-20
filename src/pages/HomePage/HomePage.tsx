import { Button, Container, Grid, Typography } from '@mui/material';
import profilePicture from '../../assets/img/photo_Claire.png';
import video from '../../assets/img/video_background.mp4';
import video2 from '../../assets/img/baniere.mp4';
import logo from '../../assets/img/logo/logo_text_white.webp';
import { PrestationItem } from '../../components/PrestationItem';
import { PrestationType } from '../../types';
import './homepage.css';
import { useTexts } from '../../hooks/useTexts';

export const HomePage = () => {
  const t = useTexts();

  const prestationItems: PrestationType[] = [
    {
      title: t.consults.consults,
      class: "prestations-item consultations-picture",
      description: t.homePage.consultsDescription,
      link: "/consultations"
    },
    {
      title: t.rituals.careRituals,
      class: "prestations-item soins-picture",
      description: t.homePage.careRitualsDescription,
      link: "/soin-rituels"
    },
  ];

  return (
    <Grid size={12} container spacing={0}>
      <Grid id="video-section" size={12} className="imageHomePage flex-row align-center justify-center p-1">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4"></source>
        </video>
        <img src={logo} alt="Logo Claire Aube" loading="lazy" />
      </Grid>
      <Container sx={{ py: 2 , pt: 12}}>
        <Grid size={12} container spacing={2}>
          <Grid size={4} className="pictureProfile">
            <img src={profilePicture} alt="Photo de Claire Aube" loading="lazy" />
          </Grid>
          <Grid size={8} container spacing={2}>
            <Typography className="typoTanPearl" variant="h5">{t.homePage.welcome}</Typography>
            <Typography>
              {t.homePage.welcomeText}
            </Typography>
            <Typography className="typoTanPearl" variant="h5" sx={{ width: "100%", textAlign: "right" }}>{t.homePage.claire}</Typography>
            <Grid size={12}>
              <Button variant={"contained"}>{t.general.takeAppointment}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid size={12} className="banniere">
        <video autoPlay muted playsInline>
          <source src={video2} type="video/mp4"></source>
        </video>
      </Grid>
      <Grid size={12} container spacing={2} className="prestations-container">
        <Typography className="typoTanPearl" variant="h5">{t.homePage.myServices}</Typography>
        <Grid size={12} container spacing={2} justifyContent={"center"}>
          {prestationItems.map((prestation) => (
            <PrestationItem prestation={prestation} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
