import { useForm } from '@formspree/react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact.css';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { useTexts } from '../../hooks/useTexts';

export default function Contact() {
  const [state, handleSubmit] = useForm("xdkgnggl");
  const t = useTexts();

  if (state.succeeded) {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        px={6}
        py={12}
        spacing={4}
      >

        <Typography>
          ✅ {t.contact.formSent}
        </Typography>

        <Typography>
          {t.contact.thankForContact}
        </Typography>

        <Button
          variant="contained"
          href="/"
        >
          {t.contact.backToHome}
        </Button>
      </Grid>
    );
  }


  return (
    <Grid container px={6} py={10} spacing={2}>
      <Typography variant="h4">{t.general.contactMe}</Typography>

      <Grid container spacing={4}>

        {/* Bloc gauche */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>{t.contact.needInformation}</Typography>

          {/* Bloc formulaire */}
          <Grid
            size={12}
            component="form"
            onSubmit={handleSubmit}
            container
            spacing={2}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="firstName"
                label="Prénom"
                variant="outlined"
                required
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="lastName"
                label="Nom"
                variant="outlined"
                required
              />
            </Grid>

            <Grid size={12}>
              <TextField
                fullWidth
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                required
              />
            </Grid>

            <Grid size={12}>
              <Typography>{t.contact.prestations}</Typography>
              <FormControlLabel
                control={<Checkbox name="services" value="Consultation" />}
                label="Consultation"
              />
              <FormControlLabel
                control={<Checkbox name="services" value="Rituel de soin" />}
                label="Rituel de soin"
              />
              <FormControlLabel
                control={<Checkbox name="services" value="Guidance" />}
                label="Guidance"
              />
              <FormControlLabel
                control={<Checkbox name="services" value="Autre" />}
                label="Autre"
              />
            </Grid>

            <Grid size={12}>
              <TextField
                name="message"
                label="Détaillez votre demande :"
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>

            <Grid size={12}>
              <Button variant="contained" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Envoi en cours…' : 'Envoyer'}
              </Button>
            </Grid>
          </Grid>

        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography fontWeight={600}>{t.contact.otherWayToContactMe}</Typography>

          <Grid display="flex" justifyContent="space-around" mb={2}>
            <Button sx={{ flexDirection: 'column', textTransform: 'none' }} component="a" href={`mailto:${t.general.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
              <Typography>{t.general.byEmail}</Typography>
            </Button>
            <Button sx={{ flexDirection: 'column', textTransform: 'none' }} component="a" href={`tel:${t.general.phone}`}>
              <FontAwesomeIcon icon={faPhone} />
              <Typography>{t.general.byPhone}</Typography>
            </Button>
          </Grid>

          <Typography fontWeight={600}>{t.contact.takeAppointmentOnline}</Typography>

          <Grid
            display="flex"
            justifyContent={'center'}
            spacing={2}
          >
            <Button
              variant="contained"
              component="a"
              href="https://calendly.com/claireaube-accompagnement"
              target="_blank"
            >
              <Typography>{t.contact.takeAppointment}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
