import { Grid, Button, Typography } from "@mui/material";
import { PrestationType } from "../types";
import { useTexts } from "../hooks/useTexts";

interface PrestationItemProps {
  prestation: PrestationType;
}

export const PrestationItem = ({ prestation }: PrestationItemProps) => {
  const t = useTexts();
  
  return (
    <Grid
      sx={{
        perspective: "1000px",
        width: { xs: "80vw", sm: "40vw", md: "15vw" },
        height: { xs: "40vh", md: "60vh" },
        cursor: "pointer",
      }}
    >
      <Grid
        container
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          "&:hover": {
            transform: "rotateY(180deg)",
          },
        }}
      >
        {/* Face avant */}
        <Grid
          container
          width={"100%"}
          height={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"absolute"}
          sx={{
            backfaceVisibility: "hidden",
            borderRadius: 2,
            bgcolor: "#55271099",
            backgroundImage: `url(${prestation.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--typoTanPearl)",
              px: 2,
              borderRadius: 1,
              color: "var(--blanc)",
            }}
          >
            {prestation.title}
          </Typography>
        </Grid>

        {/* Face arrière */}
        <Grid
          container
          width={"100%"}
          height={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          position={"absolute"}
          sx={{
            backfaceVisibility: "hidden",
            borderRadius: 2,
            bgcolor: "rgba(85,39,16,0.5)",
            color: "var(--white)",
            transform: "rotateY(180deg)",
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "var(--typoTanPearl)" }}>
            {prestation.title}
          </Typography>
          <Typography variant="body2">{prestation.description}</Typography>
          <Button
            component="a"
            href={prestation.link}
            variant="contained"
          >
            {t.general.learnMore}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
