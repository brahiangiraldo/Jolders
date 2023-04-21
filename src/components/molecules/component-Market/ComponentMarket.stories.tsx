import { ComponentMeta, ComponentStory } from "@storybook/react";
import ComponentMarket from "./ComponentMarket";
import IconPorcent from "@/components/atoms/icon_porcent/IconPorcent";

export default{
	title: 'Components/Molecules/ComponentMarket',
	component:ComponentMarket
} as ComponentMeta<typeof ComponentMarket>

const component: ComponentStory<typeof ComponentMarket> = (args) => <ComponentMarket {...args }/>
export const componentMarket = component.bind({})
componentMarket.args = {
icon:<IconPorcent width={88} height={88}/>,
title2:" Información de mercado ",
body2:" Visualiza las participaciones en oferta de distintas startups. ",
}