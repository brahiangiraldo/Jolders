import { ComponentMeta, ComponentStory } from "@storybook/react";
import SetInterval from "./SetInterval";

export default {
  title: 'Components/Organism/SetInterval',
  component: SetInterval,
} as ComponentMeta<typeof SetInterval>;

const component: ComponentStory<typeof SetInterval> = (args) => <SetInterval {...args} />;
export const setInterval = component.bind({});
setInterval.args = {
  day: 23,
  hour: 10,
  minute: 30,
};
