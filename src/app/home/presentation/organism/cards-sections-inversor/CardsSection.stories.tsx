import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardsSection from './CardsSection'

export default {
	title: 'App/Home/Organism/CardsSection',
	component: CardsSection
} as ComponentMeta<typeof CardsSection>

const component: ComponentStory<typeof CardsSection> = (...args) => <CardsSection/>
export const cardsSection = component.bind({})