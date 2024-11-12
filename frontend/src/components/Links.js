// src/components/Links.js
import React from 'react';

const Links = () => {
  return (
    <section style={{ padding: '40px 20px', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
      <div style={{ backgroundColor: '#28a745', color: '#fff', padding: '30px', borderRadius: '8px', width: '200px' }}>
        <h3>Minecraft</h3>
        <p>Dołącz do naszego serwera Minecraft!</p>
        <a href="/minecraft" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Zagraj teraz</a>
      </div>
      <div style={{ backgroundColor: '#7289da', color: '#fff', padding: '30px', borderRadius: '8px', width: '200px' }}>
        <h3>Discord Bot</h3>
        <p>Sprawdź naszego bota Discord!</p>
        <a href="/discord-bot" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Dowiedz się więcej</a>
      </div>
    </section>
  );
};

export default Links;
