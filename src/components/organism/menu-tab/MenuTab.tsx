import React, { useState } from 'react';
import IconsFactory from '@/components/atoms/__factory__/IconsFactory';
import './menuTab.scss';
import { ItemMenuTab, MenuTabProps } from './MenuTabProps';

const MenuTab = ({ items }: MenuTabProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleClick = (item: ItemMenuTab) => {
    setActiveSection(item.text);

    switch (item.text) {
      case 'IconHome':
        window.location.href = '#header';
        break;
      case 'IconInversores':
        window.location.href = '#FaqComponent';
        break;
      case 'IconStartUp':
        window.location.href = '#StartUpSections';
        break;
      case 'IconMarket':
        window.location.href = '#Market';
        break;
      default:
        break;
    }
  };

  return (
    <article className="mobile-menu-bar">
      {items.map((item) => (
        <section
          key={item.text}
          onClick={() => handleClick(item)}
          className={activeSection === item.text ? 'menu-item active' : 'menu-item'}
        >
          <IconsFactory
            name={activeSection === item.text ? item.iconActive : item.iconDefault}
            width={35}
            height={35}
            color="#ad00ed"
          />
        </section>
      ))}
    </article>
  );
};

export default MenuTab;






























// import React, { useState } from 'react';
// import IconsFactory from '@/components/atoms/__factory__/IconsFactory';
// import './menuTab.scss';
// import { ItemMenuTab, MenuTabProps } from './MenuTabProps';


// const MenuTab = ({ items }: MenuTabProps) => {
//  const [activeIcon, setActiveIcon] = useState<string | null>(null);


//  const handleClick = (item: ItemMenuTab) => {
//    if (activeIcon === item.iconDefault) {
//      setActiveIcon(item.iconActive);
//    } else {
//      setActiveIcon(item.iconDefault);
//    }
//    item.onClick();
//  };


//  return (
//    <article className="mobile-menu-bar">
//      {items.map((item) => (
//        <section
//          key={item.text}
//          onClick={() => handleClick(item)}
//          className={activeIcon === item.iconDefault ? 'menu-item active' : 'menu-item'}
//        >
//          <IconsFactory
//            name={activeIcon === item.iconDefault ? item.iconDefault : item.iconActive}
//            width={35}
//            height={35}
//            color="#ad00ed"
//          />
//        </section>
//      ))}
//    </article>
//  );
// };


// export default MenuTab;

