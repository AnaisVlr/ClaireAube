import logoBlancTexte from './static/img/logo_text_white.png'
import instagramLogo from './static/img/instagram.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function App() {
  return (
    <>
      <div className='containerCenter h-100'>
        <div className='containerConstruction'>
          <div className='containerCenter'>
            <img src={logoBlancTexte} alt="Logo Claire Aube" className='logo' />
            <h3 className='title'>Mon site est en cours de création&nbsp;!</h3>
            <p>En attendant, n’hésitez pas à me contacter pour toute question ou prise de rendez-vous&nbsp;:</p>
            <div className='containerCenter contact'>
              <a href='https://www.instagram.com/claire__aube/#' target='_blank' className='containerCenter w-100'>
                <img src={instagramLogo} alt="Logo Instagram" className='icon' />
                <p>Sur Instagram&nbsp;:</p>
                <b>@claire__aube</b>
              </a>
              <a href='mailto:claireaube.accompagnement@gmail.com' className='containerCenter w-100'>
                <FontAwesomeIcon icon={faEnvelope} className='icon' />
                <p>Par email&nbsp;:</p>
                <b className='bold'>claireaube.accompagnement@gmail.com</b>
              </a>
            </div>
            <h4 className='title'>À très bientôt !</h4>
          </div>
        </div>
      </div>
    </>
  )
}