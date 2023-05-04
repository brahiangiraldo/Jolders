import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconStartUp from './IconStartUp'





export default {
  title: 'Components/Atoms/IconStartUp',
  component: IconStartUp
} as ComponentMeta<typeof IconStartUp>

const component: ComponentStory<typeof IconStartUp> = (args) => <IconStartUp { ...args } />
export const iconStartUp = component.bind({})
iconStartUp.args = {
  width: 89,
  height: 88,
  color:'blue',
}
