import './header.scss'
import Jolder from '@/assets/jolder.png'
import MenuBarJolders from '@/components/organism/menu_bar/MenuBarjolders'
import Image from 'next/image'


export const Header = () => {
  return (

	 <section className='headerts'>
    <MenuBarJolders/>
    <section className='maints'> 
    <Image src={ Jolder } alt='Logo jolders'/>
    
    <strong className='fonts'>
    Invierte sin barreras desde el sofá de 
    tu casa y consigue rendimientos con el 
    próximo unicornio.
      </strong>
     </section>
    </section>

  )
}


