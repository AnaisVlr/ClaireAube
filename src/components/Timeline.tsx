import { Box, Container, Typography, Avatar } from "@mui/material";
import { TimelineType } from "../types";

export const Timeline = (props: TimelineType) => {
  const { timelineItems } = props;

  return (
    <Container sx={{ py: 8 }}>
      <Box
        sx={{
          position: "relative",
          mt: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Ligne horizontale */}
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: 0,
            width: "100%",
            height: "4px",
            bgcolor: "primary.main",
            zIndex: 1,
          }}
        />

        {timelineItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              textAlign: "center",
              zIndex: 2,
              flex: 1,
            }}
          >
            <Avatar
              src={item.image}
              alt={item.title}
              sx={{
                width: 100,
                height: 100,
                border: "4px solid",
                borderColor: "secondary.main",
                mx: "auto",
                mb: 2,
                bgcolor: "background.paper",
              }}
            />
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
