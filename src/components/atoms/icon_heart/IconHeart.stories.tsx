import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconHeart from './IconHeart'

export default {
  title: 'Components/Atoms/IconHeart',
  component: IconHeart
} as ComponentMeta<typeof IconHeart>

const component: ComponentStory<typeof IconHeart> = (args) => <IconHeart { ...args } />
export const iconHeart = component.bind({})
iconHeart.args = {
  width: 30,
  height: 30,
  color:"red"
}
