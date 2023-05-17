import { useEffect, useState } from 'react';
import { SetIntervalProps } from './SetIntervalProps';
import './setInterval.scss';

const SetInterval = ({ day, hour, minute }: SetIntervalProps) => {
  const [remainingTime, setRemainingTime] = useState({ day, hour, minute });

  useEffect(() => {
    const interval = setInterval(() => {
      // Reducir el tiempo restante
      setRemainingTime((prevTime) => {
        let { day, hour, minute } = prevTime;

        if (minute > 0) {
          minute--;
        } else {
          minute = 59;

          if (hour > 0) {
            hour--;
          } else {
            hour = 23;

            if (day > 0) {
              day--;
            } else {
              clearInterval(interval); // Detener el intervalo cuando el tiempo llegue a cero
            }
          }
        }

        return { day, hour, minute };
      });
    }, 60000); // Intervalo de 1 minuto (60000 ms)

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <section className="set-interval">
      <div>{remainingTime.day}</div>
      <div>:{remainingTime.hour}</div>
      <div>:{remainingTime.minute}</div>
    </section>
  );
}

export default SetInterval;

