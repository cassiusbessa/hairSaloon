import React from 'react';
import './style.scss';
import nameSaloon from '../../images/sulaTopHair/profile.png';

function NamePage() {
	return (
		<div className='name'>
			<img id='logoName' src={nameSaloon} alt= 'nome do salão' />
		</div>
	);
}

export default NamePage;