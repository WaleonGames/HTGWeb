// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Możesz tu dodać style globalne
import App from './App';  // Importujemy główną aplikację
import { BrowserRouter as Router } from 'react-router-dom';  // Dodajemy Router dla routingu

// Renderowanie aplikacji do DOM
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') // Renderujemy aplikację w elemencie HTML o id "root"
);
