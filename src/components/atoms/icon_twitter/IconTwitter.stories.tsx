import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconTwitter from './IconTwitter'



export default {
  title: 'Components/Atoms/IconTwitter',
  component: IconTwitter
} as ComponentMeta<typeof IconTwitter>

const component: ComponentStory<typeof IconTwitter> = (args) => <IconTwitter { ...args } />
export const iconTwitter = component.bind({})
iconTwitter.args = {
  width: 89,
  height: 88,
  color:"blue",
}
