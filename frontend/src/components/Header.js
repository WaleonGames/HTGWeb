// src/components/Header.js
import React from 'react';
import Very from '../components/Verification'

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <h1>HTG - Twój Świat Serwerów Minecraft!</h1>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
          <li><a href="/">Home</a></li>
          <li><a href="/minecraft/">Server Minecraft</a></li>
          <Very />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
