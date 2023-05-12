import React from 'react';
import IconsFactory from '@/components/atoms/__factory__/IconsFactory';
import './menuTab.scss';
import { ItemMenuTab, MenuTabProps } from './MenuTabProps';


const MenuTab = ({ items }: MenuTabProps) => {
 const handleClick = (item: ItemMenuTab) => {
   item.onClick();
 };


 return (
   <article className="mobile-menu-bar">
     {items.map((item) => (
       <section key={item.text} onClick={() => handleClick(item)}>
         <IconsFactory name={item.iconDefault} width={90} height={90} color="#ad00ed"/>
         <span>{item.text}</span>
       </section>
     ))}
   </article>
 );
};


export default MenuTab;