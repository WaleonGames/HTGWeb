// src/pages/DiscordBotPage.js
import React from 'react';
import Header from '../components/Header'; // Uniwersalny header
import HeaderBot from '../components/HeaderBot'; // Dedykowany baner dla bota
import AboutDiscordBot from '../components/AboutDiscord'; // Sekcja o bocie
import DiscordSupport from '../components/DiscordSupport'; // Uniwersalne wsparcie przez Discord
import Footer from '../components/Footer'; // Uniwersalny footer

const DiscordBotPage = () => {
  return (
    <div>
      <Header />
      <HeaderBot />
      <AboutDiscordBot />
      <DiscordSupport />
      <Footer />
    </div>
  );
};

export default DiscordBotPage;
