import { useForm, ValidationError } from '@formspree/react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact.css'
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { useTexts } from '../../hooks/useTexts';

export default function Contact() {
  const [state, handleSubmit] = useForm("xdkgnggl");
  const t = useTexts();
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Container className='pt-1 px-6 pb-1'>
      <Typography variant="h4">Me contacter</Typography>

      <Grid container spacing={2} size={12}>
        <Grid size={6} >
          <Typography>Besoin d'information ?<br />
            Faisons connaissance via ce formulaire de contact
          </Typography>

          <Grid display={"flex"} justifyContent={"center"}>
            <Typography>OU</Typography>
          </Grid>
          <Grid display={"flex"} justifyContent={"space-around"}>
            <Button sx={{ flexDirection: 'column' }} component="a" href={"mailto:" + t.general.email}>
              <FontAwesomeIcon icon={faEnvelope} />
              <Typography>{t.general.byEmail}</Typography>
            </Button>
            <Button sx={{ flexDirection: 'column' }} component="a" href={"tel:" + t.general.phone}>
              <FontAwesomeIcon icon={faPhone} />
              <Typography>{t.general.byPhone}</Typography>
            </Button>
          </Grid>

          <Grid display={"flex"} justifyContent={"center"} container spacing={2} sx={{ p: 2, m: 0.5, borderRadius: 1, backgroundColor: 'secondary.main' }}>
            <Typography>Vous pouvez aussi prendre RDV directement en ligne !</Typography>
            <Button>
              <a href='https://calendly.com/claireaube-accompagnement' target='_blank' className='btn-sm btn-primary br-4 fit-content'>
                Prendre RDV
              </a>
            </Button>
          </Grid>
        </Grid>

        <Grid component="form" onSubmit={handleSubmit} container spacing={2} size={6}>
          <TextField id="firstName" label="Prénom" variant="outlined" />
          <TextField id="lastName" label="Nom" variant="outlined" />
          <TextField fullWidth id="email" label="Email" variant="outlined" />
          <Typography>Prestation(s) d'intéret : </Typography>
          <Grid>
            <FormControlLabel control={<Checkbox value={"Consultation"} />} label="Consultation" />
            <FormControlLabel control={<Checkbox value={"Rituel de soin"} />} label="Rituel de soin" />
            <FormControlLabel control={<Checkbox value={"Guidance"} />} label="Guidance" />
            <FormControlLabel control={<Checkbox value={"Autre"} />} label="Autre" />
          </Grid>
          <TextField
            id="message"
            label="Détaillez votre demande :"
            multiline
            rows={4}
            defaultValue=""
            fullWidth
          />
          <Button variant="contained" type="submit">Envoyer</Button>
        </Grid>
      </Grid>
    </Container >
  );
}