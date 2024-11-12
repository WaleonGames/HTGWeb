// src/components/DiscordSupport.js
import React from 'react';

const DiscordSupport = () => {
  return (
    <section style={{ padding: '40px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <h2>Dołącz do naszego wsparcia na Discordzie!</h2>
      <p>Masz pytania? Potrzebujesz pomocy? Skontaktuj się z nami na Discordzie.</p>
      <a href="https://discord.gg/Wrt6jyhJxB" target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Dołącz do Discorda</button>
      </a>
    </section>
  );
};

export default DiscordSupport;
