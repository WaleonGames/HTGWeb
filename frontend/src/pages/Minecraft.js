// src/pages/Minecraft.js
import React from 'react';
import Header from '../components/Header';
import HeaderMinecraft from '../components/HeaderMinecraft';
import AboutMinecraft from '../components/AboutMinecraft';
import DiscordSupport from '../components/DiscordSupport';
import Footer from '../components/Footer';

function Minecraft() {
  return (
    <div>
      <Header />
      <HeaderMinecraft />
      <AboutMinecraft />
      <DiscordSupport />
      <Footer />
    </div>
  );
}

export default Minecraft;
