import { ComponentMeta, ComponentStory } from "@storybook/react";
import FaqComponent from "./FaqComponent";

export default{
	title: 'App/Home/Organism/FaqComponent',
	component:FaqComponent
} as ComponentMeta<typeof FaqComponent>

const component: ComponentStory<typeof FaqComponent> = (args) => <FaqComponent/>
export const faqComponent = component.bind({})
