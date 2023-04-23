import { ComponentMeta, ComponentStory } from '@storybook/react'
import PersonIntroTwo from './PersonIntroTwo'

export default {
	title: 'App/Home/Presentation/Molecules/PersonIntroTwo',
	component: PersonIntroTwo
} as ComponentMeta<typeof PersonIntroTwo>

const component: ComponentStory<typeof PersonIntroTwo> = (...args) => <PersonIntroTwo  />
export const personIntroTwo = component.bind({})
