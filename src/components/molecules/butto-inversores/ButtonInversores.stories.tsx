
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonInversores from './ButtonInversores';

export default {
  title: 'Components/molecules/ButtonInversores',
  component: ButtonInversores,
} as ComponentMeta<typeof ButtonInversores>;

const component: ComponentStory<typeof ButtonInversores> = (args) => <ButtonInversores {...args} />;
export const buttonInversores = component.bind({});
buttonInversores.args = {
  text: 'CONTINUAR EXPLORANDO...',
  txtColor: 'white',
  bgColor: '#8224e3',
  searchIcon: '🔍', 
  cartIcon: '🛒',
};