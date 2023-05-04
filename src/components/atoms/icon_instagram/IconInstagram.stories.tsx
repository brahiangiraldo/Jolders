import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconInstagram from './IconInstagram'



export default {
  title: 'Components/Atoms/IconInstagram',
  component: IconInstagram
} as ComponentMeta<typeof IconInstagram>

const component: ComponentStory<typeof IconInstagram> = (args) => <IconInstagram { ...args } />
export const iconInstagram = component.bind({})
iconInstagram.args = {
  width: 89,
  height: 88,
  color:"blue",
}
