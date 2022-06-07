import React from 'react';
import './form.scss';

const Form = () => {
	return (
		<form>
			<div className="formContainerInput">
				<div className="containerSelect">
					<div className="containerLabel">
						<label>Pour qui ?</label>
						<select>
							<option value="default">Sélectionner...</option>
							<option>Parents</option>
						</select>
					</div>
					<input className="submit" type="submit" value="Je trouve" />
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
