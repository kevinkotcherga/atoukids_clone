import React from 'react';
import './form.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const Form = () => {
	return (
		<form>
			<div className="formContainerInput">
				<div className="containerSelect">
					<div className="containerLabel">
						<label>Pour qui ?</label>
						<select>
							<option value="default">Sélectionner...</option>
							<option>Femme enceinte et futurs parents</option>
							<option>Parents</option>
							<option>Bébés (moins de 2ans)</option>
							<option>Enfants et adolescents</option>
							<option>Enfants et adolescents en situation de handicap</option>
							<option>Lycéens et étudiants</option>
						</select>
					</div>
					<div className="searchButton">
						<AiOutlineSearch
							size={20}
							color={'white'}
							style={{ marginRight: '10px' }}
						/>
						<span className="submit">Je trouve</span>
					</div>
				</div>
				<div className="containerInput">
					<div className="container">
						<input
							className="postalCode"
							type="text"
							placeholder="Entrez le code postal (00000 si hors France)"
						/>
						<img
							src="https://www.atoukids.fr/front-end/assets/img/icons/ak-iconLocation.svg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Form;
