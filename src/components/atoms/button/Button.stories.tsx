import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
	title: 'Components/Atoms/Button',
	component: Button
} as ComponentMeta<typeof Button>

const component: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Im Button</Button>
)
export const button = component.bind({})
