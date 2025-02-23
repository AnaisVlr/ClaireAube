import './constructionPage.css'
import logoWhite from '../../assets/img/logo_text_white.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router'

export default function ConstructionPage() {
  return (
    <>
      <div className='container main'>
        <img src={logoWhite} alt="Logo Claire Aube" className='logo' loading="lazy"/>
        <h3>Mon site est en cours de création&nbsp;!</h3>
        <p>En attendant, n’hésitez pas à me contacter pour toute question ou prise de rendez-vous&nbsp;:</p>
        <NavLink to="/concerts">All Concerts</NavLink>
        <div className='container g-1'>
          <div className='container contact'>
            <FontAwesomeIcon icon={faInstagram} className='icon' />
            <p>Sur Instagram&nbsp;:</p>
            <a href='https://www.instagram.com/claire__aube/#' target='_blank' >
              <b>@claire__aube</b>
            </a>
          </div>
          <div className='container contact'>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <p>Par email&nbsp;:</p>
            <a href='mailto:claireaube.accompagnement@gmail.com'>
              <b className='mail'>claireaube.accompagnement@gmail.com</b>
            </a>
          </div>
        </div>
        <h4>À très bientôt !</h4>
      </div>
    </>
  )
}