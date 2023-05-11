import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconsFactory from "./IconsFactory";

export default{
	title: 'Components/Atoms/Icons/IconsFactory',
	component: IconsFactory
} as ComponentMeta<typeof IconsFactory>

const component: ComponentStory<typeof IconsFactory> = (args) => <IconsFactory {...args}/>

export const iconsFactory = component.bind({})
iconsFactory.args = {
	width: 100,
	height: 100,
	color: 'purple',
	name: 'IconStartUp'
}