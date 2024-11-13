// src/components/HeaderBot.js
import React from 'react';

const HeaderBot = () => {
  return (
    <header className="header-bot">
      <img src="/banerdiscord.png" alt="Discord Bot" className="header-bot-img" />
      <div className="header-bot-content">
        <h1>Nasz Discord Bot</h1>
        <p>Automatyzuj, weryfikuj i baw się dobrze z naszym botem!</p>
      </div>
    </header>
  );
};

export default HeaderBot;
