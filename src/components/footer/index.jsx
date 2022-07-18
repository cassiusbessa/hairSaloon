import React from 'react';
import style from './style.scss';
import nameSaloon from '../../images/sulaTopHair/profile.png';
import logo from '../../images/sulaTopHair/logo.png'


function Footer() {
	return (
		<footer className='name'>
			<img src={logo} alt= 'Logo da Sula' />			
		</footer>
	);
}

export default Footer;