import { IconsType } from "@/components/atoms/__factory__/IconsType"

export interface MenuTabProps {
	items:ItemMenuTab[]
}


export interface ItemMenuTab{
	iconDefault:IconsType
	iconActive:IconsType
	text:string
	onClick:()=>void
}