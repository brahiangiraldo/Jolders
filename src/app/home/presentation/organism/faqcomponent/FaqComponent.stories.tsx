import { ComponentMeta, ComponentStory } from "@storybook/react";
import FaqComponent from "./FaqComponent";

export default{
	title: 'App/Home/Organism/FaqComponent',
	component:FaqComponent
} as ComponentMeta<typeof FaqComponent>

const component: ComponentStory<typeof FaqComponent> = (args) => <FaqComponent { ...args }/>
export const faqComponent = component.bind({})
faqComponent.args = {
	id: 'start-up-sections', // Asigna el id deseado para el componente StartUpSections
  };