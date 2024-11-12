// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Zamiast 'react-dom', używamy 'react-dom/client' w React 18
import App from './App';

// Renderowanie aplikacji w elemencie 'root' w index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
