import FlowerImg from '../../assets/img/flower.webp';
import './homepage.css';

export default function HomePage() {
  const prestationItems = [
    { label: "Consultations", 
      href: "/consultations", 
      class: "prestations-item consultations-picture",
      description: "Un accompagnement qui peut autant porter sur des problématiques physiques, qu'émotionnelles et psychiques."
    },
    { label: "Guidances", 
      href: "/guidances", 
      class: "prestations-item guidances-picture",
      description: "Deux voies d'exploration, deux outils d'introspection différents, pour éclairer vos chemins et mettre du mouvement dans vos pèlerinages personnels."
    },
    { label: "Soins rituels", 
      href: "/soin-rituels", 
      class: "prestations-item soins-picture",
      description: "Plus que des soins, de vrais rituels transformateurs. Des espaces vibrants et magiques pour honorer vos corps et soutenir les transformations."
    },
    { label: "Autres services", 
      href: "/autre-services", 
      class: "prestations-item services-picture",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ];

  return (
    <>
      <div className='flex-column'>
        <div className="imageHomePage">
          <img src={FlowerImg} alt="Picture background home page" loading="lazy" />
        </div>
        <div className="presentation-container flex-row align-center justify-between">
          <div className="pictureProfile">
            <img src={FlowerImg} alt="Photo de Claire" loading="lazy" />
          </div>
          <div className="flex-column gap-1">
            <div className="presentation-title">Bienvenue</div>
            <div>
            Je vous accompagne avec douceur, empathie, bienveillance… mais aussi avec l’éthique profonde
             de vous transmettre des savoirs utiles et justes pour vous. De vous aider à vous 
             réapproprier votre souveraineté dans vos parcours de santé et de mieux-être. 
             Je crée des espaces sacrés où vous pouvez vous déposer en toute confiance, vous laisser être,
              vous retrouver. Des parenthèses suspendues pour aller à la rencontre de votre magie intérieure 
              et de vos ressources.
             Je tisse des liens, qui vous permettent des moments de reliance à vous même, et à d’autres femmes.
             Je lance des passerelles entre l’avant et l’après, et j’invite à la reconnexion aux sagesses 
             éternelles. Je cultive l’amour du beau et du doux, et je le met au service de votre âme. 
             J’honore la femme, dans toute sa vulnérabilité et toute sa force ; dans sa lumière comme 
             dans ses ombres. Je suis là, je vous vois et vous entend
            </div>
            <div className="presentation-signature">Claire</div>
            <div>
              <button className="btn-primary btn-sm">Je prends rendez-vous !</button>
            </div>
          </div>
        </div>
        <div className="citation-container flex-row align-center justify-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis culpa saepe debitis.
          Aut obcaecati pariatur animi quam cupiditate!
        </div>
        <div className="prestations-container">
          <div className="prestations-title">Mes prestations</div>
          <div className="flex-row align-center justify-center gap-2">
            {prestationItems.map((prestation) => (
              <div className={prestation.class} key={prestation.label}>
                <div className="prestations-item-inner">
                  <div className="prestations-item-front">
                    <div className="prestations-item-title">{prestation.label}</div>
                  </div>
                  <div className="prestations-item-back">
                    <div className="prestations-item-title">{prestation.label}</div>
                    <p>{prestation.description}</p>
                    <a href={prestation.href} className="btn btn-sm btn-secondary">En savoir plus</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
