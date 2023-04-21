
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ButtonAnswer from './ButtonAnswer'

export default {
	title: 'Components/molecules/ButtonAnswer',
	component: ButtonAnswer
} as ComponentMeta<typeof ButtonAnswer>

const component: ComponentStory<typeof ButtonAnswer> = (args) => <ButtonAnswer { ...args } />
export const buttonAnswer = component.bind({})
buttonAnswer.args = {
	text: '#SOY STARTUP',
	txtColor: 'white',
	bgColor: '#8224e3',
}
