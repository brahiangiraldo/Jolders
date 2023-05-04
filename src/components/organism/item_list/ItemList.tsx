import React from 'react'
import { ItemListProps } from './ItemListProps'
import './itemList.scss'

const ItemList = ({ items }: ItemListProps) => {
	return (
		<section className="container-map">
			{items.map((item) => (
				<a key={item.text} href={item.redirecTo}>
					{item.text}
				</a>
			))}
		</section>
	)
}

export default ItemList
