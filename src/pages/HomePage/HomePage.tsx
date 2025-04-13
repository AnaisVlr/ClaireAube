import FlowerImg from '../../assets/img/flower.webp';
import './homepage.css';

export default function HomePage() {
  const prestationItems = [
    { label: "Consultations", 
      href: "/consultations", 
      class: "prestations-item consultations-picture",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    { label: "Guidances", 
      href: "/guidances", 
      class: "prestations-item guidances-picture",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    { label: "Soins rituels", 
      href: "/soin-rituels", 
      class: "prestations-item services-picture",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    { label: "Autres services", 
      href: "/autre-services", 
      class: "prestations-item soins-picture",
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate non quidem
              voluptates unde ducimus vero velit quae quaerat in eum dolorem sequi veniam perferendis
              praesentium, accusamus temporibus architecto quam quis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate non quidem
              voluptates unde ducimus vero velit quae quaerat in eum dolorem sequi veniam perferendis
              praesentium, accusamus temporibus architecto quam quis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate non quidem
              voluptates unde ducimus vero velit quae quaerat in eum dolorem sequi veniam perferendis
              praesentium, accusamus temporibus architecto quam quis?
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
