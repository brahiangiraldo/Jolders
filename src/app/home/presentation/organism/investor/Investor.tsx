
import { Counter } from '@/components/organism/counter/Counter'
import React from 'react'
import './investor.scss'
import Button from '@/components/molecules/button/Button'



export const Investor = () => {
  return (
    <section className='content'>
      {/* conters*/ }
      <section className='conters'>
      <span> +<Counter number={56}/>k€ 
      <div className='fontp'>Capital Comprometido</div>
      </span>
      <span>+<Counter number={200}/>
      <div className='fontp'>Inversores Registrados</div>
      </span>
      <span> <Counter number={10}/>
      <div className='fontp'>STARTUPS</div>
      </span>
      <span> +<Counter number={5}/>
      <div className='fontp'>Países</div>
      </span>
      </section>
    <h2 className='invest'>Invierte en Startups sin fronteras. Se parte de las empresas que van
    a moldear el futuro.</h2>

 <section className='buttonp'> 
    {/* <Button
					bgColor='white'
					text="#SOY STARUP"
					txtColor="white"
				/>

    <Button
					bgColor='white'
					text="#SOY INVERSOR"
					txtColor="white"
				/> */}
  </section> 

  </section>




    

  )
}


