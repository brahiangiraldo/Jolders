import { ComponentMeta, ComponentStory } from '@storybook/react'
import PersonIntro from './PersonIntro'

export default {
	title: 'App/Home/Presentation/Molecules/PersonIntro',
	component: PersonIntro
} as ComponentMeta<typeof PersonIntro>

const component: ComponentStory<typeof PersonIntro> = (...args) => <PersonIntro  />
export const personIntro = component.bind({})
