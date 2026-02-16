import ritualPicture from '../../assets/img/soins-rituels/soins-rituels-1.webp'
import Poitrine from '../../assets/img/soins-rituels/Poitrine_Coeur.png'
import Matricia from '../../assets/img/soins-rituels/Matricia.png'
import Chrysalide from '../../assets/img/soins-rituels/Chrysalide.png'
import Matronae from '../../assets/img/soins-rituels/Matronae.png'
import Relevailles from '../../assets/img/soins-rituels/Relevailles.png'
import Yule from '../../assets/img/soins-rituels/Yule.png'
import Ostara from '../../assets/img/soins-rituels/Ostara.png'
import Litha from '../../assets/img/soins-rituels/Litha.png'
import Mabon from '../../assets/img/soins-rituels/Mabon.png'
import GardiensTerre from '../../assets/img/soins-rituels/Gardiens_Terre.png'
import Myrrophore from '../../assets/img/soins-rituels/Myrrophore.png'
import DernierEnvol from '../../assets/img/soins-rituels/Dernier_Envol.png'

import videoEspace from '../../assets/img/video_espace_soin.mp4'

import { Button, Grid, Typography } from '@mui/material'
import { useTexts } from '../../hooks/useTexts'
import { RitualItem } from '../../components/RitualItem'
import { BulletedList } from '../../components/BulletedList'
import { Localisation } from '../../components/Localisation'

