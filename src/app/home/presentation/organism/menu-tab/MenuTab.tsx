import React, { useState } from 'react';
import IconsFactory from '@/components/atoms/__factory__/IconsFactory';
import './menuTab.scss';
import { ItemMenuTab, MenuTabProps } from './MenuTabProps';


const MenuTab = ({ items }: MenuTabProps) => {
 const [activeIcon, setActiveIcon] = useState<string | null>(null);


 const handleClick = (item: ItemMenuTab) => {
   if (activeIcon === item.iconDefault) {
     setActiveIcon(item.iconActive);
   } else {
     setActiveIcon(item.iconDefault);
   }
   item.onClick();
 };


 return (
   <article className="mobile-menu-bar">
     {items.map((item) => (
       <section
         key={item.text}
         onClick={() => handleClick(item)}
         className={activeIcon === item.iconDefault ? 'menu-item active' : 'menu-item'}
       >
         <IconsFactory
           name={activeIcon === item.iconDefault ? item.iconDefault : item.iconActive}
           width={90}
           height={90}
           color="#ad00ed"
         />
         <span>{item.text}</span>
       </section>
     ))}
   </article>
 );
};


export default MenuTab;

