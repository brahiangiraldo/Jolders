import { ComponentMeta, ComponentStory } from '@storybook/react'
import Cardfooter from './Cardfooter'


export default {
	title: 'App/Home/Startups/Molecules/Cardfooter',
	component: Cardfooter
} as ComponentMeta<typeof Cardfooter>

const component: ComponentStory<typeof Cardfooter> = (args) => <Cardfooter {...args}  />
export const cardfooter = component.bind({})
cardfooter.args = {
	daysRemain:55,
	investors:0,
    founded:0,
  }
