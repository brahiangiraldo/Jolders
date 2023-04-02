import { ComponentMeta, ComponentStory } from '@storybook/react'
import AnimateWaves from './AnimateWaves'

export default {
	title: 'Components/Atoms/AnimateWaves',
	component: AnimateWaves
} as ComponentMeta<typeof AnimateWaves>

const component: ComponentStory<typeof AnimateWaves> = (args) => (
	<AnimateWaves {...args} />
)

export const animateWaves = component.bind({})
animateWaves.args = {
	bgColor: '#21f419',
	colorTransparent_1: 'rgba(33,244,25,0.7)',
	colorTransparent_2: 'rgba(33,244,25,0.5)',
	colorTransparent_3: 'rgba(33,244,25,0.3)'
}
