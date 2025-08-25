import { Button, Grid, Typography } from "@mui/material";
import { RitualItemType } from "../types";
import { useTexts } from "../hooks/useTexts";

export const RitualItem = (props: RitualItemType) => {
  const { name, image, description, link, size } = props;
  const t = useTexts();

  return (
    <Grid size={size} container flexDirection={"column"} spacing={2}>
      <img src={image} alt={name} loading="lazy" width={'100%'}/>
      <Typography textAlign={"center"}>{description}</Typography>
      <Button variant={"contained"} color='secondary' href={link}>{t.general.learnMore}</Button>
    </Grid>
  );
};
