// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Links from '../components/Links';
import About from '../components/About';
import DiscordSupport from '../components/DiscordSupport';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Links />
      <About />
      <DiscordSupport />
      <Footer />
    </div>
  );
}

export default Home;