import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardSmall from './CardSmall';



export default {
	title: 'App/Home/Organism/CardSmall',
	component: CardSmall
} as ComponentMeta<typeof CardSmall>

const component: ComponentStory<typeof CardSmall> = (args) => <CardSmall {...args}/>
export const cardSmall= component.bind({})
cardSmall.args = {
	imageSrc: "https://jolders.com/wp-content/uploads/2017/11/oie_TvJvdrBb4shd-1.png",
  };

  	