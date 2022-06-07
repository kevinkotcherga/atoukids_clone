import React from 'react';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Search from '../components/search/Search';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Search />
		</div>
	);
};

export default Home;
