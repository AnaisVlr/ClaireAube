import { Button, Container, Grid, Typography } from '@mui/material';
import profilePicture from '../../assets/img/photo_Claire.png';
import video from '../../assets/img/video_background.mp4';
import video2 from '../../assets/img/banniere.mp4';
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
      <Container sx={{ py: 2, pt: 12, pb: 6 }}>
        <Grid size={12} container spacing={2}>
          <Grid size={4} className="pictureProfile">
            <img src={profilePicture} alt="Photo de Claire Aube" loading="lazy" />
          </Grid>
          <Grid size={8} container spacing={2} sx={{ flexDirection: "column" }}>
            <Typography className="typoTanPearl" variant="h5">{t.homePage.welcome}</Typography>
            <Typography>{t.homePage.welcomeText}</Typography>
            <Typography>{t.homePage.welcomeText2}</Typography>
            <Typography>{t.homePage.welcomeText3}</Typography>
            <Typography>{t.homePage.welcomeText4}</Typography>
            <Grid size={12} container spacing={2} sx={{ flexDirection: "row", alignItems: "center" }}>
              <Typography>{t.homePage.welcomeText5}</Typography>
              <Button variant={"contained"} href="/contact">{t.general.takeAppointment}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <video autoPlay muted playsInline className="banniere">
        <source src={video2} type="video/mp4"></source>
      </video>
      <Grid size={12} container spacing={2} className="prestations-container" sx={{ flexDirection: "column", height: "100%", pb: 6 }}>
        <Typography className="typoTanPearl" variant="h5" sx={{ pb: 1 }}>{t.homePage.myServices}</Typography>
        <Typography>{t.homePage.servicesDescription1}</Typography>
        <Typography>{t.homePage.servicesDescription2}</Typography>
        <Typography>{t.homePage.servicesDescription3}</Typography>
        <Grid size={12} container spacing={2} justifyContent={"center"}>
          {prestationItems.map((prestation) => (
            <PrestationItem prestation={prestation} />
          ))}
        </Grid>
      </Grid>
      <Grid size={12} container spacing={2} flexDirection={'row'} justifyContent={'center'} className="disclaimer-container" sx={{ p: 6 }}>
        <Grid
          size={12}
          container
          spacing={2}
          flexDirection={'column'}
          sx={{
            padding: 4,
            backgroundColor: 'rgba(59, 27, 11, 0.6)',
            color: 'secondary.main',
            textAlign: 'center',
            borderRadius: 1,
          }}
        >
          <Grid>
            <Typography>{t.homePage.disclaimerMedical}</Typography>
            <Button variant={"contained"} color='secondary' href="/medical-disclaimer">{t.general.learnMore}</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
