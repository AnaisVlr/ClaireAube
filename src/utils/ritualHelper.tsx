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
        'toKnow': t.rituals.chestHeart.toKnow
      }
  }
}