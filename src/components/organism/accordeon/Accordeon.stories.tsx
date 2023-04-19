import { ComponentMeta, ComponentStory } from "@storybook/react";

import Accordeon from "./Accordeon";


export default{
	title: 'Components/Organism/Accordeon',
	component:Accordeon
} as ComponentMeta<typeof Accordeon>

const component: ComponentStory<typeof Accordeon> = (args) => <Accordeon {...args }/>
export const accordeon = component.bind({})
accordeon.args = {
title:"¿Qué es la CO-Inversión....?",
body:"Es un tipo de financiación donde las personas inviertan dinero en una empresa que se encuentra en una etapa inicial para impulsar el proyecto a cambio de participaciones en la empresa. ",
}