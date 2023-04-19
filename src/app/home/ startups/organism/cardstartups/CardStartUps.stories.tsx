import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardStartUps from './CardStartUps';



export default {
	title: 'App/Home/Startups/Organism/CardStartUps',
	component: CardStartUps
} as ComponentMeta<typeof CardStartUps>

const component: ComponentStory<typeof CardStartUps> = (args) => <CardStartUps {...args}/>
export const cardStartUps= component.bind({})
cardStartUps.args = {
	imageSrc: "https://jolders.com/wp-content/uploads/2017/11/oie_TvJvdrBb4shd-1.png",
	category:"Sin categorizar",
	startupName:"Planteka | Marketplace de servicios vinculados a la naturaleza.",
	currentInvestment:0,
	goalInvestment:20000,
	daysRemain:55,
	investors:0,
    founded:0,
	favorite:false,
  };

  	