import React from 'react';
import { startUps } from './Data';
import './startUpSections.scss';
import CardStartUps from '../cardstartups/CardStartUps';
import { StartUpSectionsProps } from './StartUpSectionsProps';

const StartUpSections = ({ id }: StartUpSectionsProps) => {
  return (
    <section className="sectionCards" id={id}>
      <div>
        <div className="title-star">Co-Invierte en STARTUPS</div>
        <div className="paragraph-star">
          Validadas por las aceleradoras más importantes con amplio potencial de expansión global.
        </div>
      </div>
      <section className="cardContainer">
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
      </section>
    </section>
  );
};

export default StartUpSections;
