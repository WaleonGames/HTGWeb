// src/components/HeaderMinecraft.js
import React from 'react';

function HeaderMinecraft() {
  return (
    <header className="header-minecraft">
      <img src="/baner.png" alt="Minecraft Banner" />
      <nav>
        <ul>
          <li><a href="/minecraft/aktualnoscie">Najnowsze aktualności</a></li>
          <li><a href="/minecraft/kadr">Kadr Serwerowy</a></li>
          <li><a href="/minecraft#QiA">Q&A</a></li>
          <li><a href="/minecraft#join-in-server">Jak dołączyć</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMinecraft;
