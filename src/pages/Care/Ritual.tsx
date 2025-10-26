import { useParams } from "react-router";
import { BulletedList } from "../../components/BulletedList";
import { FAQ } from "../../components/FAQ";
import { QuestionType, RitualInformations } from "../../types";
import { getRitualInformations } from "../../utils/ritualHelper";
import { useTexts } from "../../hooks/useTexts";
import { CareRituals } from "./CareRituals";
import { Localisation } from "../../components/Localisation";
import { Grid, Typography } from "@mui/material";

export const Ritual = () => {
  const t = useTexts();

  const cities = [
    { city: "Sisteron", byCar: "10 minutes en voiture" },
    { city: "Forcalquier", byCar: "45 minutes en voiture" },
    { city: "Aix en Provence", byCar: "1h15 en voiture" },
    { city: "Marseille", byCar: "1h30 en voiture" },
  ]

  // On récupère l'url pour récupérer le rituel
  const { ritualName } = useParams();

  // Si on a pas de nom, on retourne à la liste des soins rituels
  if (!ritualName) {
    return <CareRituals />
  }

  const data: RitualInformations = getRitualInformations(ritualName, t);

  const questionsFAQ: QuestionType[] = [
    {
      question: t.rituals.ritualDetails.FAQ.when,
      answer: <BulletedList listItems={data.when} bulletColor="dark" />
    },
    {
      question: t.rituals.ritualDetails.FAQ.duration,
      answer: data.duration
    },
    {
      question: t.rituals.ritualDetails.FAQ.location,
      answer: <Localisation cities={cities} />
    },
    {
      question: t.rituals.ritualDetails.FAQ.pricing,
      answer: data.pricing
    },
    {
      question: t.rituals.ritualDetails.FAQ.whatsInclude,
      answer: data.whatsIncludes
    },
    {
      question: data.isToKnow ? t.rituals.ritualDetails.FAQ.toKnow : null,
      answer: data.toKnow
    }
  ].filter((obj) => obj.question && obj.answer);

  return (
    <Grid container flexDirection={'column'} spacing={3} py={{ xs: '4rem', sm: '6rem' }} px={{ xs: 2, sm: "6rem" }}>

      <Grid container spacing={4} flexDirection={{ xs: 'column', sm: 'row' }}>
        <Grid container spacing={1} size={{ xs: 12, sm: 9 }}>
          <Typography variant="h5" className='typoTanPearl'>{data.ritualName}</Typography>
          <Grid size={12}>
            {data.ritualDescrition}
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
          <img src={data.ritualPicture} style={{ width: "100%", borderRadius: '1rem' }} />
        </Grid>
      </Grid>

      <Grid>
        <Typography variant="h6">{t.rituals.chestHeart.whatsIncludes.title}</Typography>
        {/* <BulletedList listItems={data.whatsIncludes} bulletColor="dark" /> */}
        <Typography>{data.whatsIncludes}</Typography>
      </Grid>

      <Grid container flexDirection={{ xs: 'column', sm: 'row' }}>
        <Grid
          size={{ xs: 12, sm: 6 }}
          padding={2}
          sx={{
            backgroundColor: 'secondary.light',
            borderRadius: '1rem'
          }}
        >
          <Typography variant="h6">{t.rituals.chestHeart.physicalBenefits.title}</Typography>
          <BulletedList listItems={data.physicalBenefits} bulletColor="dark" />
        </Grid>

        <Grid
          size={{ xs: 12, sm: 6 }}
          padding={2}
          sx={{
            backgroundColor: 'secondary.light',
            borderRadius: '1rem'
          }}
        >
          <Typography variant="h6">{t.rituals.chestHeart.energeticEmotionalBenefits.title}</Typography>
          <BulletedList listItems={data.energeticEmotionalBenefits} bulletColor="dark" />
        </Grid>
      </Grid>

      {/* FAQ */}
      <Grid>
        <Typography gutterBottom variant="h4">{t.consults.faq.FAQ}</Typography>
        <FAQ questionList={questionsFAQ} />
      </Grid>
    </Grid>
  )
}