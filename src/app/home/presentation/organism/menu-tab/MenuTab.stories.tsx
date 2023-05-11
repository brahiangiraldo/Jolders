import { ComponentMeta, ComponentStory } from "@storybook/react";
import MenuTab from "./MenuTab";

export default{
	title: 'App/Home/Organism/MenuTab',
	component: MenuTab
} as ComponentMeta<typeof MenuTab>

const component: ComponentStory<typeof MenuTab> = (args) => <MenuTab/>
export const menuTab = component.bind({})