// import Cardfooter from '../../molecules/cardfooter/Cardfooter';
import Cardfooter from '@/components/molecules/cardfooter/Cardfooter';
import { CardStartUpsProps } from './CardStartUpsProps';
import './cardStartUps.scss'


const CardStartUps = ({imageSrc, category, startupName, currentInvestment, goalInvestment, daysRemain, investors, founded, favorite }: CardStartUpsProps) => {

  // Formato de moneda en euros
  const currencyFormat = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });

  // Aplicar formato de moneda a los valores de inversión actual y meta de inversión
  const formattedCurrentInvestment = currencyFormat.format(currentInvestment);
  const formattedGoalInvestment = currencyFormat.format(goalInvestment);

  return (
    <section className='cardStartUp'>
      {/* header */}
      <section>
        <img className='imgcardStartUp' src={imageSrc} alt={`image ${startupName}`} />
      </section>
      {/* body */}
      <section className='sectionBody'>
        <div className='category'>
          {category}
        </div>
        <div className='startupName'>
          {startupName}
        </div>
        <p className='currentInvestment'>
          {`${formattedCurrentInvestment} texto ${formattedGoalInvestment} texto`}
        </p>
      </section>
      <section >
     <Cardfooter daysRemain={daysRemain} founded={investors} investors={founded}/>
     </section>
      <section>

      </section>
    </section>
  )
}

export default CardStartUps