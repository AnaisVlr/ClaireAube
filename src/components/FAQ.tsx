import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { QuestionType } from '../types';

interface FAQProps {
  questionList : QuestionType[]
}

export const FAQ = (props: FAQProps) => {

  const { questionList } = props;
  
  return (
    <>
      {questionList.map((question, idx) => (
          <Accordion key={idx} sx={{backgroundColor: "primary.contrastText"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id={`panel${idx}-header`}
            >
              <Typography component="span">
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {question.answer}
            </AccordionDetails>
          </Accordion>
      ))}
    </>
  );
}
