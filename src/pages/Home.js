import React from 'react';
import Header from '../components/header/Header';
import Introduction from '../components/introduction/Introduction';
import Navbar from '../components/navbar/Navbar';
import Search from '../components/search/Search';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Search />
			<Introduction />
		</div>
	);
};

export default Home;
