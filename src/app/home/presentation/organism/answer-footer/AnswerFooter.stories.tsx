import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnswerFooter from './AnswerFooter';

export default {
	title: 'App/Home/Organism/AnswerFooter',
	component: AnswerFooter
} as ComponentMeta<typeof AnswerFooter>

const component: ComponentStory<typeof AnswerFooter> = (args) => <AnswerFooter />
export const answerFooter= component.bind({})