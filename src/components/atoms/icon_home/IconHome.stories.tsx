import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconHome from './IconHome'



export default {
  title: 'Components/Atoms/IconHome',
  component: IconHome
} as ComponentMeta<typeof IconHome>

const component: ComponentStory<typeof IconHome> = (args) => <IconHome { ...args } />
export const iconHome = component.bind({})
iconHome.args = {
  width: 89,
  height: 88,
  color:'blue',
}
