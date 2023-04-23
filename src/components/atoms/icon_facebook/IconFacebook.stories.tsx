import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconFacebook from './IconFacebook'


export default {
  title: 'Components/Atoms/IconFacebook',
  component: IconFacebook
} as ComponentMeta<typeof IconFacebook>

const component: ComponentStory<typeof IconFacebook> = (args) => <IconFacebook { ...args } />
export const iconFacebook = component.bind({})
iconFacebook.args = {
  width: 89,
  height: 88,
  color:"blue",
}
