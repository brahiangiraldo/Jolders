import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResumeSlider from './ResumeSlider';

export default {
  title: 'App/Home/Organism/ResumeSlider',
  component: ResumeSlider
} as ComponentMeta<typeof ResumeSlider>

const component: ComponentStory<typeof ResumeSlider> = (args) => <ResumeSlider { ...args } />
export const resumeSlider= component.bind({})
resumeSlider.args = {
  title: 'invirtio 700Є en Buddo',
  name: 'Gonzalo sepulveda' ,
  flag :"🇺🇸",
  head: 'Hace 15 días'
}
