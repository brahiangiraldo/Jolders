import React from 'react'
import { IconsFactoryProps } from './IconsFactoryProps'
import { icons } from './icons'

const IconsFactory = ({width, height,name, color}: IconsFactoryProps) => {
	const IconComponents = icons[name]

  return <IconComponents width={width} height={height} color={color}/>
}

export default IconsFactory
