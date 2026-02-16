import { Button, Grid, Stack, Typography } from "@mui/material"
import { BulletedList } from "../../components/BulletedList"
import { FAQ } from "../../components/FAQ"
import { QuestionType } from "../../types"

import consultImg from "../../assets/img/women_water.png"
import { useTexts } from "../../hooks/useTexts"
import { Timeline } from "../../components/Timeline"

import moment1 from '../../assets/img/symboles/1.png'
import moment2 from '../../assets/img/symboles/2.png'
import moment3 from '../../assets/img/symboles/3.png'
import moment4 from '../../assets/img/symboles/4.png'
import moment5 from '../../assets/img/symboles/5.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export const Consultations = () => {
  const t = useTexts();
  const questionsFAQ: QuestionType[] = [
    {
      question: t.consults.faq.question1,
      answer:
        (
          <Grid size={12} container spacing={2}>
            <Typography>{t.consults.faq.answer1_1}</Typography>
            <Typography>{t.consults.faq.answer1_2}</Typography>
            <Typography>{t.consults.faq.answer1_3}</Typography>
            <Typography>{t.consults.faq.answer1_4}</Typography>
          </Grid>
        )
    },
    {
      question: t.consults.faq.question2,
      answer: (
        <Grid size={12} container spacing={2}>
          <Typography>{t.consults.faq.answer2_1}</Typography>
          <Typography>{t.consults.faq.answer2_2}</Typography>
          <Typography>{t.consults.faq.answer2_3}</Typography>
          <Typography>{t.consults.faq.answer2_4}</Typography>
        </Grid>
      )
    },
    {
      question: t.consults.faq.question3,
      answer: t.consults.faq.answer3
    },
    {
      question: t.consults.faq.question4,
      answer: (
        <Grid size={12} container spacing={4} flexDirection={"column"}>
          <Grid size={12} container spacing={1} flexDirection={"column"}>
            <Typography>{t.consults.faq.answer4_1}</Typography>
            <Typography>{t.consults.faq.answer4_2}</Typography>
          </Grid>
          <Typography>{t.consults.faq.answer4_3}</Typography>
        </Grid>
      )
    },
    {
      question: t.consults.faq.question5,
      answer: (
        <Grid>
          <Grid size={12} container spacing={1} flexDirection={{ xs: 'column', sm: 'row' }}>
            <Typography>{t.consults.faq.answer5}</Typography>
            <Typography noWrap>{t.general.email}</Typography>
          </Grid>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            mt={4}
            alignItems="center"
          >
            {/* Bouton Instagram */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faInstagram} />}
              href="https://www.instagram.com/claire__aube/"
              target="_blank"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              {t.general.takeAppointmentViaInsta}
            </Button>

            {/* Bouton Mail */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faEnvelope} />}
              href={`mailto:claireaube.accompagnement@gmail.com?subject=Prise de rendez-vous&body=Bonjour,%0D%0A%0D%0AJe souhaiterais prendre rendez-vous pour...`}
              target="_blank"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              {t.general.takeAppointmentViaEmail}
            </Button>
          </Stack>
        </Grid>
      )
    }
  ]

  const thematiquesList1: string[] = [
    t.consults.thematiques.thematique1,
    t.consults.thematiques.thematique2,
    t.consults.thematiques.thematique3,
    t.consults.thematiques.thematique4,
    t.consults.thematiques.thematique5
  ]

  const thematiquesList2: string[] = [
    t.consults.thematiques.thematique6,
    t.consults.thematiques.thematique7,
    t.consults.thematiques.thematique8,
    t.consults.thematiques.thematique9,
    t.consults.thematiques.thematique10
  ]

  const expectationsList1: string[] = [
    t.consults.expectations.expectation1,
    t.consults.expectations.expectation2,
    t.consults.expectations.expectation3,
    t.consults.expectations.expectation4,
    t.consults.expectations.expectation5
  ]
  const expectationsList2: string[] = [
    t.consults.expectations.expectation6,
    t.consults.expectations.expectation7,
    t.consults.expectations.expectation8,
    t.consults.expectations.expectation9,
    t.consults.expectations.expectation10
  ]

  const timelineItems = [
    { title: t.consults.lifeMoments.moment1, image: moment1 },
    { title: t.consults.lifeMoments.moment2, image: moment2 },
    { title: t.consults.lifeMoments.moment3, image: moment3 },
    { title: t.consults.lifeMoments.moment4, image: moment4 },
    { title: t.consults.lifeMoments.moment5, image: moment5 },
  ];

  return (
    <Grid mt={{ xs: 8, sm: '4rem' }} py={{ xs: 2, sm: '2rem' }}>
      {/* Intro*/}
      <Grid size={12} container spacing={2} px={{ xs: 2, sm: '6rem' }} py={"2rem"} flexDirection={{ xs: 'column', sm: "row" }}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography>{t.consults.intro.intro1}</Typography>
          <Typography>{t.consults.intro.intro2}</Typography>
          <Typography>{t.consults.intro.intro3}</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} textAlign={"center"}>
          <img src={consultImg} style={{ width: "20rem", borderRadius: "1rem" }} />
        </Grid>
      </Grid>

      {/* Moment de vie */}
      <Grid size={12} px={{ xs: 2, sm: '6rem' }} py={"2rem"}>
        <Typography fontWeight={700} className="typoTanPearl" variant="h5" py={"3rem"}>{t.consults.lifeMoments.title}</Typography>
        <Timeline timelineItems={timelineItems} />
        <Grid py={"1rem"}>
          <Typography variant="h6">Mais aussi : </Typography>
          <BulletedList listItems={[t.consults.lifeMoments.otherMoment1, t.consults.lifeMoments.otherMoment2]} bulletColor="dark" />
        </Grid>
      </Grid>

      {/* Thématiques */}
      <Grid size={12} px={{ xs: 2, sm: '6rem' }} py={"2rem"}>
        <Typography fontWeight={700} className="typoTanPearl" variant="h5">{t.consults.thematiques.title}</Typography>
        <Grid size={12} pt={"1.5rem"} container spacing={2} flexDirection={{ xs: 'column', sm: "row" }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <BulletedList listItems={thematiquesList1} bulletColor="dark" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <BulletedList listItems={thematiquesList2} bulletColor="dark" />
          </Grid>
        </Grid>
      </Grid>

      {/* Bannière photo avec citation */}
      <Grid
        px={{ xs: 2, sm: '6rem' }}
        size={12}
        textAlign={"center"}
        sx={{
          padding: "6rem 2rem",
          color: "secondary.main",
          backgroundColor: "primary.main",
          margin: "2rem 0rem"
        }}
      >
        <Typography fontWeight={700} className="typoTanPearl">{t.consults.citation}</Typography>
      </Grid>

      {/* Expectations */}
      <Grid size={12} px={{ xs: 2, sm: '6rem' }} py={"3rem"}>
        <Typography fontWeight={700} className="typoTanPearl" variant="h5">{t.consults.expectations.title}</Typography>
        <Typography pt={"1.5rem"}>{t.consults.expectations.intro}</Typography>
        <Grid size={12} pt={"1rem"} container spacing={2} flexDirection={{ xs: 'column', sm: "row" }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <BulletedList listItems={expectationsList1} bulletColor="dark" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <BulletedList listItems={expectationsList2} bulletColor="dark" />
          </Grid>
        </Grid>
      </Grid>

      {/* FAQ */}
      <Grid size={12} px={{ xs: 2, sm: '6rem' }} py={"2rem"}>
        <Typography pb={"2rem"} fontWeight={700} className="typoTanPearl" variant="h4">{t.consults.faq.FAQ}</Typography>
        <FAQ questionList={questionsFAQ} />
      </Grid>
    </Grid>
  )
}