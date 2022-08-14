import React from 'react';
import './style.scss';
import logo from '../../images/sulaTopHair/logo.png'
import { BsInstagram } from 'react-icons/bs';
import { IoLogoTiktok } from 'react-icons/io5';


function Footer() {
  return (
    <footer className='name footer-name'>
      <div className='footer-content footer-logo'>
        <img src={logo} alt= 'Logo da Sula' />
      </div>
      <div className='footer-content'>
        <BsInstagram />
        (21) 99385-8905
        <IoLogoTiktok />
      </div>
      <div className='footer-content footer-copy'>
        <p><span>&copy;Anderson Rodrigues,</span> <span>Cássius Bessa e</span> <span>Jhony Altoé</span></p>
      </div>
    </footer>
  );
}

export default Footer;