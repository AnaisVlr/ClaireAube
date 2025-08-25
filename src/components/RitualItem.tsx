import { Button, Grid, Typography } from "@mui/material";
import { RitualItemType } from "../types";
import { useTexts } from "../hooks/useTexts";

export const RitualItem = (props: RitualItemType) => {
  const { name, image, description, link, size } = props;
  const t = useTexts();

  return (
    <Grid size={{ sm: 12, sm: size }} container flexDirection={"column"} justifyContent={"space-between"} spacing={2}>
      <Grid size={12} height={'65vh'} textAlign={"center"}>
        <img src={image} alt={name} loading="lazy" height={'100%'} />
      </Grid>
      <Typography textAlign={"center"}>{description}</Typography>
      <Grid textAlign={"center"}>
        <Button variant={"contained"} href={link}>{t.general.learnMore}</Button>
      </Grid>
    </Grid>
  );
};
