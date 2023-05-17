import { useState } from 'react';
import SetInterval from '@/components/organism/set_interval/SetInterval';
import './cardInversor.scss';
import IconHeartFill from '@/components/atoms/icon_heart_fill/IconHeartFill';
import IconHeart from '@/components/atoms/icon_heart/IconHeart';
import { CardInversorProps } from './CardInversorProps';


const CardInversor = ({
  imageSrc,
  startupName,
  currentInvestment,
  goalInvestment,
}: CardInversorProps) => {
  const [showFilledIcon, setShowFilledIcon] = useState(false);

  const currencyFormat = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });

  const formattedCurrentInvestment = currencyFormat.format(currentInvestment);
  const formattedGoalInvestment = currencyFormat.format(goalInvestment);

  const handleIconClick = () => {
    setShowFilledIcon(!showFilledIcon);
  };

  return (
    <section className="cardAffico">
      <div className="imageContainer">
        <img className="imgcarAffico" src={imageSrc} alt={`image ${startupName}`} />
        <div className="iconContainer" onClick={handleIconClick}>
          {showFilledIcon ? (
            <IconHeartFill width={30} height={30} color="red" />
          ) : (
            <IconHeart width={30} height={30} color="#BDBDBD" />
          )}
        </div>
        <div className="setIntervalContainer">
          <SetInterval day={30} hour={12} minute={59} />
        </div>
      </div>

      <section>
        <div className="startupNameAffico">{startupName}</div>
        <p className="currentInvestmentAffico">
          {`${formattedCurrentInvestment} texto ${formattedGoalInvestment} texto`}
        </p>
      </section>
    </section>
  );
};

export default CardInversor;