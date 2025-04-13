import flowerHand from '../../assets/img/flower_hand.webp'
import ritualPicture from '../../assets/img/soins-rituels/soins-rituels-1.webp'
import carteSaison from '../../assets/img/soins-rituels/soins-rituels-4.webp'
import gardienTerre from '../../assets/img/soins-rituels/gardien-de-la-terre-1.webp'
import matri from '../../assets/img/soins-rituels/matri.webp'
import matronae from '../../assets/img/soins-rituels/matronae.webp'
import onctions from '../../assets/img/soins-rituels/onctions_sacrees.webp'
import poitrine from '../../assets/img/soins-rituels/poitrine-coeur.webp'
import flowerWall from '../../assets/img/flower-wall.webp'

import './careRituals.css'

export default function CareRituals() {
  return (
    <div className="care-rituals flex-column">
      {/* Bannière */}
      <div className="banner">
        <div className="px-6 py-2 flex-column">
          <div className="banner-header-title flex-column">
            <h2>Soins Rituels</h2>
            <p>De la peau à l'âme</p>
          </div>

          <div className="banner-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a accusamus,
            corrupti inventore veritatis ut quasi quo minima provident, asperiores modi ex nihil.
            Fugiat laboriosam sed facilis modi id quas. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nobis placeat natus aspernatur odit maiores, sit quasi quae. Tenetur laboriosam, minima repellat enim
            voluptates molestias magni eius aliquam doloremque dignissimos tempore.
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="introduction px-6 py-2 flex-column align-center justify-center">
        <div className="flex-row">
          <p>
            Il est évident pour moi que le chemin de guérison passe par le corps... <br /><br />
            Le fait de prendre soin, de chérir, de magnifier sa beauté a toujours fait partie des routines des communautés de femmes. <br /><br />
            Ainsi, je vous propose de renouer avec ces traditions, cette sagesse du toucher. <br /><br />
            Plus que des soins, de vrais rituels transformateurs. <br /><br />
            Des espaces vibrants et magiques pour vous retrouver, vous cocooner, vous ramener à votre essence primordiale. <br /><br />
            Pour honorer votre incarnation humaine.
          </p>
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
        </div>
        <div className="introduction-text">
          <p>
            Chaque soin a été conçu avec la plus grande attention, avec une profondeur de réflexion intime. <br /><br />
            Fruits de tous les enseignements et sagesses que j’ai récolté ces dernières années, et de mon propre cheminement personnel.<br /><br />
            Je me sens aujourd’hui particulièrement honorée de mettre mon toucher sacré au service de vos corps et vos âmes.
          </p>
        </div>
      </div>

      {/* Essence des rituels */}

      <div className="rituals-essence px-6 py-2">
        <h4>L'essence des soins rituels</h4>
        <p>
          Tous mes soins font appel à la sagesse de la Terre et du vivant. <br />
          Ils allient la Médecine des plantes, des abeilles, du son, de l’eau, des minéraux... et l’art du toucher sacré.<br />
          Ils sont empreints de nombreux enseignements issus des médecines ancestrales, telle que la médecine chinoise, la médecine ayurvédique,
          la médecine taoïste, la médecine amérindienne... <br /> Et, n’oublions pas, la richesse de notre médecine traditionnelle européenne !
        </p>
      </div>

      {/* Possibilités */}
      <div className="rituals-possibilities px-6 py-2 flex-row">
        <div>
          <h4>Selon le soin, vous pourrez vous voir proposer :</h4>
          <ul>
            <li>De la visualisation</li>
            <li>Du massage</li>
            <li>Des étirements doux</li>
            <li>Des soins physico-énergétiques avec les onctions sacrées</li>
            <li>Des serrages, bercements, bordages et enveloppement aux tissus</li>
            <li>Des pratiques de bain et yonisteam</li>
            <li>Des remèdes de grand-mère tels que les cataplasmes et bouillottes</li>
            <li>Des pochons chauds</li>
            <li>Des massages au kansa wand</li>
            <li>Des tirages d’oracle</li>
            <li>Des rituels psycho-magiques</li>
            <li>Etc...</li>
          </ul>
        </div>
        <img src={ritualPicture} alt="" loading="lazy" />
      </div>

      {/* Liste des rituels */}
      <div className="rituals-description px-6 py-2 flex-column align-center justify-center gap-2">
        <h3>Découvrez tous mes rituels de soin</h3>

        <div className="rituals-line">
          {/* Rituel de la poitrine et du coeur */}
          <div className="ritual-item">
            <img src={poitrine} alt="" loading="lazy" className="rituel" />
            <h6>Rituel de la poitrine et du coeur</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
              sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
              iste soluta nisi! Nihil soluta labore sequi voluptas.
            </p>
            <button className='btn-sm btn-secondary'>En savoir +</button>
          </div>

          {/* Rituel de la Matricia */}
          <div className="ritual-item">
            <img src={matri} alt="" loading="lazy" className="rituel" />
            <h6>Rituel Matricia</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
              sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
              iste soluta nisi! Nihil soluta labore sequi voluptas.
            </p>
            <button className='btn-sm btn-secondary'>En savoir +</button>
          </div>

          {/* Rituel Chrysalide */}
          <div className="ritual-item">
            <img src={flowerHand} alt="" loading="lazy" className="rituel" />
            <h6>Rituel Chrysalide</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
              sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
              iste soluta nisi! Nihil soluta labore sequi voluptas.
            </p>
            <button className='btn-sm btn-secondary'>En savoir +</button>
          </div>
        </div>

        <div className="ritual-category">
          Les rituels pour les mamans
        </div>

        <div className="rituals-line">

          {/* Rituel des Matronae */}
          <div className="ritual-item">
            <img src={matronae} alt="" loading="lazy" className="rituel" />
            <h6>Rituel des Matronae</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
              sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
              iste soluta nisi! Nihil soluta labore sequi voluptas.
            </p>
            <button className='btn-sm btn-secondary'>En savoir +</button>
          </div>

          {/* Rituel du bain des Relevailles */}
          <div className="ritual-item">
            <img src={flowerHand} alt="" loading="lazy" className="rituel" />
            <h6>Rituel du bain des Relevailles</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
              sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
              iste soluta nisi! Nihil soluta labore sequi voluptas.
            </p>
            <button className='btn-sm btn-secondary'>En savoir +</button>
          </div>
        </div>

        <div className="ritual-category">
          Les rituels saisonniers
        </div>

        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Odit quam quis fugit quaerat illo ab, molestiae minus.
          Eligendi nisi cupiditate vel iusto omnis laudantium officia fugit expedita quod? Quo, itaque.
        </div>

        <div className="season-ritual">
          <img src={carteSaison} alt="Image avec la roue des saisons Celtes" loading="lazy" />

          <div className="season-ritual-description">
            <h4>En ce moment, découvrez le rituel de Yule&nbsp;:</h4>
            {/* Rituel de Yule */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
              sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
              iste soluta nisi! Nihil soluta labore sequi voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
              sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
              iste soluta nisi! Nihil soluta labore sequi voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
              sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
              iste soluta nisi! Nihil soluta labore sequi voluptas.
            </p>
            <button className='btn-sm btn-primary'>En savoir +</button>
          </div>
        </div>

        <div className="ritual-category">
          Les rituels sur mesure
        </div>

        <div className="rituals-personalized">
          <p>
            Des soins signature, entièrement personnalisés, pensés pour vous et par vous
          </p>

          <div className="rituals-line">
            <div className="ritual-item">
              <img src={gardienTerre} alt="" loading="lazy" className="rituel" />
              <h6>Rituel des Gardiens de la Terre</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
                sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
                iste soluta nisi! Nihil soluta labore sequi voluptas.
              </p>
              <button className='btn-sm btn-secondary'>En savoir +</button>
            </div>

            <div className="ritual-item">
              <img src={onctions} alt="" loading="lazy" className="rituel" />
              <h6>Rituel Onctions Sacrées</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates,
                sint cupiditate culpa, vitae voluptas excepturi vel et beatae fugiat eos maiores
                iste soluta nisi! Nihil soluta labore sequi voluptas.
              </p>
              <button className='btn-sm btn-secondary'>En savoir +</button>
            </div>
          </div>
        </div>

      </div>

      <div className="explication-rituals px-6 py-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis placeat eos
          officiis eveniet? Quibusdam quidem provident, quasi cupiditate at nam, amet nemo
          ullam dolores temporibus suscipit vel corporis fuga?
        </p>
      </div>

      <div className="flex-column align-center justify-center">
        <h4>Mon espace de soin :</h4>
        <div className="space-care-description flex">
          <img src={flowerWall} alt="Photo de l'espace de soin" loading="lazy" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis placeat eos
            officiis eveniet? Quibusdam quidem provident, quasi cupiditate at nam, amet nemo
            ullam dolores temporibus suscipit vel corporis fuga?
          </p>
        </div>
      </div>

      <div className="flex-row align-center justify-between px-6 py-2">
        <img src={flowerHand} alt="Logo Claire Aube" loading="lazy" className='rituals-contact-img'/>
        <div className="flex-column align-center justify-center gap-2">
          <p>
            Vous vous sentez appelée à vivre un rituel avec moi ? <br />
            Vous ne savez pas exactement lequel choisir ?
          </p>
          <button className='btn-sm btn-primary'>
            Contactez-moi
          </button>
        </div>
        <img src={flowerHand} alt="Logo Claire Aube" loading="lazy" className='rituals-contact-img' />
      </div>
    </div>
  )
}