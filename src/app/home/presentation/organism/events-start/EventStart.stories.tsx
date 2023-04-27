import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventStart from "./EventStart";



export default{
	title: 'App/Home/Organism/EventStart',
	component: EventStart
} as ComponentMeta<typeof EventStart>

const component: ComponentStory<typeof EventStart> = (args) => <EventStart{ ...args }/>
export const eventStart = component.bind({})
eventStart.args = {
	
	image:"https://jolders.com/wp-content/uploads/2023/02/4yfn.png",
	name: "javier",
	
	
  }
  