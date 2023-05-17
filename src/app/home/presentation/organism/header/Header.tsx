// import Jolder from '@/assets/jolder.png';
// import MenuBarJolders from '@/components/organism/menu_bar/MenuBarjolders';
// import Image from 'next/image';
// import { HeaderProps } from './HeaderProps';

// const Header = ({ id }: HeaderProps) => {
//   return (
//     <section className="headerts" id={id}>
//       <MenuBarJolders />
//       <section className="maints">
//         <Image src={Jolder} alt="Logo jolders" />

//         <strong className="fonts">
//           Invierte sin barreras desde el sofá de tu casa y consigue rendimientos con el próximo unicornio.
//         </strong>
//       </section>
//     </section>
//   );
// };

// export default Header;


import './header.scss'
import Jolder from '@/assets/jolder.png'
import MenuBarJolders from '@/components/organism/menu_bar/MenuBarjolders'
import Image from 'next/image'
import { HeaderProps } from './HeaderProps'


export const Header = ({ id }: HeaderProps) => {
  return (

	 <section className='headerts' id={id}>
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

export default Header;
