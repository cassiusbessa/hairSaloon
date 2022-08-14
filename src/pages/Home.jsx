import React from 'react';
import Header from '../components/Header';
import IntroPage from '../components/IntroPage';
import NamePage from '../components/NamePage';
import Carrousel from '../components/Carroussel';
import Footer from '../components/Footer';
import Calender from '../components/Calender';

function Home() {
  return (
    <div>
      {/* <Header />
      <NamePage />
      <IntroPage />
      <Carrousel />
      <Footer /> */}
      <Calender />
    </div>
  );
}

export default Home;