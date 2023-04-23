import Image from 'next/image';
import girl from '@/assets/girl.png';
import './personIntroTwo.scss';

const PersonIntroTwo = () => {
  return (
    <section className='container'>
      <div >
        <Image className='image-wrapper-girl' src={girl} alt='Image girl'/>
      </div>
      <div className='content-wrapper-girl'>
        <h1 className='title-person'>Diversifica tu cartera y disminuye el riesgo.</h1>
        <p className='paragraph-person'>Aprovecha a invertir en diferentes verticales. Los tickets bajos te permiten crear una cartera diversificada, de esta manera, podras ser parte de varios proyectos y explorar su crecimiento disminuyendo el riesgo y aumentando las posibilidades de exito. 📈</p>
      </div>
    </section>
  );
}

export default PersonIntroTwo;




