import { Container, Grid, Typography } from "@mui/material";
import { useTexts } from "../hooks/useTexts";

export const Disclaimer = () => {
  const t = useTexts();

  return (
    <Container sx={{ py: 2, pt: 12, pb: 6 }}>
      <Grid size={12} container spacing={2}>
        <Typography className="typoTanPearl" variant="h5">{t.disclaimer.title}</Typography>
        <Typography>{t.disclaimer.disclaimer1}</Typography>
        <Typography>{t.disclaimer.disclaimer2}</Typography>
        <Typography>{t.disclaimer.disclaimer3}</Typography>
        <Typography>{t.disclaimer.disclaimer4}</Typography>
        <Typography>{t.disclaimer.disclaimer5}</Typography>
        
        <Typography className="typoTanPearl" variant="h5">{t.disclaimer.title2}</Typography>
        <Typography>{t.disclaimer.share1}</Typography>
        <Typography>{t.disclaimer.share2}</Typography>
        <Typography>{t.disclaimer.share3}</Typography>
        <Typography>{t.disclaimer.share4}</Typography>
      </Grid>
    </Container>
  );
};
