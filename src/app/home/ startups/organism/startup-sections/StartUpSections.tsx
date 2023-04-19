import React from 'react'
import { startUps } from './Data'
import CardStartUps from '../cardstartups/CardStartUps'
import './startUpSections.scss'

const StartUpSections = () => {
  return (
    <section className="sectionCards">
      <div className="cardContainer">
        {startUps.map((item) => (
          <CardStartUps
            key={item.startupName}
            currentInvestment={item.currentInvestment}
            daysRemain={item.daysRemain}
            favorite={item.favorite}
            founded={item.founded}
            goalInvestment={item.goalInvestment}
            investors={item.investors}
            category={item.category}
            imageSrc={item.imageSrc}
            startupName={item.startupName}
          />
        ))}
      </div>
    </section>
  )
}

export default StartUpSections