// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'; // Nagłówek strony
import HomePage from './pages/HomePage'; // Strona główna
import VerificationForm from './components/VerificationForm'; // Strona weryfikacji

const App = () => {
  return (
    <Router>
      <Header /> {/* Nagłówek aplikacji */}
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} /> {/* Strona główna */}
          <Route path="/verify" component={VerificationForm} /> {/* Strona weryfikacji */}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
