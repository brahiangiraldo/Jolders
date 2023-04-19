import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Investor } from "./Investor";

export default{
	title: 'App/Home/Organism/Investor',
	component: Investor
} as ComponentMeta<typeof Investor>

const component: ComponentStory<typeof Investor> = (args) => <Investor/>
export const investor = component.bind({})
