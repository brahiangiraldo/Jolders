import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconInversor from './IconInversor'


export default {
  title: 'Components/Atoms/IconInversor',
  component: IconInversor
} as ComponentMeta<typeof IconInversor>

const component: ComponentStory<typeof IconInversor> = (args) => <IconInversor { ...args } />
export const iconInversor = component.bind({})
iconInversor.args = {
  width: 89,
  height: 88,
  color:'blue',
}
