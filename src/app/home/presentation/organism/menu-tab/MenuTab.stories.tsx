import { ComponentMeta, ComponentStory } from "@storybook/react";
import MenuTab from "./MenuTab";

export default{
	title: 'App/Home/Organism/MenuTab',
	component: MenuTab
} as ComponentMeta<typeof MenuTab>

const component: ComponentStory<typeof MenuTab> = (args) => <MenuTab{...args}/>
export const menuTab = component.bind({})
menuTab.args = {
	items:[
	{iconDefault:'IconHome',iconActive:'IconHomeFill',text:'cuenta',onClick:()=>console.log('hola')},
	{iconDefault:'IconInversores',iconActive:'IconInversoresFill',text:'cuenta',onClick:()=>console.log('hola')},
	{iconDefault:'IconStartUp',iconActive:'IconStartUpFill',text:'cuenta',onClick:()=>console.log('hola')},
	{iconDefault:'IconMarket',iconActive:'IconMarketFill',text:'cuenta',onClick:()=>console.log('hola')}]
  }
  

//   {iconDefault:'IconAccount',iconActive:'IconAccountFill',text:'cuenta',onClick:()=>console.log('hola')}