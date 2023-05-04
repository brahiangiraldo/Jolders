import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconAccount from './IconAccount'



export default {
  title: 'Components/Atoms/IconAccount',
  component: IconAccount
} as ComponentMeta<typeof  IconAccount>

const component: ComponentStory<typeof  IconAccount> = (args) => < IconAccount { ...args } />
export const  iconAccount = component.bind({})
iconAccount.args = {
  width: 89,
  height: 88,
  color:'blue',
}
