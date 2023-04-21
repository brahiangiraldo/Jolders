import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconSure from './IconSure'


export default {
  title: 'Components/Atoms/IconSure',
  component: IconSure
} as ComponentMeta<typeof IconSure>

const component: ComponentStory<typeof IconSure> = (args) => <IconSure { ...args } />
export const iconSure = component.bind({})
iconSure.args = {
  width: 89,
  height: 88,
}
