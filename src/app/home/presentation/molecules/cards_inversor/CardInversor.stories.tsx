import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardInversor from './CardInversor';

export default {
	title: 'App/Home/Presentation/Molecules/CardInversor',
	component: CardInversor
} as ComponentMeta<typeof CardInversor>

const component: ComponentStory<typeof CardInversor> = (args) => <CardInversor {...args}/>
export const cardInversor= component.bind({})
cardInversor.args = {
	imageSrc: "https://img.freepik.com/free-photo/female-young-manager-discussing-adhesive-note-with-coworkers-office-meeting_662251-1540.jpg?w=900&t=st=1684161820~exp=1684162420~hmac=b50c87f644f2a32c45578da0dc40719bb543aa0c6d9d8401c34fb8de8f3228ad",
	startupName:"Planteka markeplace de servicios vinculados a naturaleza",
	currentInvestment:0,
	goalInvestment:20000,
  };

  	