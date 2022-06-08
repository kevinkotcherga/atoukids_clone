import React from 'react';
import Form from '../form/Form';
import FormMoreOptions from '../formMoreOptions/FormMoreOptions';
import MoreOptions from '../moreOptions/MoreOptions';
import './search.scss';
import Arrow from '../../img/downCurvedArrow.png';

const Search = () => {
	return (
		<div className="search">
			<img className="arrowDown" src={Arrow} alt="" />
			<h2>Trouvez le professionnel qui vous correspond</h2>
			<Form />
			<FormMoreOptions />
			<MoreOptions />
		</div>
	);
};

export default Search;
