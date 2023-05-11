import { IconsType } from "./IconsType"

export interface IconsProps{
	width: number
	height: number
	color: string
}

export interface IconsFactoryProps extends IconsProps{
	name: IconsType
}


