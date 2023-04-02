import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from './Input'

export default {
	title: 'Components/Atoms/Input',
	component: Input
} as ComponentMeta<typeof Input>

const component: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const input = component.bind({})
input.args = {
	placeholder: 'Write here...'
}
