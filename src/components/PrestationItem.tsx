import { Button, Typography } from "@mui/material";
import { PrestationType } from "../types";

interface PrestationItemProps {
  prestation: PrestationType
}

export const PrestationItem = (props: PrestationItemProps) => {
  const { prestation } = props;

  return (
    <div className={prestation.class} key={prestation.title}>
      <div className="prestations-item-inner">
        <div className="prestations-item-front">
          <div className="prestations-item-title">{prestation.title}</div>
        </div>
        <div className="prestations-item-back">
          <div className="prestations-item-title">{prestation.title}</div>
          <Typography variant="body2">{prestation.description}</Typography>
          <Button
            component="a"
            href={prestation.link}
            sx={{ color: "secondary.main" }}
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  )
}