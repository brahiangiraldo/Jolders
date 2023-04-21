import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconPorcent from './IconPorcent'

export default {
  title: 'Components/Atoms/IconPorcent',
  component: IconPorcent
} as ComponentMeta<typeof IconPorcent>

const component: ComponentStory<typeof IconPorcent> = (args) => <IconPorcent { ...args } />
export const iconPorcent = component.bind({})
iconPorcent.args = {
  width: 89,
  height: 88,
}
