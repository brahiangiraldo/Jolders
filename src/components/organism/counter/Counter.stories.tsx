import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Counter } from "./Counter";

export default{
	title: 'Components/Organism/Counter',
	component: Counter
} as ComponentMeta<typeof Counter>

const component: ComponentStory<typeof Counter> = (args) => <Counter { ...args }/>
export const counter = component.bind({})
counter.args = {
	number: 99
  }
