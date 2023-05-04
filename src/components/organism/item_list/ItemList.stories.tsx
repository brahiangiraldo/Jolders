import { ComponentMeta, ComponentStory } from '@storybook/react';
import ItemList from './ItemList';


export default {
	title: 'Components/Organism/ItemList',
	component:ItemList
} as ComponentMeta<typeof ItemList>

const component: ComponentStory<typeof ItemList> = (args) => <ItemList {...args} />
export const itemList = component.bind({})
itemList.args = {
	items:[
		{
			text: 'Home',
			redirecTo: '#'
		},
		{
			text: '#SOY STARTUP',
			redirecTo: '#'
		},
		{
			text: '#SOY INVERSOR',
			redirecTo: '#'
		},
		{
			text: 'Mercado',
			redirecTo: '#'
		},
		{
			text: 'Cuenta',
			redirecTo: '#'
		}
	]

	
  }
  
