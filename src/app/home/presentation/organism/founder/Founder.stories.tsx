import { ComponentMeta, ComponentStory } from '@storybook/react';
import Founder from './Founder';

export default {
	title: 'App/Home/Organism/Founder',
	component:Founder
} as ComponentMeta<typeof Founder>

const component: ComponentStory<typeof Founder> = (args) => <Founder { ...args }/>
export const founder= component.bind({})
founder.args = {
	paragraph: "  jolders nos conecta de manera sencilla y transparente con el mundo de inversionistas con el que a veces cuesta dar.",
	image:"https://jolders.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-22-at-22.35.31-3.jpeg",
	name: "javier",
	role: "Bubbo | Founder.",
  }
  

  