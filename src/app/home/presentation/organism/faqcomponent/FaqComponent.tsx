import React from 'react'

const FaqComponent = () => {
  return (
	<div className="faq-component">
  <div className="faq-title">
    <h2>Respondemos tus dudas</h2>
    <h3 className="subtitle">Invierte de manera segura. Encuentra lo que necesitas saber para invertir en Jolders.</h3>
  </div>
  <div className="faq-container">
    <div className="faq-section">
      <h4 className="question">¿Cómo hago para invertir?</h4>
      <div className="answer">
        <p>Es muy ágil y rápido, se resuelve en unos simples pasos:
          Regístrate o inicia sesión.
          Realiza el proceso de validación de identidad y acepta términos y condiciones.
          Ingresa al market y selecciona la Startup en la que deseas invertir, selecciona el monto y realiza tu compra.
          Completa el pago y firma la compra.
          Recibe tu certificado de inversión.
		  </p>
      </div>
    </div>
    <div className="faq-section">
      <h4 className="question">¿Qué es la CO-Inversión?</h4>
      <div className="answer">
        <p>Es un tipo de financiación donde varias personas invierten dinero en una empresa que se encuentra en una etapa inicial a cambio de participaciones en la empresa, compartiendo así el riesgo y los beneficios.</p>
      </div>
    </div>
    <div className="faq-section">
      <h4 className="question">¿Cómo puedo pagar mi inversión?</h4>
      <div className="answer">
        <p>Puedes pagar tu inversión con tarjetas de débito o crédito Visa y Mastercard a través de Stripe. También puedes realizar una transferencia bancaria a una cuenta escrow. Además, aceptamos el pago mediante stablecoins como USDT y DAI.</p>
      </div>
    </div>
    <div className="faq-section">
      <h4 className="question">¿Qué es la validación de identidad? ¿Y por qué es tan necesaria?</h4>
      <div className="answer">
        <p>La validación de identidad es un proceso en el cual se aplican controles y comprobaciones para evitar relaciones comerciales con personas relacionadas con el terrorismo, la corrupción o el blanqueo de capitales, entre otros. Te solicitaremos tus datos y una comprobación mediante un selfie sosteniendo un documento que lo acredite, como un pasaporte, cédula de identidad o registro de conducir.</p>
      </div>
    </div>
    <div className="faq-section">
      <h4 className="question">¿Qué sucede después de haber invertido?</h4>
      <div className="answer">
        <p>Recibirás tu certificado de participaciones y luego solo queda esperar y estar atento a cómo evoluciona la Startup que elegiste. Tú decides si optas por el largo plazo o si deseas vender tu participación en el mercado secundario.</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default FaqComponent