import Accordeon from "@/components/organism/accordeon/Accordeon"
import { Faq } from "./Data"
import './faqComponent.scss';
import ButtonAnswer from "@/components/molecules/button-answer/ButtonAnswer";


const FaqComponent = () => {
  return (
	<div className="faq-component">
 
 <section className="faq-section-components">
    <h2 className="faq-title">Respondemos tus dudas</h2>
    <h3 className="faq-subtitle">Invierte de manera segura. Encuentra lo que necesitas saber para invertir en Jolders.</h3>
  </section>


  <section className="faq-grid">
  <section className="section-paragraph">
    <h4 className="title-inversor">¿Cómo hago para invertir?</h4>
    <p>Es muy ágil y rápido, se resuelve en unos simples pasos: -Registrate o inicia sesión. -Realiza el proceso de validación de identidad y acepta terminos y condiciones. -Ingresa al market y selecciona la Startup en la que deseas invertir, selecciona el monto y realiza tu compra. -Completa el pago y firma la compra. -Recibe tu certificado de inversión.</p>
   
   <section className="botton-answer">
    <ButtonAnswer text="INVERTIR AHORA" bgColor=""txtColor="#d19fe8" />
  </section>

  </section>
  <section className="section-map">
    {Faq.map((item) => (
    <Accordeon
    title={item.title}
    body={item.body}
    />
    ))}
  </section>

</section>



</div>
  )
}

export default FaqComponent