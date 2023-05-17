import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconHeartFill from './IconHeartFill'

export default {
  title: 'Components/Atoms/IconHeartFill',
  component: IconHeartFill
} as ComponentMeta<typeof IconHeartFill>

const component: ComponentStory<typeof IconHeartFill> = (args) => <IconHeartFill { ...args } />
export const iconHeartFill = component.bind({})
iconHeartFill.args = {
  width: 30,
  height: 30,
  color:"red"
}
