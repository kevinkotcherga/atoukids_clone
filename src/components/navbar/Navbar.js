import React from 'react';
import './navbar.scss';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbarContainer">
				<div className="navbarLeft">
					<ul>
						<li className="navbarItem">Services et tarifs</li>
						<li
							className="navbarItem"
							style={{
								backgroundColor: '#FFB100',
								boxShadow: '0px 2px 6px 3px rgb(255 177 0 / 10%)',
							}}
						>
							Annuaire
						</li>
						<li className="navbarItem">atou'MAG</li>
						<li
							className="navbarItem"
							style={{
								backgroundColor: '#FFB100',
								boxShadow: '0px 2px 6px 3px rgb(255 177 0 / 10%)',
							}}
						>
							Ateliers
						</li>
						<li className="navbarItem">atou'LIVRES</li>
						<li className="navbarItem">A propos</li>
					</ul>
				</div>
				<div className="navbarRight">
					<ul>
						<li
							className="navbarItem"
							style={{
								backgroundColor: '#000',
								color: '#fff',
							}}
						>
							Pro ?
						</li>
						<li
							className="navbarItem"
							style={{
								backgroundColor: '#000',
								color: '#fff',
							}}
						>
							Famille ?
						</li>
						<li
							className="navbarItem"
							style={{
								backgroundColor: '#00D3B7',
							}}
						>
							Se connecter
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
