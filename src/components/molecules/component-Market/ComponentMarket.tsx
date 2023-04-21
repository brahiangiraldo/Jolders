import React from 'react'
import { ComponentMarketProps } from './ComponentMarket.Props'
import './componentMarket.scss'

const ComponentMarket = ({ title2, body2, icon }: ComponentMarketProps) => {
  return (
	<section className='ComponentMarket'>
     {icon}
    <div className='title-2'>{title2}</div>
	<p className='paragraph-body2'>{ body2}</p>
	</section>
  )
}

export default ComponentMarket