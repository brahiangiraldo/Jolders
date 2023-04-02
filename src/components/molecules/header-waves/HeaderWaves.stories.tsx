import { ComponentMeta, ComponentStory } from '@storybook/react'
import HeaderWaves from './HeaderWaves'

export default {
	title: 'Components/Molecules/HeaderWaves',
	component: HeaderWaves
} as ComponentMeta<typeof HeaderWaves>

const component: ComponentStory<typeof HeaderWaves> = (args) => (
	<HeaderWaves>
		<h1>Title</h1>
	</HeaderWaves>
)

export const headerWaves = component.bind({})
