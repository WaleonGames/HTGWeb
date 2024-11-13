// src/components/Links.js
import React from 'react';

const Links = () => {
  return (
    <section className="links-section">
      <div className="link-card minecraft">
        <h3>Minecraft</h3>
        <p>Dołącz do naszego serwera Minecraft!</p>
        <a href="/minecraft" className="link-button">Zagraj teraz</a>
      </div>
      <div className="link-card discord">
        <h3>Discord Bot</h3>
        <p>Sprawdź naszego bota Discord!</p>
        <a href="/discord-bot" className="link-button">Dowiedz się więcej</a>
      </div>
    </section>
  );
};

export default Links;
