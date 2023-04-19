
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'


export default {
	title: 'Components/molecules/Button',
	component: Button
} as ComponentMeta<typeof Button>

const component: ComponentStory<typeof Button> = (args) => <Button { ...args } />
export const button = component.bind({})
button.args = {
	text: '#SOY STARTUP',
	txtColor: 'white',
	bgColor: '#8224e3',
}
