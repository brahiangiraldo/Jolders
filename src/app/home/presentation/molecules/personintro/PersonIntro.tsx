import Image from 'next/image';
import front from '@/assets/front.png';
import './personIntro.scss';

const PersonIntro = () => {
  return (
    <section className='container-person'>
      <div >
        <Image className='image-wrapper' src={front} alt='Image Person'/>
      </div>
      <div className='content-wrapper'>
        <h1 className='title-person'>Encuentra en Jolders oportunidades de inversión. 🙌</h1>
        <p className='paragraph-person'>Invierte como lo hacen los grandes. Accede a las posibilidades que antes eran de los Venture Capital. Invierte en startups que cuentan con innovación en sus productos o servicios. Aprovecha a ser parte de modelos de negocios disruptivos con la capacidad de crecer de manera rápida y continua en el tiempo. 📈</p>
      </div>
    </section>
  );
}

export default PersonIntro;




