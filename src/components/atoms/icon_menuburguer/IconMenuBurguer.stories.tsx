import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconMenuBurguer from './IconMenuBurguer'

export default {
  title: 'Components/Atoms/IconMenuBurguer',
  component: IconMenuBurguer
} as ComponentMeta<typeof IconMenuBurguer>

const component: ComponentStory<typeof IconMenuBurguer> = (args) => <IconMenuBurguer { ...args } />
export const iconMenuBurguer = component.bind({})
iconMenuBurguer.args = {
  width: 89,
  height: 88,
  color:"#ad00ed"
}
