// src/components/DiscordSupport.js
import React from 'react';

const DiscordSupport = () => {
  return (
    <section className="discord-support">
      <div className="discord-content">
        <h2>Dołącz do naszego wsparcia na Discordzie!</h2>
        <p>Masz pytania? Potrzebujesz pomocy? Skontaktuj się z nami na Discordzie.</p>
        <a href="https://discord.gg/Wrt6jyhJxB" target="_blank" rel="noopener noreferrer">
          <button className="discord-button">Dołącz do Discorda</button>
        </a>
      </div>
    </section>
  );
};

export default DiscordSupport;
