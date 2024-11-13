import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Minecraft from './pages/Minecraft'
import './index.css'
import NotFound from './pages/NotFound';
import VerificationResult from './pages/VerificationResult';
import DiscordBot from './pages/DiscordBot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/minecraft' element={<Minecraft />} />
        <Route path='/oauth2/callback' element={<VerificationResult />} />
        <Route path='/discord-bot' element={<DiscordBot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
