import React from 'react';
import Header from '../components/header';
import IntroPage from '../components/introPage';
import NamePage from '../components/namePage';
import Carrousel from '../components/carroussel';
import Footer from './../components/footer';
function Home() {
	return (
		<>
			<Header />
			<NamePage />
			<IntroPage />
			<Carrousel />
			<Footer />
		</>
	);
}

export default Home;