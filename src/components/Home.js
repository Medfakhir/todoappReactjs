import React from 'react';
import Header from './Header';
import Card from './Card';
import Prices from './Prices';
import Footer from './Footer';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <Header />
      <Card />
      <Element name="prices">
        <Prices />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
