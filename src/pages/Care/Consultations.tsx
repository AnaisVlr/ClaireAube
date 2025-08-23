import { Container, Grid, Typography } from "@mui/material"
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

export const Consultations = () => {
  const t = useTexts();
  const questionsFAQ: QuestionType[] = [
    {
      question: t.consults.faq.question1,
      answer: t.consults.faq.answer1
    },
    {
      question: t.consults.faq.question2,
      answer: t.consults.faq.answer2
    },
    {
      question: t.consults.faq.question3,
      answer: t.consults.faq.answer3
    },
    {
      question: t.consults.faq.question4,
      answer: t.consults.faq.answer4
    },
    {
      question: t.consults.faq.question5,
      answer: t.consults.faq.answer5
    }
  ]

  const thematiquesList: string[] = [
    t.consults.thematiques.thematique1,
    t.consults.thematiques.thematique2,
    t.consults.thematiques.thematique3,
    t.consults.thematiques.thematique4,
    t.consults.thematiques.thematique5,
    t.consults.thematiques.thematique6,
    t.consults.thematiques.thematique7,
    t.consults.thematiques.thematique8,
    t.consults.thematiques.thematique9,
    t.consults.thematiques.thematique10,
  ]

  const expectationsList: string[] = [
    t.consults.expectations.expectation1,
    t.consults.expectations.expectation2,
    t.consults.expectations.expectation3,
    t.consults.expectations.expectation4,
    t.consults.expectations.expectation5,
    t.consults.expectations.expectation6,
    t.consults.expectations.expectation7,
    t.consults.expectations.expectation8,
    t.consults.expectations.expectation9,
    t.consults.expectations.expectation10,
  ]

  const timelineItems = [
    { title: t.consults.lifeMoments.moment1, image: moment1 },
    { title: t.consults.lifeMoments.moment2, image: moment2 },
    { title: t.consults.lifeMoments.moment3, image: moment3 },
    { title: t.consults.lifeMoments.moment4, image: moment4 },
    { title: t.consults.lifeMoments.moment5, image: moment5 },
  ];

  return (
    <Container sx={{ mt: '4rem', px: '6rem', py: '2rem' }}>
      {/* Intro*/}
      <Grid size={12} container spacing={2} flexDirection={'row'}>
        <Grid size={8}>
          <Typography>{t.consults.intro.intro1}</Typography>
          <Typography>{t.consults.intro.intro2}</Typography>
          <Typography>{t.consults.intro.intro3}</Typography>
        </Grid>
        <Grid size={4}>
          <img src={consultImg} style={{width: "20rem"}}/>
        </Grid>
      </Grid>

      {/* Moment de vie */}
      <Grid size={12}>
        <Typography variant="h6">{t.consults.lifeMoments.title}</Typography>
        <Timeline timelineItems={timelineItems} />
        <Grid>
          <Typography>Mais aussi : </Typography>
          <BulletedList listItems={[t.consults.lifeMoments.otherMoment1, t.consults.lifeMoments.otherMoment2]} bulletColor="dark" />
        </Grid>
      </Grid>

      {/* Thématiques */}
      <Grid size={12}>
        <Typography variant="h6">{t.consults.thematiques.title}</Typography>
        <BulletedList listItems={thematiquesList} bulletColor="dark" />
      </Grid>

      {/* Bannière photo avec citation */}
      <Grid size={12} textAlign={"center"} sx={{padding: 4}}>
        <Typography fontWeight={700} className="typoTanPearl">{t.consults.citation}</Typography>
      </Grid>

      {/* Expectations */}
      <Grid size={12}>
        <Typography variant="h6">{t.consults.expectations.title}</Typography>
        <Typography>{t.consults.expectations.intro}</Typography>
        <BulletedList listItems={expectationsList} bulletColor="dark" />
      </Grid>

      {/* FAQ */}
      <Grid size={12}>
        <Typography variant="h6">{t.consults.faq.FAQ}</Typography>
        <FAQ questionList={questionsFAQ} />
      </Grid>
    </Container>
  )
}