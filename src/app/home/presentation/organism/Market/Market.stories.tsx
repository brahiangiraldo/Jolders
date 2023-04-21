import { ComponentMeta, ComponentStory } from "@storybook/react";
import Market from "./Market";


export default{
	title: 'App/Home/Organism/Market',
	component: Market
} as ComponentMeta<typeof Market>

const component: ComponentStory<typeof Market> = (args) => <Market/>
export const market = component.bind({})