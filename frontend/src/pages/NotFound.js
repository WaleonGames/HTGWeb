// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>Błąd 404 - Strona nie została znaleziona</h1>
      <p>Przepraszamy, ale strona, której szukasz, nie istnieje.</p>
      <Link to="/">Wróć na stronę główną</Link>
    </div>
  );
}

export default NotFound;
