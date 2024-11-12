// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import Links from '../components/Links';
import About from '../components/About';
import DiscordSupport from '../components/DiscordSupport';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Links />
      <About />
      <DiscordSupport />
      <Footer />
    </div>
  );
};

export default HomePage;
