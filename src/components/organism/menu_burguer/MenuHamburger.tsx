import React, { useState } from 'react';
import Image from 'next/image';
import Jolder from '@/assets/jolder.png';
import './menuHamburger.scss';
import HamburgerIcon from '../../../assets/HamburgerIcon.png';

interface MenuHamburgerProps {
  menuItems: MenuItem[];
}

const MenuHamburger: React.FC<MenuHamburgerProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menuHamburger">
      <div className="menuHamburger__logo">
        <Image src={Jolder} alt="Logo jolders" />
      </div>
      <div className="menuHamburger__hamburger" onClick={toggleMenu}>
        <Image src={HamburgerIcon} alt="Hamburger icon" />
      </div>
      <ul
        className={`menuHamburger__options ${
          isOpen ? 'menuHamburger__options--open' : ''
        }`}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.redirectTo}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuHamburger;
