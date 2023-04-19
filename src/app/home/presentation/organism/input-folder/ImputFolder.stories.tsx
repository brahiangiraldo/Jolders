import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImputFolder from './ImputFolder';

export default {
	title: 'App/Home/Organism/ImputFolder',
	component:ImputFolder 
} as ComponentMeta<typeof ImputFolder>

const component: ComponentStory<typeof ImputFolder> = (args) => <ImputFolder/>
export const imputFolder= component.bind({})