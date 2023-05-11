import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconsFactory from "./IconsFactory";
import { icons } from "./icons";

export default{
	title: 'Components/Atoms/Icons/Collections',
	component: IconsFactory
} as ComponentMeta<typeof IconsFactory>

const component: ComponentStory<typeof IconsFactory> = (args) => (
<>
	{Object.values(icons).map((Icon)=><Icon {...args}/>)}
</>
)

export const collections = component.bind({})
collections.args = {
	width: 100,
	height: 100,
	color: 'purple',
	name: 'IconStartUp'
}

