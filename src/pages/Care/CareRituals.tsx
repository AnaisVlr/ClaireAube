import flowerHand from '../../assets/img/flower_hand.webp'
import './careRituals.css'

export default function CareRituals() {
  return (
    <div className="care-rituals">
      <div className="banner">
        <h2>Soins Rituels</h2>
        <p>De la peau à l'âme</p>
      </div>
      <div className="introduction">
        <img src={flowerHand} alt="Logo Claire Aube" loading="lazy"/>
        <p>
          Il est évident pour moi que le chemin de guérison passe par le corps... <br/>
          Le fait de prendre soin, de chérir, de magnifier sa beauté... a toujours fait partie des routines des communautés de femmes. <br/>
          Ainsi, je vous propose de renouer avec ces traditions, cette sagesse du toucher. <br/>
          Plus que des soins, de vrais rituels transformateurs. <br/>
          Des espaces vibrants et magiques pour vous retrouver, vous cocooner, vous ramener à votre essence primordiale. <br/>
          Pour honorer votre incarnation humaine.
        </p>
      </div>
      <div className="introduction-suite">
        <p>
          Chaque soin a été conçu avec la plus grande attention, avec une profondeur de réflexion intime. <br/>
          Fruits de tous les enseignements et sagesses que j’ai récolté ces dernières années, et de mon propre cheminement personnel.<br/>
          Je me sens aujourd’hui particulièrement honorée de mettre mon toucher sacré au service de vos corps et vos âmes.<br/>
        </p>
      </div>
      <div className='rituals-for'>
        <h4>Des rituels pour ...</h4>
        <ul>
          <li>Prendre soin de soi</li>
          <li>Renouer avec sa beauté originelle</li>
          <li>Honorer les corps, leurs fissures et leurs éclats</li>
          <li>Soutenir les transformations et les ancrer dans la matière</li>
          <li>La femme qui porte et donne la vie</li>
          <li>S’ouvrir, se retrouver ; connecter le cœur, le corps et l’esprit</li>
        </ul>
      </div>
      <div className="rituals-essence">
        <h4>L'enssence des soins rituels</h4>
        <p>
          Tous mes soins font appel à la sagesse de la Terre et du vivant. <br/>
          Ils allient la Médecine des plantes, des abeilles, du son, de l’eau, des minéraux... et l’art du toucher sacré.<br/>
          Ils sont empreints de nombreux enseignements issus des médecines ancestrales, telle que la médecine chinoise, la médecine ayurvédique, 
          la médecine taoïste, la médecine amérindienne... <br/> Et, n’oublions pas, la richesse de notre médecine traditionnelle européenne !
        </p>

      </div>

    </div>
  )
}