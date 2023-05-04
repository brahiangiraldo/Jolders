import React from 'react'
import './market.scss'
import IconRocket from '@/components/atoms/icon_rocket/IconRocket'
import ComponentMarket from '@/components/molecules/component-Market/ComponentMarket'
import { Markets } from './Data'

const Market = () => {
	return (
		<section className="section-Rocket">
			<div className="Title-Market">Mercado Secundario de participaciones</div>

			<div className="IconRocket">
				<IconRocket width={70} height={70} />
			</div>

			<div className="empowerment">
				El empoderamiento del inversor.💪 Tu decides cuando vender.🤑
			</div>

			<section className="grid-icon">
				{Markets.map((item) => (
					<ComponentMarket
						key={item.title2}
						title2={item.title2}
						body2={item.body2}
						icon={item.icon}
					/>
				))}
			</section>
		</section>
	)
}

export default Market
