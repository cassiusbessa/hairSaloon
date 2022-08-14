import React from "react";
import './style.scss'
import logo from '../../images/sulaTopHair/logo.png'
import { IoLocationSharp, IoLogoWhatsapp } from 'react-icons/io5';

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt= 'Logo da Sula' />
        <div id="info">
          <div>
            <h4 id="numero">
              <IoLogoWhatsapp id="zap"/>
              (21) 99385-8905
            </h4>
            <p>Nos contate para atendimento</p>
          </div>
          <div>
            <h4>
              <IoLocationSharp id="local" />
              Atendimento a Domicílio
            </h4>
            <p>No conforto do seu lar</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;