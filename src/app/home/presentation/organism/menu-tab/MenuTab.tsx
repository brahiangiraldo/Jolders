
import { useState } from 'react';
import IconStartUp from "@/components/atoms/icon_startUp/IconStartUp";
import './menuTab.scss';

import IconInversor from '@/components/atoms/icon_inversores/IconInversor';
import IconHome from '@/components/atoms/icon_home/IconHome';

const MenuTab = () => {
  const [startupBackgroundColor, setStartupBackgroundColor] = useState('transparent');
  const [inversorBackgroundColor, setInversorBackgroundColor] = useState('transparent');
  const [HomeBackgroundColor, setHomeBackgroundColor] = useState('transparent');
  
  
  const handleStartupClick = () => {
    setStartupBackgroundColor('#ad00ed'); // Cambia el color de fondo del icono de startup a morado al hacer click
  };

  const handleInversorClick = () => {
    setInversorBackgroundColor('#ad00ed'); 
  };

  const handleHomeClick = () => {
    setHomeBackgroundColor('#ad00ed'); 
  };

  return (
    <article className="mobile-menu-bar">
      <section className="content-icon">
        {/* <IconStartUp 
          width={70} 
          height={70} 
          fillColor={startupBackgroundColor}
          outlineColor="white"
          onClick={handleStartupClick}
        /> */}
      </section>
    
      <section className="content-icon">
        <IconInversor 
          width={70} 
          height={70} 
          fillColor={inversorBackgroundColor}
          outlineColor="white"
          onClick={handleInversorClick}
        />
      </section>

      <section className="content-icon">
        <IconHome
          width={70} 
          height={70} 
          fillColor={HomeBackgroundColor}
          outlineColor="white"
          onClick={handleHomeClick}
        />
      </section>
      
    </article>
  );
};

export default MenuTab;
