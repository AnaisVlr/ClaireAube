import logoBlancTexte from './static/img/logo_texte_blanc.png'

export default function App() {
  return (
    <>
      <div className='container1'>
        <div className='container2'>
          <div className='container3'>
            <img src={logoBlancTexte} alt="Logo" className='logo' />
            <h3 className='title'>Mon site est en cours de création !</h3>
            <p>En attendant, n’hésitez pas à me contacter pour toute question ou prise de rendez-vous :</p>
            <div className='contact'>
              <a href='https://www.instagram.com/claire__aube/#' target='_blank' className='instagram'>
                <p>Sur Instagram :</p>
                <p>@claire__aube</p>
              </a>
              <a href='mailto:claireaube.accompagnement@gmail.com' className='instagram'>
                <p>Par email :</p>
                <p>claireaube.accompagnement@gmail.com</p>
              </a>
            </div>
            <h4 className='title'>À très bientôt !</h4>
          </div>
        </div>
      </div>
    </>
  )
}