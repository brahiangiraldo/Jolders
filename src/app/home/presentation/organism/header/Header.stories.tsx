import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';

export default {
  title: 'App/Home/Organism/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const component: ComponentStory<typeof Header> = (args) => <Header { ...args } />;
export const header = component.bind({});
header.args = {
	id: 'start-up-sections', // Asigna el id deseado para el componente StartUpSections
  };


// { ...args }