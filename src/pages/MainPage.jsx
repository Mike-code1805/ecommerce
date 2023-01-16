import React from 'react';
import { Cards, Footer, Slider } from '../components';
import '../styles/MainPage.css';

export const MainPage = () => {
  return (
    <div className='main'>
      <Slider />
      <Cards />
      <Footer />
    </div>
  );
};