export const CareRituals = () => {
  const t = useTexts();

  const reasonsItems = [
    t.rituals.reasons.reason1,
    t.rituals.reasons.reason2,
    t.rituals.reasons.reason3,
    t.rituals.reasons.reason4,
    t.rituals.reasons.reason5,
    t.rituals.reasons.reason6,
  ]

  const possibilitiesItems = [
    t.rituals.possibilities.p1,
    t.rituals.possibilities.p2,
    t.rituals.possibilities.p3,
    t.rituals.possibilities.p4,
    t.rituals.possibilities.p5,
    t.rituals.possibilities.p6,
    t.rituals.possibilities.p7,
    t.rituals.possibilities.p8,
    t.rituals.possibilities.p9,
    t.rituals.possibilities.p10,
    t.rituals.possibilities.p11,
    t.rituals.possibilities.p12,
  ]

  const cities = [
    { city: "Sisteron", byCar: "10 minutes en voiture" },
    { city: "Forcalquier", byCar: "45 minutes en voiture" },
    { city: "Aix en Provence", byCar: "1h15 en voiture" },
    { city: "Marseille", byCar: "1h30 en voiture" },
  ]

  return (
    <Grid container flexDirection={'column'} spacing={3} pt={{ xs: '4rem', sm: '6rem' }}>
      {/* Introduction */}
      <Grid
        size={12}
        container
        flexDirection={'column'}
        spacing={3}
        py={{ xs: 2, sm: "4rem" }}
        px={{ xs: 2, sm: "6rem" }}
      >

        <Grid size={12} container spacing={4} flexDirection={'row'}>
          <Grid size={{ xs: 12, sm: 6 }} container spacing={2} flexDirection={'column'}>
            <Typography variant="h5" fontWeight={700} fontStyle={'italic'} className='typoTanPearl'>{t.rituals.subTitle}</Typography>
            <Typography>{t.rituals.introduction.sentence1}</Typography>
            <Typography>{t.rituals.introduction.sentence2}</Typography>
            <Typography>{t.rituals.introduction.sentence3}</Typography>
            <Typography>{t.rituals.introduction.sentence4}</Typography>
            <Typography>{t.rituals.introduction.sentence5}</Typography>
            <Typography>{t.rituals.introduction.sentence6}</Typography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "primary.light",
              padding: 0.5
            }}
          >
            {/* <Grid
              sx={{
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "primary.light",
                padding: 2
              }}
            >
              <Typography className='typoTanPearl' fontWeight={700}>{t.rituals.reasons.title}</Typography>
              <BulletedList listItems={reasonsItems} bulletColor="white" />
            </Grid> */}
            <Grid
              sx={{
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "primary.light",
                padding: 2
              }}
            >
              <Typography className='typoTanPearl' fontWeight={700} pb={"1rem"}>{t.rituals.reasons.title}</Typography>
              <Grid container flexDirection={"column"} alignItems={"center"}>
                {reasonsItems.map((item: string) => (
                  <Grid container flexDirection={"column"} alignItems={"center"}>
                    <Typography>
                      {item}
                    </Typography>
                    <Typography className='typoTanPearl' fontWeight={700}>
                      ~
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent={'center'}>
          <Typography>{t.rituals.ritualsConception.sentence1}</Typography>
          <Typography>{t.rituals.ritualsConception.sentence2}</Typography>
          <Typography>{t.rituals.ritualsConception.sentence3}</Typography>
        </Grid>
      </Grid>


      {/* Essence des rituels */}
      <Grid
        size={12}
        container
        flexDirection={'column'}
        spacing={"3rem"}
        py={{ xs: 2, sm: "4rem" }}
        px={{ xs: 2, sm: "6rem" }}
      >
        <Typography fontWeight={700} className="typoTanPearl" variant="h5">{t.rituals.essence.title}</Typography>
        <Grid size={12} container spacing={2} textAlign={'center'} justifyContent={'center'}>
          <Typography>{t.rituals.essence.description1}</Typography>
          <Typography>{t.rituals.essence.description2}</Typography>
          <Typography>{t.rituals.essence.description3}</Typography>
          <Typography>{t.rituals.essence.description4}</Typography>
        </Grid>
      </Grid>

      {/* Possibilités */}
      <Grid
        size={12}
        container
        flexDirection={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 6 }}
        py={{ xs: 2, sm: "4rem" }}
        px={{ xs: 2, sm: "6rem" }}
        alignItems={'center'}
      >
        <Typography fontWeight={700} className="typoTanPearl" variant="h5">{t.rituals.possibilities.title}</Typography>
        <Grid size={{ xs: 12, sm: 7 }}>
          <BulletedList listItems={possibilitiesItems} bulletColor="dark" />
        </Grid>

        <Grid size={{ xs: 12, sm: 5 }}>
          <img src={ritualPicture} alt="" loading="lazy" width={'100%'} style={{ borderRadius: '1rem' }} />
        </Grid>
      </Grid>

      {/* Liste des rituels */}
      <Grid size={12} container flexDirection={'column'} spacing={"6rem"} py={{ xs: 2, sm: "4rem" }} px={{ xs: 2, sm: "6rem" }}>

        <Grid size={12} container flexDirection={'column'} spacing={2}>
          <Typography fontWeight={700} className="typoTanPearl" variant="h5" pb={"1rem"}>
            {t.rituals.ritualsListTitle}
          </Typography>

          <Grid size={12} container flexDirection={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
            {/* Rituel de la poitrine et du coeur */}
            <RitualItem name={t.rituals.chestHeart.name} image={Poitrine} description={t.rituals.chestHeart.description} link='/soin-rituels/poitrine-coeur' size={4} />

            {/* Rituel de la Matricia */}
            <RitualItem name={t.rituals.Matricia.name} image={Matricia} description={t.rituals.Matricia.description} link='/soin-rituels/matricia' size={4} />

            {/* Rituel Chrysalide */}
            <RitualItem name={t.rituals.Chrysalide.name} image={Chrysalide} description={t.rituals.Chrysalide.description} link='/soin-rituels/chrysalide' size={4} />
          </Grid>
        </Grid>

        {/* Les rituels pour les mamans */}
        <Grid size={12} container flexDirection={'column'} spacing={2}>
          <Typography fontWeight={700} className="typoTanPearl" variant="h5" pb={"1rem"}>{t.rituals.ritualsCategory.mom}</Typography>

          <Grid size={12} container flexDirection={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
            {/* Rituel des Matronae */}
            <RitualItem name={t.rituals.Matronae.name} image={Matronae} description={t.rituals.Matronae.description} link='/soin-rituels/matronae' size={6} />

            {/* Rituel du bain des Relevailles */}
            <RitualItem name={t.rituals.Relevailles.name} image={Relevailles} description={t.rituals.Relevailles.description} link='/soin-rituels/relevailles' size={6} />
          </Grid>
        </Grid>

        {/* Les rituels saisonniers */}
        <Grid size={12} container flexDirection={'column'} spacing={2}>
          <Typography fontWeight={700} className="typoTanPearl" variant="h5" pb={"1rem"}>{t.rituals.ritualsCategory.season.title}</Typography>
          <Typography>{t.rituals.ritualsCategory.season.description}</Typography>
          <Grid size={12} container flexDirection={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
            {/* Rituel Yule */}
            <RitualItem name={t.rituals.Yule.name} image={Yule} description={t.rituals.Yule.description} link='/soin-rituels/yule' size={3} />

            {/* Rituel Ostara  */}
            <RitualItem name={t.rituals.Ostara.name} image={Ostara} description={t.rituals.Ostara.description} link='/soin-rituels/ostara' size={3} />

            {/* Rituel Litha*/}
            <RitualItem name={t.rituals.Litha.name} image={Litha} description={t.rituals.Litha.description} link='/soin-rituels/litha' size={3} />

            {/* Rituel Mabon*/}
            <RitualItem name={t.rituals.Mabon.name} image={Mabon} description={t.rituals.Mabon.description} link='/soin-rituels/mabon' size={3} />
          </Grid>
        </Grid>

        {/* Les rituels personnalisés */}
        <Grid size={12} container flexDirection={'column'} spacing={2}>
          <Typography fontWeight={700} className="typoTanPearl" variant="h5" pb={"1rem"}>{t.rituals.ritualsCategory.personalized}</Typography>

          <Typography>Des soins signature, entièrement personnalisés, pensés pour vous et par vous</Typography>

          <Grid size={12} container flexDirection={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
            {/* Rituel des Gardiens de la Terre */}
            <RitualItem name={t.rituals.GardiensTerre.name} image={GardiensTerre} description={t.rituals.GardiensTerre.description} link='/soin-rituels/gardien-terre' size={4} />

            {/* Rituel Myrrhophores  */}
            <RitualItem name={t.rituals.Myrrhophores.name} image={Myrrophore} description={t.rituals.Myrrhophores.description} link='/soin-rituels/myrrophore' size={4} />

            {/* Rituel Dernier Envol */}
            <RitualItem name={t.rituals.DernierEnvol.name} image={DernierEnvol} description={t.rituals.DernierEnvol.description} link='/soin-rituels/dernier-envol' size={4} />
          </Grid>
        </Grid>

      </Grid>

      {/* Espace de soin */}
      <Grid size={12} container spacing={"4rem"} flexDirection={'column'} py={{ xs: 2, sm: '3rem' }} px={{ xs: 2, sm: '6rem' }}>
        {/* <Typography variant="h4" marginBottom={2}>{t.rituals.treatmentArea.treatmentArea}</Typography> */}

        <Grid size={12} container flexDirection={'row'} spacing={2}>

          <Grid size={{ xs: 12, sm: 3 }} textAlign={'center'} height={'80vh'}>
            <video loop autoPlay muted playsInline height={'100%'} style={{ borderRadius: '2rem' }}>
              <source src={videoEspace} type="video/mp4"></source>
            </video>
          </Grid>

          <Grid size={{ xs: 12, sm: 9 }} container flexDirection={{ xs: 'row', sm: 'column' }} py={2} spacing={4}>
            <Grid size={12}>
              <Typography variant="h3" className='typoTanPearl'>{t.rituals.treatmentArea.areaName}</Typography>
              <Typography fontStyle={'italic'}>{t.rituals.treatmentArea.etymology1}</Typography>
              <Typography>{t.rituals.treatmentArea.etymology2}</Typography>
            </Grid>

            <Grid size={12} container flexDirection={'column'} spacing={1}>
              <Typography>{t.rituals.treatmentArea.presentation1}</Typography>
              <Typography>{t.rituals.treatmentArea.presentation2}</Typography>
              <Typography>{t.rituals.treatmentArea.presentation3}</Typography>
              <Typography>{t.rituals.treatmentArea.presentation4}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Typography fontWeight={700} className="typoTanPearl" variant="h5" pb={"1rem"}>Comment venir ?</Typography>
          <Localisation cities={cities} />
        </Grid>
      </Grid>

      <Grid size={12} container spacing={2} flexDirection={'column'} py={2} px={{ xs: 2, sm: '6rem' }}>
        <Typography>{t.rituals.contact.sentence1}</Typography>
        <Typography>{t.rituals.contact.sentence2}</Typography>

        <Button variant={"contained"} href="/contact">{t.general.contactMe}</Button>
      </Grid>
    </Grid>
  )
}