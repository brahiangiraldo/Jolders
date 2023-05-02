import { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuHamburger from './MenuHamburger';



export default {
  title: 'Components/Organism/MenuHamburger',
  component: MenuHamburger,
} as ComponentMeta<typeof MenuHamburger>;

const menuItems = [
  { text: 'Home', redirectTo: '/' },
  { text: 'About', redirectTo: '/about' },
  { text: 'Contact', redirectTo: '/contact' },
];

const component: ComponentStory<typeof MenuHamburger> = (args) => (
  <MenuHamburger {...args} menuItems={menuItems} />
);

export const menuHamburger = component.bind({});
menuHamburger.args = {};

