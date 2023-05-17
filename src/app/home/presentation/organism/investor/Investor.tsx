import React from 'react';
import './investor.scss';
import { Counter } from '@/components/organism/counter/Counter';

export const Investor = () => {
  return (
    <section className="content-section" >
      <section className="counters">
        <span>
          +<Counter number={56} />k€
          <div className="fontp">Capital Comprometido</div>
        </span>
        <span>
          +<Counter number={200} />
          <div className="fontp">Inversores Registrados</div>
        </span>
        <span>
          <Counter number={10} />
          <div className="fontp">STARTUPS</div>
        </span>
        <span>
          +<Counter number={5} />
          <div className="fontp">Países</div>
        </span>
      </section>
      <h2 className="invest">
        Invierte en Startups sin fronteras. Sé parte de las empresas que van a moldear el futuro.
      </h2>
    </section>
  );
};


