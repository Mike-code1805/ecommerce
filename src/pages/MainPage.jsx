import React from 'react';
import { Cards, Navbar, Slider } from '../components';
import '../styles/MainPage.css';

export const MainPage = () => {
  return (
    <div className='main'>
      <Cards />
      <Slider />
    </div>
  );
};
