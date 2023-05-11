import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconChat from './IconChat'


export default {
  title: 'Components/Atoms/Icons/IconChat',
  component: IconChat
} as ComponentMeta<typeof IconChat>

const component: ComponentStory<typeof IconChat> = (args) => <IconChat { ...args } />
export const iconChat = component.bind({})
iconChat.args = {
  width: 89,
  height: 88,
}
