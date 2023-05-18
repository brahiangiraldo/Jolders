'use client'
// import { Header } from './presentation/organism/header/Header';
import './home.scss'
import PersonIntro from './presentation/molecules/personintro/PersonIntro'
import { Investor } from './presentation/organism/investor/Investor'
import StartUpSections from './presentation/organism/startup-sections/StartUpSections'
import PersonIntroTwo from './presentation/molecules/personintrotwo/PersonIntroTwo'
import ImputFolder from './presentation/organism/input-folder/ImputFolder'
import FaqComponent from './presentation/organism/faqcomponent/FaqComponent'
import Market from './presentation/organism/Market/Market'
import FooterJolders from './presentation/organism/footer/FooterJolders'
import EventStart from './presentation/organism/events-start/EventStart'
import MenuTab from '../../components/organism/menu-tab/MenuTab'
import { useEffect, useState } from 'react'
import { ItemMenuTab } from '../../components/organism/menu-tab/MenuTabProps'
import Header from './presentation/organism/header/Header'

const initItems: ItemMenuTab[] = [
	{
		iconDefault: 'IconHome',
		iconActive: 'IconHomeFill',
		text: 'IconHome',
		onClick: () => console.log('hola')
	},
	{
		iconDefault: 'IconStartUp',
		iconActive: 'IconStartUpFill',
		text: 'IconStartUp',
		onClick: () => console.log('hola')
	},
	{
		iconDefault: 'IconMarket',
		iconActive: 'IconMarketFill',
		text: 'IconMarket',
		onClick: () => console.log('hola')
	}
]

const Page = () => {
	const [items, setItems] = useState<ItemMenuTab[]>(initItems)

	useEffect(() => {}, [])

	return (
		<div className="container-login-page">
			<section>
				<Header id="header" /> {/* Home */}
			</section>
			<section className="section-global">
				<section>
					<Investor />
				</section>
				<PersonIntro />
				<StartUpSections id="StartUpSections" /> {/* StartUp */}
				<PersonIntroTwo />
				<ImputFolder />
				<section>
					<FaqComponent id="FaqComponent" /> {/* Inversor */}
				</section>
				<section>
					<Market id="Market" /> {/* Mercado */}
				</section>
				<EventStart
					image="https://jolders.com/wp-content/uploads/2023/02/4yfn.png"
					name="Javier"
				/>
				<FooterJolders
					image="https://jolders.com/wp-content/uploads/2023/03/jolders-logo-new.png"
					name="Jolders"
				/>
				<section className="position">
					<MenuTab items={items} />
				</section>
			</section>
		</div>
	)
}

export default Page
