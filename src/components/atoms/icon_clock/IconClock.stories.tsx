import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconClock from './IconClock'

export default {
  title: 'Components/Atoms/IconClock',
  component: IconClock
} as ComponentMeta<typeof IconClock>

const component: ComponentStory<typeof IconClock> = (args) => <IconClock { ...args } />
export const iconClock = component.bind({})
iconClock.args = {
  width: 89,
  height: 88,
}
