import flowerHand from '../../assets/img/flower_hand.webp'
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

import './careRituals.css'
import { Grid, Typography } from '@mui/material'
import { useTexts } from '../../hooks/useTexts'
import { Map } from '../../components/Map'
import { RitualItem } from '../../components/RitualItem'

export const CareRituals = () => {
  const t = useTexts();

  return (
    <div className="care-rituals flex-column">
      {/* Bannière */}
      <div className="banner">
        <div className="px-6 py-2 flex-column">
          <div className="banner-header-title flex-column">
            <h2>Soins Rituels</h2>
            <p>De la peau à l'âme</p>
          </div>

          <div className="banner-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a accusamus,
            corrupti inventore veritatis ut quasi quo minima provident, asperiores modi ex nihil.
            Fugiat laboriosam sed facilis modi id quas. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nobis placeat natus aspernatur odit maiores, sit quasi quae. Tenetur laboriosam, minima repellat enim
            voluptates molestias magni eius aliquam doloremque dignissimos tempore.
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="introduction px-6 py-2 flex-column align-center justify-center">
        <div className="flex-row">
          <p>
            Il est évident pour moi que le chemin de guérison passe par le corps... <br /><br />
            Le fait de prendre soin, de chérir, de magnifier sa beauté a toujours fait partie des routines des communautés de femmes. <br /><br />
            Ainsi, je vous propose de renouer avec ces traditions, cette sagesse du toucher. <br /><br />
            Plus que des soins, de vrais rituels transformateurs. <br /><br />
            Des espaces vibrants et magiques pour vous retrouver, vous cocooner, vous ramener à votre essence primordiale. <br /><br />
            Pour honorer votre incarnation humaine.
          </p>
          <div className='rituals-for'>
            <h4 className='fs-1-25 fw-500'>Des rituels pour ...</h4>
            <ul>
              <li>Prendre soin de soi</li>
              <li>Renouer avec sa beauté originelle</li>
              <li>Honorer les corps, leurs fissures et leurs éclats</li>
              <li>Soutenir les transformations et les ancrer dans la matière</li>
              <li>La femme qui porte et donne la vie</li>
              <li>S’ouvrir, se retrouver ; connecter le cœur, le corps et l’esprit</li>
            </ul>
          </div>
        </div>
        <div className="introduction-text">
          <p>
            Chaque soin a été conçu avec la plus grande attention, avec une profondeur de réflexion intime. <br /><br />
            Fruits de tous les enseignements et sagesses que j’ai récolté ces dernières années, et de mon propre cheminement personnel.<br /><br />
            Je me sens aujourd’hui particulièrement honorée de mettre mon toucher sacré au service de vos corps et vos âmes.
          </p>
        </div>
      </div>

      {/* Essence des rituels */}
      <div className="rituals-essence px-6 py-2">
        <h4 className='fs-1-25 ff-title'>L'essence des soins rituels</h4>
        <p>
          Tous mes soins font appel à la sagesse de la Terre et du vivant. <br />
          Ils allient la Médecine des plantes, des abeilles, du son, de l’eau, des minéraux... et l’art du toucher sacré.<br />
          Ils sont empreints de nombreux enseignements issus des médecines ancestrales, telle que la médecine chinoise, la médecine ayurvédique,
          la médecine taoïste, la médecine amérindienne... <br /> Et, n’oublions pas, la richesse de notre médecine traditionnelle européenne !
        </p>
      </div>

      {/* Possibilités */}
      <div className="rituals-possibilities px-6 py-2 flex-row">
        <div>
          <h4 className='fs-1'>Selon le soin, vous pourrez vous voir proposer :</h4>
          <ul>
            <li>De la visualisation</li>
            <li>Du massage</li>
            <li>Des étirements doux</li>
            <li>Des soins physico-énergétiques avec les onctions sacrées</li>
            <li>Des serrages, bercements, bordages et enveloppement aux tissus</li>
            <li>Des pratiques de bain et yonisteam</li>
            <li>Des remèdes de grand-mère tels que les cataplasmes et bouillottes</li>
            <li>Des pochons chauds</li>
            <li>Des massages au kansa wand</li>
            <li>Des tirages d’oracle</li>
            <li>Des rituels psycho-magiques</li>
            <li>Etc...</li>
          </ul>
        </div>
        <img src={ritualPicture} alt="" loading="lazy" />
      </div>

      {/* Liste des rituels */}
      <Grid size={12} container flexDirection={'column'} spacing={6} py={"4rem"} px={"6rem"}>
        <Typography variant="h3">{t.rituals.ritualsListTitle}</Typography>

        <Grid size={12} container flexDirection={'row'} spacing={4}>
          {/* Rituel de la poitrine et du coeur */}
          <RitualItem name={t.rituals.chestHeart.name} image={Poitrine} description={t.rituals.chestHeart.description} link='/' size={4} />

          {/* Rituel de la Matricia */}
          <RitualItem name={t.rituals.Matricia.name} image={Matricia} description={t.rituals.Matricia.description} link='/' size={4} />

          {/* Rituel Chrysalide */}
          <RitualItem name={t.rituals.Chrysalide.name} image={Chrysalide} description={t.rituals.Chrysalide.description} link='/' size={4} />
        </Grid>

        <Grid size={12} container flexDirection={'column'} spacing={2}>
          <Typography variant="h3">{t.rituals.ritualsCategory.mom}</Typography>

          <Grid size={12} container flexDirection={'row'} spacing={4}>
            {/* Rituel des Matronae */}
            <RitualItem name={t.rituals.Matronae.name} image={Matronae} description={t.rituals.Matronae.description} link='/' size={6} />

            {/* Rituel du bain des Relevailles */}
            <RitualItem name={t.rituals.Relevailles.name} image={Relevailles} description={t.rituals.Relevailles.description} link='/' size={6} />
          </Grid>
        </Grid>

        <Grid size={12} container flexDirection={'column'} spacing={2}>
          <Typography variant="h3">{t.rituals.ritualsCategory.season}</Typography>
          <Grid size={12} container flexDirection={'row'} spacing={4}>
            {/* Rituel Yule */}
            <RitualItem name={t.rituals.Yule.name} image={Yule} description={t.rituals.Yule.description} link='/' size={3} />

            {/* Rituel Ostara  */}
            <RitualItem name={t.rituals.Ostara.name} image={Ostara} description={t.rituals.Ostara.description} link='/' size={3} />

            {/* Rituel Litha*/}
            <RitualItem name={t.rituals.Litha.name} image={Litha} description={t.rituals.Litha.description} link='/' size={3} />

            {/* Rituel Mabon*/}
            <RitualItem name={t.rituals.Mabon.name} image={Mabon} description={t.rituals.Mabon.description} link='/' size={3} />
          </Grid>
        </Grid>

        <Grid size={12} container flexDirection={'column'} spacing={2}>
          <Typography variant="h3">{t.rituals.ritualsCategory.personalized}</Typography>

          <Typography>Des soins signature, entièrement personnalisés, pensés pour vous et par vous</Typography>

          <Grid size={12} container flexDirection={'row'} spacing={4}>
            {/* Rituel des Gardiens de la Terre */}
            <RitualItem name={t.rituals.GardiensTerre.name} image={GardiensTerre} description={t.rituals.GardiensTerre.description} link='/' size={4} />

            {/* Rituel Myrrhophores  */}
            <RitualItem name={t.rituals.Myrrhophores.name} image={Myrrophore} description={t.rituals.Myrrhophores.description} link='/' size={4} />

            {/* Rituel Dernier Envol */}
            <RitualItem name={t.rituals.DernierEnvol.name} image={DernierEnvol} description={t.rituals.DernierEnvol.description} link='/' size={4} />
          </Grid>
        </Grid>

      </Grid>

      {/* Espace de soin */}
      <Grid size={12} container spacing={2} flexDirection={'column'} py={'3rem'} px={'6rem'} className={'treatment-area'}>
        {/* <Typography variant="h4" marginBottom={2}>{t.rituals.treatmentArea.treatmentArea}</Typography> */}

        <Grid size={12} container flexDirection={'row'} spacing={2}>

          <Grid size={3}>
            <video loop autoPlay muted playsInline>
              <source src={videoEspace} type="video/mp4"></source>
            </video>
          </Grid>

          <Grid size={9} container flexDirection={'column'} py={2} spacing={4}>
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
      </Grid>

      <Grid size={12} container flexDirection={'row'} spacing={2} py={'3rem'} px={'6rem'} >
        <Grid size={3} container flexDirection={'column'} spacing={1}>
          <Typography>{t.general.localisation.sisteron}</Typography>
          <Typography>{t.general.localisation.Forcalquier}</Typography>
          <Typography>{t.general.localisation.Aix}</Typography>
          <Typography>{t.general.localisation.Marseille}</Typography>
        </Grid>
        <Grid size={9}>
          <Map />
        </Grid>
      </Grid>

      <div className="flex-row align-center justify-center gap-1 px-6 py-2">
        <img src={flowerHand} alt="Logo Claire Aube" loading="lazy" className='rituals-contact-img' />
        <div className="flex-column align-center justify-center gap-2">
          <p>
            Vous vous sentez appelée à vivre un rituel avec moi ? <br />
            Vous ne savez pas exactement lequel choisir ?
          </p>
          <button className='btn-sm btn-primary'>
            Contactez-moi
          </button>
        </div>
        <img src={flowerHand} alt="Logo Claire Aube" loading="lazy" className='rituals-contact-img' />
      </div>
    </div>
  )
}