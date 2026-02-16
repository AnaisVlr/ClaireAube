import { Typography, Avatar, useTheme, useMediaQuery, Grid, Box } from "@mui/material";
import { TimelineType } from "../types";

export const Timeline = (props: TimelineType) => {
  const { timelineItems } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={4}
      py={"2rem"}
      position="relative"
      justifyContent={isSmallScreen ? "center" : "space-between"}
      alignItems="center"
    >
      {/* Ligne horizontale uniquement sur grand écran */}
      {!isSmallScreen && (
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: 0,
            width: "100%",
            height: "4px",
            bgcolor: "primary.dark",
            zIndex: 1,
          }}
        />
      )}

      <Grid size={12} container spacing={2}>
        {timelineItems.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 2.4 }}
            textAlign={"center"}
            zIndex={2}
          >
            <Avatar
              src={item.image}
              alt={item.title}
              sx={{
                width: 100,
                height: 100,
                mx: "auto",
                mb: 2,
                padding: 1.5,
                borderColor: "secondary.main",
                backgroundColor: "primary.dark",
              }}
            />
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
