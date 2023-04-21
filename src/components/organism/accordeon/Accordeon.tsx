'use client'
import React, { useState } from 'react';
import { AccordeonProps } from './AccordeonProps';
import './accordeon.scss'

const Accordeon = ({ title, body }: AccordeonProps) => {
  const [isOpen, setIsOpen] = useState <boolean>();
  

  const handleClick = () => { 
	setIsOpen(!isOpen)
  };
  return (
    <div className="faq-container">
      <div className="faq-section">
        <h4 className="title-onclik" onClick={handleClick}>
          {title}
		  <hr className='hr'/>
        </h4>
        <div className={
		isOpen === undefined ? "initbody" 
		: isOpen ? `openbody` : `closebody`}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordeon;



