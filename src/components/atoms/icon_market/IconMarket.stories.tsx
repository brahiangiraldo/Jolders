import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconMarket from './IconMarket'

export default {
  title: 'Components/Atoms/IconMarket',
  component: IconMarket
} as ComponentMeta<typeof IconMarket>

const component: ComponentStory<typeof IconMarket> = (args) => <IconMarket { ...args } />
export const iconMarket = component.bind({})
iconMarket.args = {
  width: 89,
  height: 88,
  fillColor:"orange",
  outlineColor:"pink"
  
}
