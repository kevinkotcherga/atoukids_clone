import React from 'react';
import './formMoreOptions.scss';
import { IoIosArrowDown } from 'react-icons/io';

const FormMoreOptions = () => {
	return (
		<div className="formMoreOptions">
			<div className="container">
				<p>Besoin d'affiner vos critères de recherche ?</p>
				<ul>
					<li>
						<span>Pour quoi ?</span>
						<IoIosArrowDown style={{ marginLeft: '5px' }} />
					</li>
					<li>
						<span>Disponibilité ?</span>
						<IoIosArrowDown style={{ marginLeft: '5px' }} />
					</li>
					<li>
						<span>Lieu ?</span>
						<IoIosArrowDown style={{ marginLeft: '5px' }} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FormMoreOptions;
