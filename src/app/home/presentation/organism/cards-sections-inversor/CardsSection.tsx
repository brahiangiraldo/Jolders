import CardAffico from '../../molecules/cards_inversor/CardInversor'
import { startUpsAffico } from './Data'
import './cardsSection.scss'

const CardsSection
 = () => {
  return (
    <section className="sectionCardsAffico">
      <section className="cardContainerAffico">
        {startUpsAffico.map((item) => (
          <CardAffico
            key={item.startupName}
            currentInvestment={item.currentInvestment}
            goalInvestment={item.goalInvestment}
            imageSrc={item.imageSrc}
            startupName={item.startupName}
          />
        ))}
      </section>
    </section>
  )
}

export default CardsSection
