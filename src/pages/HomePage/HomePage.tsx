import { Button, Container, Grid, Typography } from '@mui/material';
import FlowerImg from '../../assets/img/flower.webp';
import { PrestationItem } from '../../components/PrestationItem';
import { PrestationType } from '../../types';
import './homepage.css';

export default function HomePage() {
  const prestationItems: PrestationType[] = [
    {
      title: "Consultations",
      class: "prestations-item consultations-picture",
      description: "Un accompagnement qui peut autant porter sur des problématiques physiques, qu'émotionnelles et psychiques.",
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
            <Typography className="typoTanPearl" variant="h5">Bienvenue</Typography>
            <Typography>
              Je vous accompagne avec douceur, empathie, bienveillance… mais aussi avec l’éthique profonde
              de vous transmettre des savoirs utiles et justes pour vous. De vous aider à vous
              réapproprier votre souveraineté dans vos parcours de santé et de mieux-être.
              Je crée des espaces sacrés où vous pouvez vous déposer en toute confiance, vous laisser être,
              vous retrouver. Des parenthèses suspendues pour aller à la rencontre de votre magie intérieure
              et de vos ressources.<br/>
              Je tisse des liens, qui vous permettent des moments de reliance à vous même, et à d’autres femmes.
              Je lance des passerelles entre l’avant et l’après, et j’invite à la reconnexion aux sagesses
              éternelles. Je cultive l’amour du beau et du doux, et je le met au service de votre âme.
              J’honore la femme, dans toute sa vulnérabilité et toute sa force ; dans sa lumière comme
              dans ses ombres. <br/>
              Je suis là, je vous vois et vous entend
            </Typography>
            <Typography className="typoTanPearl" variant="h5" sx={{ width: "100%", textAlign: "right" }}>Claire</Typography>
            <Grid size={12}>
              <Button variant={"contained"}>Je prends rendez-vous !</Button>
            </Grid>
          </Grid>
        </Grid>
        <Typography className="citation-container flex-row align-center justify-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis culpa saepe debitis.
          Aut obcaecati pariatur animi quam cupiditate!
        </Typography>
      </Container>
      <Grid size={12} container spacing={2} className="prestations-container">
        <Typography className="typoTanPearl" variant="h5">Mes prestations</Typography>
        <Grid size={12} container spacing={2} justifyContent={"center"}>
          {prestationItems.map((prestation) => (
            <PrestationItem prestation={prestation} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
