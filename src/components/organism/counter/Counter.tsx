'use client'
import { CounterProps } from './CounterProps'
import './counter.scss'
import React, { useEffect, useState } from 'react'

export const Counter  = ({ number }: CounterProps) => {
  const [counter, setCounter] = useState<number>(0)
  const [instanceInterval, setInstanceInterval] = useState<any>(undefined)
  

  useEffect(() => {
    if(counter < number){
      const objInt = setInterval(()=>{
        setCounter(counter+1)
      }, 4)    
      setInstanceInterval(objInt)
    }else{
      clearInterval(instanceInterval)
    }
    //se ejecuta cuando se desmonta el componente 
    return(()=>clearInterval(instanceInterval))
  }, [counter])
  

  return (
	<span className='count'>
		{counter}
	</span>
  )
}
