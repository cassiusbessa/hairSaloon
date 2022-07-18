import React from "react";
import style from './style.scss'
import logo from '../../images/sulaTopHair/logo.png'
import {IoLocationSharp, IoLogoWhatsapp} from 'react-icons/io5';

function Header() {
	console.log('oi,bb')
	return (
		<header>
			<img src={logo} alt= 'Logo da Sula' />			
			<div id="info">
				<h4 id="numero">
					<IoLogoWhatsapp id="zap"/>
					(21) 99385-8905
				</h4>
				<p>Nos contate para atendimento</p>
				<h4>
				  <IoLocationSharp id="local" />
					Atendimento a Domicílio
				</h4>
				<p>No conforto do seu lar</p>
			</div>
		</header>
	);
}

export default Header;