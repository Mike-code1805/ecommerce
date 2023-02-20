import React from 'react';
import { Cards, Footer, Navbar, Slider } from '../components';
import '../styles/MainPage.css';

export const MainPage = () => {
  return (
    <div className='main'>
      <Navbar />
      <Slider />
      <Cards />
      <Footer />
    </div>
  );
};
