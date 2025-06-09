import { Button, Grid, Paper, Typography } from "@mui/material"
import { BulletedList } from "../../components/BulletedList"
import { FAQ } from "../../components/FAQ"
import { QuestionType } from "../../types"

import consultImg from "../../assets/img/consults.webp"

export const Consultations = () => {
  const questionsFAQ: QuestionType[] = [
    {
      question: "Comment cela se passe-t-il concrètement ?",
      answer: "LOREM"
    },
    {
      question: "Quelle est la différence entre pluseirus rdv ponctuels et les accompagnements de suivis",
      answer: "jjj"
    },
    {
      question: "Où ont lieu nos rencontres ?",
      answer: "jjj"
    },
    {
      question: "Quels sont les tarifs ?",
      answer: "jjj"
    },
    {
      question: "Comment prendre RDV ?",
      answer: "jjj"
    }
  ]

  const thematiquesList: string[] = [
    "Des maux et pathologies gynécologiques : endométriose, SOPK, OPK, IOP, aménorrhées, etc...",
    "Du désir d'enfant, des problématiques de fertilité, des PMA",
    "De la grossesse",
    "Des grossesses arrêtées (IVG, IMG, ISG) et du deuil périnatal",
    "Du post-partum et de l'expérience de la maternité",
    "De la pré-ménopause ou de la ménopause",
    "Du cycle féminin et des règles (notamment autour des premières règles et de la pratique du flux instinctif)",
    "De la sexualité et de la contraception (notamment autour de la symptothermie)",
    "Des traumatismes et mémoires corporelles, émotionnelles, transgénérationnelles liées à l'utérus",
    "De la reconnexion au féminin",
  ]

  const expectationsList: string[] = [
    "Une amélioration significative de votre santé gynécologique (notamment via le soutien par la phytothérapie).",
    "Une meilleure compréhension de vous-même, de votre corps et son fonctionnement.",
    "De la clarté sur vos schémas limitants, patterns répétitifs, mécanismes d'adaptation, systèmes de défense... Du discernement sur les rouages de ce qui peut se passer en vous et dans vos relations.",
    "De l'amour, de la bienveillance envers vous-même, pour vos corps et vos parcours de Vie.",
    "De l'empuissancement pour récupérer et vous connecter à  votre pouvoir féminin, pour devenir souveraine de votre vie.",
    "Une approche symbolique et analytique de vos maux et difficultés.",
    "Un espace sécurisant pour vous rencontrer, revisiter vos zones d'ombres et vos blessures. Pour illuminer tout ce qui n'a pas été vu, entendu, ou digéré. Et des outils pour accepter et libérer.",
    "Une reconnexion à votre essence profonde, à vos dons et à votre magie personnelle.",
    "Du bien être, de la transformation, de l'apaisement, de la confiance.",
    "Tout ce à quoi vous êtes prêtes à ouvrir la porte, tout ce que vous souhaitez vous offrir à vous même.",
  ]

  return (
    <>
      <Grid className="px-6 py-2" container spacing={2}>
        {/* Intro*/}
        <Grid size={12}>
          <Typography variant="h6" gutterBottom>
            Je propose un accompagnement en santé féminine et en gynécologie holistique.
          </Typography>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography>
                Mes consultations portent autant sur des problématiques physiques (en vue de soutenir, préparer,
                rééquilibrer le corps, etc...), qu'émotionnelles et psychiques (peurs, traumatismes, blocages,
                mémoires transgénérationnelles, etc...). <br />
                J'utilise différents outils et approches, que je vous propose selon vos besoins et préférences.
                Tous mes accompagnements sont individuels et personnalisés. Ils peuvent être ponctuels ou faire l'objet
                d'un suivi régulier. <br />
                Vous pourrez retrouver des propositions de formules, et il est également possible de créer un programme de soin sur mesure.
              </Typography>

            </Grid>
            <Grid size={4}>
              <img src={consultImg} />
            </Grid>
          </Grid>
        </Grid>

        {/* Moment de vie */}
        <Grid size={12}>
          <Typography variant="h6">
            A quels moments de vie je peux vous soutenir ?

          </Typography>
          <Grid>
            Frise chrono
          </Grid>
          <Grid>
            <Typography>Mais aussi : </Typography>
            <BulletedList listItems={["Lors d'une période de deuil ou de profonde transformation", "A tout moment de votre vie ou de votre cycle, quand vous en ressentez le besoin"]} bulletColor="dark" />
          </Grid>
        </Grid>

        {/* Thématiques */}
        <Grid size={12}>
          <Typography variant="h6">
            Quelques thématiques qui peuvent être abordée en séance :
          </Typography>
          <BulletedList listItems={thematiquesList} bulletColor="dark" />
        </Grid>

        {/* Bannière photo avec citation */}
        <Grid size={12}>
          Citation
        </Grid>

        {/* Expectations */}
        <Grid size={12}>
          <Typography variant="h6">
            Ce que vous pouvez attendre de mes accompagnements :
          </Typography>
          <Typography>
            Lorsque nous entamons un travail approfondi ensemble, nous agissons sur différents niveaux,
            autant sur le corps physique, que sur le psychique et l'énergétique. Ainsi, les bienfaits sont multiples et transformateurs.
          </Typography>
          <BulletedList listItems={expectationsList} bulletColor="dark" />
        </Grid>

        {/* Déroulé et modalités */}
        <Grid container spacing={2} size={12}>
          <Grid size={6}>
            <Typography variant="h6">
              A la séance :
            </Typography>
            <Paper>
              <Typography>
                1ère séance
              </Typography>
              <Typography>
                1h30
              </Typography>
            </Paper>
            <Paper>
              <Typography>
                Séances de suivi
              </Typography>
              <Typography>
                45 minutes
              </Typography>
            </Paper>
          </Grid>

          <Grid size={6}>
            <Typography variant="h6">Accompagnements en profondeur :</Typography>
            <Button variant="contained">Je découvre les formules</Button>
          </Grid>

        </Grid>

        {/* FAQ */}
        <Grid size={12}>
          <FAQ questionList={questionsFAQ} />
        </Grid>
      </Grid>
    </>
  )
}