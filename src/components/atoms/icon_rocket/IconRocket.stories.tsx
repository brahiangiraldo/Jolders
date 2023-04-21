import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconRocket from './IconRocket'

export default {
  title: 'Components/Atoms/IconRocket',
  component: IconRocket
} as ComponentMeta<typeof IconRocket>

const component: ComponentStory<typeof IconRocket> = (args) => <IconRocket{ ...args } />
export const iconRocket = component.bind({})
iconRocket.args = {
  width: 89,
  height: 88,
}
