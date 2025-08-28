import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { Map } from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LocalisationType } from "../types";


export const Localisation = ({ cities }: LocalisationType) => {
  return (
    <Grid
      container
      spacing={2}
      flexDirection={{ xs: "column", sm: "row" }}
    >
      {/* Carte */}
      <Grid size={{ xs: 12, md: 8 }}>
        <Box
          height={"100%"}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <Map />
        </Box>
      </Grid>

      {/* Trajets */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Grid container spacing={2}>
          {cities.map((city, idx) => (
            <Grid size={{ xs: 12 }} key={idx}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 2,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                  backgroundColor: "primary.light",
                  color: "secondary.main"
                }}
              >
                <CardContent>
                  <Typography fontWeight="bold">
                    {city.city}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <FontAwesomeIcon icon={faCar} />
                    <Typography>{city.byCar}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
