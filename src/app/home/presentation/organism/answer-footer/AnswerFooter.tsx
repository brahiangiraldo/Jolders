
import './answerFooter.scss';
import ButtonQuestions from '@/components/molecules/buttonquestions/ButtonQuestions';


const AnswerFooter = () => {
  return (
<section className="section-class">

<section className='svg-container'>
  <svg id="Capa_1" enable-background="new 0 0 512 512" 
     height="62" viewBox="0 0 512 512" 
     width="62" 
     xmlns="http://www.w3.org/2000/svg"><g><circle cx="256"fill="purple" 
     cy="467" r="45"/><path d="m405.792 142.082c-4.051-78.079-68.5-140.475-146.721-142.052-1.026-.02-2.043-.03-3.063-.03-74.638 0-138.222 55.019-148.564 129.134-.959 6.871-1.445 13.891-1.445 20.866 0 24.853 20.147 45 45 45s45-20.147 45-45c0-2.827.195-5.661.582-8.426 4.188-30.007 30.222-52.165 60.678-51.562 15.021.303 29.36 6.34 40.379 17.001 11.009 10.651 17.499 24.763 18.276 39.732.865 16.67-4.961 32.489-16.406 44.544-11.457 12.066-26.908 18.711-43.51 18.711-24.853 0-45 20.147-45 45v89c0 24.853 20.147 45 45 45s45-20.147 45-45v-50.968c24.073-7.604 46.159-21.218 63.777-39.774 28.607-30.131 43.174-69.614 41.017-111.176z" 
     fill="purple"/></g>
  </svg>
  </section>

  <div className='paragraph-answerFooter'>Para nosotros es importante que despejes todas tus dudas. 🤓</div>
  <p className='sub-paragraph-answerFooter'>Continua leyendo nuestras FAQs</p>
  <ButtonQuestions text='Preguntas frecuentes'bgColor='#8224e3'txtColor='#d19fe8'/>
</section>
  )
}
export default AnswerFooter