import { BulletedList } from "../../components/BulletedList";
import { FAQ } from "../../components/FAQ";
import { QuestionType } from "../../types";

interface RitualsProps {
  ritualName : string,
  ritualDescrition : string,
  whatsIncludes : string[],
  physicalBenefits : string[],
  energeticEmotionalBenefits : string[],
  when : string,
  duration : string,
}

export const Rituals = (props: RitualsProps) => {
  const { ritualName, ritualDescrition, whatsIncludes, physicalBenefits, energeticEmotionalBenefits, when, duration } = props;

  const questionsFAQ : QuestionType[] = [
      {
        question: "Quand offrir ou s'offrir ce soin ?",
        answer: when
      },
      {
        question: "Durée du soin",
        answer: duration
      },
      {
        question: "Où a lieu le soin ?",
        answer: "jjj"
      },
      {
        question: "Tarif du soin ",
        answer: "jjj"
      },
      {
        question: "Ce qui est inclus",
        answer: "jjj"
      },
      {
        question: "A savoir",
        answer: "jjj"
      }
    ]
  
  return (
    <>
      <div>
        banière
      </div>

      <div>
        <div>
          Phto
        </div>

        <div>
          <h6>Le rituel {ritualName} </h6>
          <p> {ritualDescrition} </p>
        </div>

        <div>
          Ce rituel comprend : 
          <BulletedList listItems={whatsIncludes} bulletColor="dark"/>
        </div>

        <div>
          La magie du soin : 

          <div>
            Bienfaits physiques 
            <BulletedList listItems={physicalBenefits} bulletColor="dark"/>
          </div>
          <div>
            Bienfaits énergétiques et émotionnels 
            <BulletedList listItems={energeticEmotionalBenefits} bulletColor="dark"/>
          </div>
        </div>

        <div>
          <FAQ questionList={questionsFAQ}/>
        </div>

        <div>
          prendre rdv
        </div>
      </div>
    </>
  )
}