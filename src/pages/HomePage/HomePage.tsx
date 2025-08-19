import { Button, Container, Grid, Typography } from '@mui/material';
import FlowerImg from '../../assets/img/flower.webp';
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
      title: "Guidances",
      class: "prestations-item guidances-picture",
      description: "Deux voies d'exploration, deux outils d'introspection différents, pour éclairer vos chemins et mettre du mouvement dans vos pèlerinages personnels.",
      link: "/guidances"
    },
    {
      title: "Soins rituels",
      class: "prestations-item soins-picture",
      description: "Plus que des soins, de vrais rituels transformateurs. Des espaces vibrants et magiques pour honorer vos corps et soutenir les transformations.",
      link: "/soin-rituels"
    },
    {
      title: "Autres services",
      class: "prestations-item services-picture",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/autre-services"
    },
  ];

  return (
    <Grid size={12} container spacing={2}>
      <Grid size={12} className="imageHomePage">
        <img src={FlowerImg} alt="Picture background home page" loading="lazy" />
      </Grid>
      <Container sx={{py:2}}>
        <Grid size={12} container spacing={2}>
          <Grid size={4} className="pictureProfile">
            <img src={FlowerImg} alt="Photo de Claire" loading="lazy" />
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
        <Typography className="citation-container flex-row align-center justify-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis culpa saepe debitis.
          Aut obcaecati pariatur animi quam cupiditate!
        </Typography>
      </Container>
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
