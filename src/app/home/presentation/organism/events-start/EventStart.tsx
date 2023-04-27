import React from 'react';
import './eventStart.scss';
import { EventProps } from './Events.Props';

const EventStart = ({ image, name, }: EventProps) => {
  return (
    <section className='container-event'>
      <div className='title-event'>
        Eventos
      </div>
      <div className='paragraph-event'>
        Participamos activamente de encuentros de Startups e Inversores para difundir Jolders,
        escuchamos sus necesidades e inquietudes y sobre eso trabajamos para mejorar el ecosistema.
        Juntos es mejor.!
      </div>
     
      <img className="image-event" src={image} alt={`${name}'events`} />
      
	
	  {/* <section className='direction-button'>
        <button className="button-event">
          E mail
        </button>
        <button className="button-Subscrib">
          Subscribirse
        </button>
	  </section> */}

	<div className="risk-section">
	  <h2 className="risk-warning__title">Advertencia de riesgo</h2>
      <br />
	  <span className="risk-section__text">Invertir en empresas emergentes y en etapa inicial implica riesgos, como falta de liquidez, falta de dividendos, pérdida de inversión y dilución, y debe hacerse solo como parte de una cartera diversificada.</span>
      <br />
	  <span className="risk-section__text">La diversificación implica repartir el dinero en múltiples inversiones. Como inversor, esto te dará cierta tranquilidad, ya que tus inversiones podrán hacer frente a posibles condiciones de mercado adversas y, a la vez, atenuará las pérdidas. Sin embargo, los riesgos seguirán siendo los mismos.</span>
      <br />
	  <span className="risk-section__text">Jolders está dirigido exclusivamente a inversores que puedan comprender estos riesgos y tomar sus propias decisiones de inversión.</span>
      <br />
	  <span className="risk-section__text">Las restricciones adicionales y la limitación de responsabilidad de Jolders se establecen en los Términos y condiciones. Busque asesoramiento independiente según sea necesario, ya que Jolders no ofrece asesoramiento sobre inversiones ni sobre impuestos.</span>
      <br />
	  <span className="risk-section__text">DYOR 🤓</span>
    </div>
    </section>
  );
}

export default EventStart;

