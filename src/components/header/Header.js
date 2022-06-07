import React from 'react';
import './header.scss';
import Logo from '../../img/ak-logo.svg';

const Header = () => {
	return (
		<div className="header">
			<div className="headerOverlay"></div>
			<div className="headerContainer">
				<div className="headerText">
					<div className="headerTextContainer">
						<img src={Logo} alt="" />
						<h4>
							Parents ravis, <span>enfants épanouis</span>
						</h4>
						<h1>
							La plateforme qui accompagne les parents à chaque étape de leur
							vie de famille.
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
