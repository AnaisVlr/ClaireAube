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
      {/* Vidéo */}
      <Grid id="video-section" size={12} height={"100vh"}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "0",
            zIndex: "-1",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
        >
          <source src={video} type="video/mp4"></source>
        </video>
        <img
          src={logo}
          alt="Logo Claire Aube"
          loading="lazy"
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "contain" }}
        />
      </Grid>

      {/* Intro */}
      <Grid
        container
        size={12}
        spacing={2}
        flexDirection={{ xs: 'column', sm: 'row' }}
        py={2}
        px={2}
        pt={{ xs: 6, sm: 12 }}
      >
        <Grid size={{ xs: 12, sm: 4 }} className="pictureProfile" textAlign={'center'}>
          <img src={profilePicture} alt="Photo de Claire Aube" loading="lazy" />
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }} container spacing={2} flexDirection={'column'}>
          <Typography className="typoTanPearl" variant="h5">{t.homePage.welcome}</Typography>
          <Typography>{t.homePage.welcomeText}</Typography>
          <Typography>{t.homePage.welcomeText2}</Typography>
          <Typography>{t.homePage.welcomeText3}</Typography>
          <Typography>{t.homePage.welcomeText4}</Typography>
          <Grid size={12} container spacing={2} flexDirection={'row'} alignItems={'center'}>
            <Typography>{t.homePage.welcomeText5}</Typography>
            <Button variant={"contained"} href="/contact">{t.general.takeAppointment}</Button>
          </Grid>
        </Grid>
      </Grid>

      <video autoPlay muted playsInline width={"100%"}>
        <source src={video2} type="video/mp4" />
      </video>

      <Grid
        container
        size={12}
        spacing={2}
        py={2}
        px={2}
        flexDirection={'column'}
        className="prestations-container"
      >
        <Typography className="typoTanPearl" variant="h5" sx={{ pb: 1 }}>{t.homePage.myServices}</Typography>
        <Typography>{t.homePage.servicesDescription1}</Typography>
        <Typography>{t.homePage.servicesDescription2}</Typography>
        <Typography>{t.homePage.servicesDescription3}</Typography>
        <Grid
          size={12}
          container
          spacing={2}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
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
    </Grid >
  );
}
