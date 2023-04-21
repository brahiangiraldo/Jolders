import { ComponentMeta, ComponentStory } from '@storybook/react'
import FooterJolders from './FooterJolders'


export default {
	title: 'App/Home/Organism/FooterJolders',
	component: FooterJolders
} as ComponentMeta<typeof FooterJolders>

const component: ComponentStory<typeof FooterJolders> = (args) => <FooterJolders { ...args }/>
export const footerJolders = component.bind({})
footerJolders.args = {
	image:"https://jolders.com/wp-content/uploads/2023/03/jolders-logo-new.png",
	name: "Jolders",
  }
  
