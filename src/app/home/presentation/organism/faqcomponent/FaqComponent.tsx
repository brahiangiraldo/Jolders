
import Accordeon from '@/components/organism/accordeon/Accordeon'
import React from 'react'

const FaqComponent = () => {
  return (
	<div className="faq-component">
  <div className="faq-title">
    <h2>Respondemos tus dudas</h2>
    <h3 className="subtitle">Invierte de manera segura. Encuentra lo que necesitas saber para invertir en Jolders.</h3>
  </div>
  <Accordeon title='¿Qué es la CO-Inversión....?' body='Es un tipo de financiación donde las personas inviertan dinero en una empresa que se encuentra en una etapa inicial para impulsar el proyecto a cambio de participaciones en la empresa.'/>
</div>
  )
}

export default FaqComponent