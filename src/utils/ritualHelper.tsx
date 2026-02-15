import { Grid, Typography } from "@mui/material"
import { RitualInformations } from "../types"
import poitrineCoeurPicture from "../assets/img/soins-rituels/poitrine-coeur.webp"

export const getRitualInformations = (ritualName: string, t: any): RitualInformations => {
  switch (ritualName) {

    case 'poitrine-coeur':
      return {
        'ritualName': t.rituals.chestHeart.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.chestHeart.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.chestHeart.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.chestHeart.descriptionDetail.p3}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.chestHeart.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.chestHeart.physicalBenefits.p1,
          t.rituals.chestHeart.physicalBenefits.p2,
          t.rituals.chestHeart.physicalBenefits.p3,
          t.rituals.chestHeart.physicalBenefits.p4,
          t.rituals.chestHeart.physicalBenefits.p5,
          t.rituals.chestHeart.physicalBenefits.p6,
          t.rituals.chestHeart.physicalBenefits.p7,
          t.rituals.chestHeart.physicalBenefits.p8
        ],
        'energeticEmotionalBenefits': [
          t.rituals.chestHeart.energeticEmotionalBenefits.p1,
          t.rituals.chestHeart.energeticEmotionalBenefits.p2,
          t.rituals.chestHeart.energeticEmotionalBenefits.p3,
          t.rituals.chestHeart.energeticEmotionalBenefits.p4
        ],
        'when': [
          t.rituals.chestHeart.when.r1,
          t.rituals.chestHeart.when.r2,
          t.rituals.chestHeart.when.r3,
          t.rituals.chestHeart.when.r4,
          t.rituals.chestHeart.when.r5,
          t.rituals.chestHeart.when.r6,
          t.rituals.chestHeart.when.r7,
          t.rituals.chestHeart.when.r8,
          t.rituals.chestHeart.when.r9,
          t.rituals.chestHeart.when.r10,
        ],
        'duration': t.rituals.chestHeart.duration,
        'pricing': t.rituals.chestHeart.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.chestHeart.toKnow,
        'isContraindication': false,
        'contraindication': "",
        'isImportant': false,
        'important': ""
      }

    case 'matricia':
      return {
        'ritualName': t.rituals.Matricia.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Matricia.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Matricia.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Matricia.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.Matricia.descriptionDetail.p4}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Matricia.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Matricia.physicalBenefits.p1,
          t.rituals.Matricia.physicalBenefits.p2,
          t.rituals.Matricia.physicalBenefits.p3,
          t.rituals.Matricia.physicalBenefits.p4,
          t.rituals.Matricia.physicalBenefits.p5,
          t.rituals.Matricia.physicalBenefits.p6,
          t.rituals.Matricia.physicalBenefits.p7,
          t.rituals.Matricia.physicalBenefits.p8,
          t.rituals.Matricia.physicalBenefits.p9
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Matricia.energeticEmotionalBenefits.p1,
          t.rituals.Matricia.energeticEmotionalBenefits.p2,
          t.rituals.Matricia.energeticEmotionalBenefits.p3,
          t.rituals.Matricia.energeticEmotionalBenefits.p4,
          t.rituals.Matricia.energeticEmotionalBenefits.p5,
          t.rituals.Matricia.energeticEmotionalBenefits.p6
        ],
        'when': [
          t.rituals.Matricia.when.r1,
          t.rituals.Matricia.when.r2,
          t.rituals.Matricia.when.r3,
          t.rituals.Matricia.when.r4,
          t.rituals.Matricia.when.r5,
          t.rituals.Matricia.when.r6,
          t.rituals.Matricia.when.r7,
          t.rituals.Matricia.when.r8,
          t.rituals.Matricia.when.r9,
          t.rituals.Matricia.when.r10,
          t.rituals.Matricia.when.r11,
          t.rituals.Matricia.when.r12,
          t.rituals.Matricia.when.r13,
          t.rituals.Matricia.when.r14
        ],
        'duration': t.rituals.Matricia.duration,
        'pricing': t.rituals.Matricia.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Matricia.toKnow,
        'isContraindication': true,
        'contraindication': t.rituals.Matricia.contraindication,
        'isImportant': false,
        'important': ""
      }

    case 'chrysalide':
      return {
        'ritualName': t.rituals.Chrysalide.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Chrysalide.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Chrysalide.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Chrysalide.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.Chrysalide.descriptionDetail.p4}</Typography>
              <Typography>{t.rituals.Chrysalide.descriptionDetail.p5}</Typography>
              <Typography>{t.rituals.Chrysalide.descriptionDetail.p6}</Typography>
              <Typography>{t.rituals.Chrysalide.descriptionDetail.p7}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Chrysalide.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Chrysalide.physicalBenefits.p1
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Chrysalide.energeticEmotionalBenefits.p1,
          t.rituals.Chrysalide.energeticEmotionalBenefits.p2,
          t.rituals.Chrysalide.energeticEmotionalBenefits.p3,
          t.rituals.Chrysalide.energeticEmotionalBenefits.p4,
          t.rituals.Chrysalide.energeticEmotionalBenefits.p5,
          t.rituals.Chrysalide.energeticEmotionalBenefits.p6
        ],
        'when': [
          t.rituals.Chrysalide.when.r1,
          t.rituals.Chrysalide.when.r2,
          t.rituals.Chrysalide.when.r3,
          t.rituals.Chrysalide.when.r4,
          t.rituals.Chrysalide.when.r5,
          t.rituals.Chrysalide.when.r6,
          t.rituals.Chrysalide.when.r7
        ],
        'duration': t.rituals.Chrysalide.duration,
        'pricing': t.rituals.Chrysalide.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Chrysalide.toKnow,
        'isContraindication': false,
        'contraindication': "",
        'isImportant': false,
        'important': ""
      }

    case 'matronae':
      return {
        'ritualName': t.rituals.Matronae.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Matronae.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Matronae.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Matronae.descriptionDetail.p3}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Matronae.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Matronae.physicalBenefits.p1,
          t.rituals.Matronae.physicalBenefits.p2,
          t.rituals.Matronae.physicalBenefits.p3,
          t.rituals.Matronae.physicalBenefits.p4,
          t.rituals.Matronae.physicalBenefits.p5,
          t.rituals.Matronae.physicalBenefits.p6,
          t.rituals.Matronae.physicalBenefits.p7,
          t.rituals.Matronae.physicalBenefits.p8,
          t.rituals.Matronae.physicalBenefits.p9,
          t.rituals.Matronae.physicalBenefits.p10,
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Matronae.energeticEmotionalBenefits.p1,
          t.rituals.Matronae.energeticEmotionalBenefits.p2,
          t.rituals.Matronae.energeticEmotionalBenefits.p3,
        ],
        'when': [
          t.rituals.Matronae.when.r1,
        ],
        'duration': t.rituals.Matronae.duration,
        'pricing': t.rituals.Matronae.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Matronae.toKnow,
        'isContraindication': true,
        'contraindication': t.rituals.Matronae.contraindication,
        'isImportant': false,
        'important': ""
      }

    case 'relevailles':
      return {
        'ritualName': t.rituals.Relevailles.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Relevailles.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Relevailles.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Relevailles.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.Relevailles.descriptionDetail.p4}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Relevailles.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Relevailles.physicalBenefits.p1,
          t.rituals.Relevailles.physicalBenefits.p2,
          t.rituals.Relevailles.physicalBenefits.p3,
          t.rituals.Relevailles.physicalBenefits.p4,
          t.rituals.Relevailles.physicalBenefits.p5,
          t.rituals.Relevailles.physicalBenefits.p6,
          t.rituals.Relevailles.physicalBenefits.p7,
          t.rituals.Relevailles.physicalBenefits.p8,
          t.rituals.Relevailles.physicalBenefits.p9
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Relevailles.energeticEmotionalBenefits.p1,
          t.rituals.Relevailles.energeticEmotionalBenefits.p2,
          t.rituals.Relevailles.energeticEmotionalBenefits.p3,
        ],
        'when': [
          t.rituals.Relevailles.when.r1,
        ],
        'duration': t.rituals.Relevailles.duration,
        'pricing': t.rituals.Relevailles.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Relevailles.toKnow,
        'isContraindication': false,
        'contraindication': "",
        'isImportant': false,
        'important': ""
      }

    case 'yule':
      return {
        'ritualName': t.rituals.Yule.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Yule.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Yule.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Yule.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.Yule.descriptionDetail.p4}</Typography>
              <Typography>{t.rituals.Yule.descriptionDetail.p5}</Typography>
              <Typography>{t.rituals.Yule.descriptionDetail.p6}</Typography>
              <Typography>{t.rituals.Yule.descriptionDetail.p7}</Typography>
              <Typography>{t.rituals.Yule.descriptionDetail.p8}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Yule.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Yule.physicalBenefits.p1,
          t.rituals.Yule.physicalBenefits.p2,
          t.rituals.Yule.physicalBenefits.p3,
          t.rituals.Yule.physicalBenefits.p4,
          t.rituals.Yule.physicalBenefits.p5,
          t.rituals.Yule.physicalBenefits.p6,
          t.rituals.Yule.physicalBenefits.p7
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Yule.energeticEmotionalBenefits.p1,
          t.rituals.Yule.energeticEmotionalBenefits.p2,
          t.rituals.Yule.energeticEmotionalBenefits.p3,
          t.rituals.Yule.energeticEmotionalBenefits.p4,
          t.rituals.Yule.energeticEmotionalBenefits.p5,
          t.rituals.Yule.energeticEmotionalBenefits.p6,
          t.rituals.Yule.energeticEmotionalBenefits.p7,
          t.rituals.Yule.energeticEmotionalBenefits.p8,
          t.rituals.Yule.energeticEmotionalBenefits.p9
        ],
        'when': [
          t.rituals.Yule.when.r1,
          t.rituals.Yule.when.r2,
          t.rituals.Yule.when.r3,
          t.rituals.Yule.when.r4,
          t.rituals.Yule.when.r5,
          t.rituals.Yule.when.r6,
        ],
        'duration': t.rituals.Yule.duration,
        'pricing': t.rituals.Yule.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Yule.toKnow,
        'isContraindication': false,
        'contraindication': "",
        'isImportant': false,
        'important': ""
      }

    case 'ostara':
      return {
        'ritualName': t.rituals.Ostara.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Ostara.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p4}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p5}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p6}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p7}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p8}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p9}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p10}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p11}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p12}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p13}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p14}</Typography>
              <Typography>{t.rituals.Ostara.descriptionDetail.p15}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Ostara.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Ostara.physicalBenefits.p1,
          t.rituals.Ostara.physicalBenefits.p2,
          t.rituals.Ostara.physicalBenefits.p3,
          t.rituals.Ostara.physicalBenefits.p4,
          t.rituals.Ostara.physicalBenefits.p5,
          t.rituals.Ostara.physicalBenefits.p6,
          t.rituals.Ostara.physicalBenefits.p7,
          t.rituals.Ostara.physicalBenefits.p8
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Ostara.energeticEmotionalBenefits.p1,
          t.rituals.Ostara.energeticEmotionalBenefits.p2,
          t.rituals.Ostara.energeticEmotionalBenefits.p3,
          t.rituals.Ostara.energeticEmotionalBenefits.p4,
          t.rituals.Ostara.energeticEmotionalBenefits.p5
        ],
        'when': [
          t.rituals.Ostara.when.r1,
          t.rituals.Ostara.when.r2,
          t.rituals.Ostara.when.r3,
          t.rituals.Ostara.when.r4,
          t.rituals.Ostara.when.r5,
          t.rituals.Ostara.when.r6,
          t.rituals.Ostara.when.r7,
          t.rituals.Ostara.when.r8
        ],
        'duration': t.rituals.Ostara.duration,
        'pricing': t.rituals.Ostara.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Ostara.toKnow,
        'isContraindication': false,
        'contraindication': "",
        'isImportant': false,
        'important': ""
      }
      
    case 'litha':
      return {
        'ritualName': t.rituals.Litha.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Litha.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p4}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p5}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p6}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p7}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p8}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p9}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p10}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p11}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p12}</Typography>
              <Typography>{t.rituals.Litha.descriptionDetail.p13}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Litha.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Litha.physicalBenefits.p1,
          t.rituals.Litha.physicalBenefits.p2,
          t.rituals.Litha.physicalBenefits.p3,
          t.rituals.Litha.physicalBenefits.p4,
          t.rituals.Litha.physicalBenefits.p5,
          t.rituals.Litha.physicalBenefits.p6,
          t.rituals.Litha.physicalBenefits.p7
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Litha.energeticEmotionalBenefits.p1,
          t.rituals.Litha.energeticEmotionalBenefits.p2,
          t.rituals.Litha.energeticEmotionalBenefits.p3,
          t.rituals.Litha.energeticEmotionalBenefits.p4,
          t.rituals.Litha.energeticEmotionalBenefits.p5,
          t.rituals.Litha.energeticEmotionalBenefits.p6,
          t.rituals.Litha.energeticEmotionalBenefits.p7,
          t.rituals.Litha.energeticEmotionalBenefits.p8
        ],
        'when': [
          t.rituals.Litha.when.r1,
          t.rituals.Litha.when.r2,
          t.rituals.Litha.when.r3,
          t.rituals.Litha.when.r4,
          t.rituals.Litha.when.r5,
          t.rituals.Litha.when.r6,
          t.rituals.Litha.when.r7,
          t.rituals.Litha.when.r8,
          t.rituals.Litha.when.r9
        ],
        'duration': t.rituals.Litha.duration,
        'pricing': t.rituals.Litha.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Litha.toKnow,
        'isContraindication': false,
        'contraindication': "",
        'isImportant': false,
        'important': ""
      }

    case 'mabon':
      return {
        'ritualName': t.rituals.Mabon.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Mabon.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p4}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p5}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p6}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p7}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p8}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p9}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p10}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p11}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p12}</Typography>
              <Typography>{t.rituals.Mabon.descriptionDetail.p13}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Mabon.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Mabon.physicalBenefits.p1,
          t.rituals.Mabon.physicalBenefits.p2,
          t.rituals.Mabon.physicalBenefits.p3,
          t.rituals.Mabon.physicalBenefits.p4,
          t.rituals.Mabon.physicalBenefits.p5,
          t.rituals.Mabon.physicalBenefits.p6,
          t.rituals.Mabon.physicalBenefits.p7
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Mabon.energeticEmotionalBenefits.p1,
          t.rituals.Mabon.energeticEmotionalBenefits.p2,
          t.rituals.Mabon.energeticEmotionalBenefits.p3,
          t.rituals.Mabon.energeticEmotionalBenefits.p4,
          t.rituals.Mabon.energeticEmotionalBenefits.p5,
          t.rituals.Mabon.energeticEmotionalBenefits.p6,
          t.rituals.Mabon.energeticEmotionalBenefits.p7,
          t.rituals.Mabon.energeticEmotionalBenefits.p8
        ],
        'when': [
          t.rituals.Mabon.when.r1,
          t.rituals.Mabon.when.r2,
          t.rituals.Mabon.when.r3,
          t.rituals.Mabon.when.r4,
          t.rituals.Mabon.when.r5,
          t.rituals.Mabon.when.r6,
          t.rituals.Mabon.when.r7,
          t.rituals.Mabon.when.r8,
          t.rituals.Mabon.when.r9
        ],
        'duration': t.rituals.Mabon.duration,
        'pricing': t.rituals.Mabon.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Mabon.toKnow,
        'isContraindication': false,
        'contraindication': "",
        'isImportant': false,
        'important': ""
      }

    case 'gardien-terre':
      return {
        'ritualName': t.rituals.GardiensTerre.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.GardiensTerre.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.GardiensTerre.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.GardiensTerre.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.GardiensTerre.descriptionDetail.p4}</Typography>
              <Typography>{t.rituals.GardiensTerre.descriptionDetail.p5}</Typography>
              <Typography>{t.rituals.GardiensTerre.descriptionDetail.p6}</Typography>
              <Typography>{t.rituals.GardiensTerre.descriptionDetail.p7}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.GardiensTerre.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.GardiensTerre.physicalBenefits.p1
        ],
        'energeticEmotionalBenefits': [
          t.rituals.GardiensTerre.energeticEmotionalBenefits.p1
        ],
        'when': [
          t.rituals.GardiensTerre.when.r1,
          t.rituals.GardiensTerre.when.r2,
          t.rituals.GardiensTerre.when.r3,
          t.rituals.GardiensTerre.when.r4
        ],
        'duration': t.rituals.GardiensTerre.duration,
        'pricing': t.rituals.GardiensTerre.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.GardiensTerre.toKnow,
        'isContraindication': false,
        'contraindication': "",
        'isImportant': true,
        'important': t.rituals.GardiensTerre.important
      }

    case 'myrrhophores':
      return {
        'ritualName': t.rituals.Myrrhophores.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.Myrrhophores.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.Myrrhophores.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.Myrrhophores.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.Myrrhophores.descriptionDetail.p4}</Typography>
              <Typography>{t.rituals.Myrrhophores.descriptionDetail.p5}</Typography>
              <Typography>{t.rituals.Myrrhophores.descriptionDetail.p6}</Typography>
              <Typography>{t.rituals.Myrrhophores.descriptionDetail.p7}</Typography>
              <Typography>{t.rituals.Myrrhophores.descriptionDetail.p8}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.Myrrhophores.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.Myrrhophores.physicalBenefits.p1
        ],
        'energeticEmotionalBenefits': [
          t.rituals.Myrrhophores.energeticEmotionalBenefits.p1
        ],
        'when': [
          t.rituals.Myrrhophores.when.r1,
          t.rituals.Myrrhophores.when.r2,
          t.rituals.Myrrhophores.when.r3,
          t.rituals.Myrrhophores.when.r4
        ],
        'duration': t.rituals.Myrrhophores.duration,
        'pricing': t.rituals.Myrrhophores.pricing,
        'isToKnow': true,
        'toKnow': t.rituals.Myrrhophores.toKnow,
        'isContraindication': true,
        'contraindication': t.rituals.Myrrhophores.contraindication,
        'isImportant': true,
        'important': t.rituals.Myrrhophores.important
      }

    case 'dernier-envol':
      return {
        'ritualName': t.rituals.DernierEnvol.name,
        'ritualPicture': poitrineCoeurPicture,
        'ritualDescrition':
          <>
            <Grid size={12} container spacing={2}>
              <Typography>{t.rituals.DernierEnvol.descriptionDetail.p1}</Typography>
              <Typography>{t.rituals.DernierEnvol.descriptionDetail.p2}</Typography>
              <Typography>{t.rituals.DernierEnvol.descriptionDetail.p3}</Typography>
              <Typography>{t.rituals.DernierEnvol.descriptionDetail.p4}</Typography>
              <Typography>{t.rituals.DernierEnvol.descriptionDetail.p5}</Typography>
            </Grid>
          </>,
        'whatsIncludes': t.rituals.DernierEnvol.whatsIncludes.list,
        'physicalBenefits': [
          t.rituals.DernierEnvol.physicalBenefits.p1
        ],
        'energeticEmotionalBenefits': [
          t.rituals.DernierEnvol.energeticEmotionalBenefits.p1
        ],
        'when': [
          t.rituals.DernierEnvol.when.r1,
          t.rituals.DernierEnvol.when.r2,
          t.rituals.DernierEnvol.when.r3,
          t.rituals.DernierEnvol.when.r4
        ],
        'duration': t.rituals.DernierEnvol.duration,
        'pricing': t.rituals.DernierEnvol.pricing,
        'isToKnow': false,
        'toKnow': "",
        'isContraindication': false,
        'contraindication': "",
        'isImportant': true,
        'important': t.rituals.DernierEnvol.important
      }
    }
}