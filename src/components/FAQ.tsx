import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQType } from '../types';

export const FAQ = ({ questionList }: FAQType) => {
  return (
    <>
      {questionList.map((question, idx) => (
        <Accordion key={idx} sx={{ backgroundColor: "primary.contrastText" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
          >
            <Typography fontWeight={600} component="span">{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {typeof question.answer === "string" ? (
              <Typography>{question.answer}</Typography>
            ) : (
              question.answer
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
