
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ButtonQuestions from './ButtonQuestions'



export default {
	title: 'Components/molecules/ButtonQuestions',
	component: ButtonQuestions
} as ComponentMeta<typeof ButtonQuestions>

const component: ComponentStory<typeof ButtonQuestions> = (args) => <ButtonQuestions { ...args } />
export const button = component.bind({})
button.args = {
	text: '#SOY STARTUP',
	txtColor: 'white',
	bgColor: '#8224e3',
}
