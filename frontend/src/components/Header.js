// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <h1>Witaj na stronie weryfikacji!</h1>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
          <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/verify" style={{ color: '#fff', textDecoration: 'none' }}>Weryfikacja</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
