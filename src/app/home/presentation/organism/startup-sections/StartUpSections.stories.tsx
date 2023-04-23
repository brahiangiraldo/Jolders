import { ComponentMeta, ComponentStory } from '@storybook/react'
import StartUpSections from './StartUpSections'


export default {
	title: 'App/Home/Organism/StartUpSections',
	component: StartUpSections 
} as ComponentMeta<typeof StartUpSections>

const component: ComponentStory<typeof StartUpSections> = (...args) => <StartUpSections  />
export const startUpSections = component.bind({})