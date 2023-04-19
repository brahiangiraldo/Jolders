import Image from 'next/image'
import './menu_barjolders.scss'
import Jolder from '@/assets/jolder.png'



const MenuBarJolders = () => {
	const itemOptions = [
		{
			text: 'Home',
			redirecTo: '#'
		},
		{
			text: '#SOY STARTUP',
			redirecTo: '#'
		},
		{
			text: '#SOY INVERSOR',
			redirecTo: '#'
		},
		{
			text: 'Mercado',
			redirecTo: '#'
		},
		{
			text: 'Cuenta',
			redirecTo: '#'
		}
	]

	return (
		<section className='menuBarjolders'>
			<section className='logoMenuBarjolders'>
				<Image src={ Jolder } alt='Logo jolders'/>
			</section>
			<section className='optionsMenuBarjolders'>
				{ itemOptions.map((item) => <a href={ item.redirecTo }>{ item.text }</a>) }
			</section>
		</section>
	)
}

export default MenuBarJolders