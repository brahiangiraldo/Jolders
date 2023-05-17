import { ComponentMeta, ComponentStory } from '@storybook/react';
import Market from './Market';

export default {
  title: 'App/Home/Organism/Market',
  component: Market,
} as ComponentMeta<typeof Market>;

const component: ComponentStory<typeof Market> = (args) => <Market {...args} />;
export const market = component.bind({});
market.args = {
  id: 'market-section', // Asigna el id deseado para el componente Market
};