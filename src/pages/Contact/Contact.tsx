import { useForm, ValidationError } from '@formspree/react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact.css'

export default function Contact() {
  const [state, handleSubmit] = useForm("xdkgnggl");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className='pt-1 px-6 pb-1'>
      <h1>Me contacter</h1>
      <div className='flex-row gap-2 justify-between'>
        <div className='flex-column gap-1'>
          <div className='flex-column text-center gap-1'>
            <p className='text-center fs-1 m-0'>Besoin d'information ?<br />
              Faisons connaissance via ce formulaire de contact</p>
            <p className='fs-1-25 m-0'>Ou</p>
          </div>
          <div className='flex-row justify-around'>
            <a href='mailto:claireaube.accompagnement@gmail.com' className="btn-sm flex-column">
              <FontAwesomeIcon icon={faEnvelope} className='contact-icon fs-2' />
              <div className='fw-bold'>Par mail</div>
            </a>
            <a href='tel:+33761210693' className="btn-sm flex-column">
              <FontAwesomeIcon icon={faPhone} className='contact-icon fs-2' />
              <div className='fw-bold'>De vive voix</div>
            </a>
          </div>
          <div className='calendly-container flex-column gap-1 p-1 align-center'>
            <div>Vous pouvez aussi prendre RDV directement en ligne !</div>
            <a href='https://calendly.com/claireaube-accompagnement' target='_blank' className='btn-sm btn-primary br-4 fit-content'>
              Prendre RDV
            </a>
          </div>
        </div>
        <div className='form-contact'>
          <form onSubmit={handleSubmit} className='flex-column gap-1'>
            <div className='flex-row gap-1'>
              <div className='flex-column'>
                <label htmlFor="firstName" className='form-contact-label'>
                  Prénom
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                />
                <ValidationError
                  prefix="Prénom"
                  field="firstName"
                  errors={state.errors}
                />
              </div>
              <div className='flex-column'>
                <label htmlFor="lastName" className='form-contact-label'>
                  Nom
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                />
                <ValidationError
                  prefix="Nom"
                  field="lastName"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className='flex-column'>
              <label htmlFor="email" className='form-contact-label'>
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className='flex-column'>
              <span className='form-contact-label'>Prestation(s) d'interêt :</span>
              <div className='flex-row gap-2'>
                <div className='flex-column'>
                  <div className='flex-row'>
                    <input type="checkbox" id="consultation" name="consultation" value="Consultation" />
                    <label htmlFor="consultation">Consultation</label>
                  </div>
                  <div className='flex-row'>
                    <input type="checkbox" id="rituel" name="rituel" value="Rituel de soin" />
                    <label htmlFor="rituel">Rituel de soin</label>
                  </div>
                </div>
                <div className='flex-column'>
                  <div className='flex-row'>
                    <input type="checkbox" id="guidance" name="guidance" value="Guidance" />
                    <label htmlFor="guidance">Guidance</label>
                  </div>
                  <div className='flex-row'>
                    <input type="checkbox" id="other" name="other" value="Autre" />
                    <label htmlFor="other">Autre</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-column'>
              <label htmlFor='message' className='form-contact-label'>Détaillez votre demande :</label>
              <textarea
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className='btn btn-primary btn-sm'>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}