
// ButtonInversores.tsx
import React from 'react';
import { ButtonInversoresProps } from './ButtonInversoresProps';
import './buttonInversores.scss';

const ButtonInversores = ({ text, txtColor, bgColor, searchIcon, cartIcon }: ButtonInversoresProps) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: txtColor,
  };

  return (
    <button className='buttonInversores'>
      <span role='img' aria-label='Lupa'>
        {searchIcon}
      </span>
      {text}
      <span role='img' aria-label='Carrito de compra'>
        {cartIcon}
      </span>
    </button>
  );
};

export default ButtonInversores;

