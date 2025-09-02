import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Splash from './pages/SplashPage';
import Home from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<><Header /><Home /></>} />
      <Route path="/profile" element={<><Header /><ProfilePage /></>} />  // Dynamic
      <Route path="/projects" element={<><Header /><ProjectPage /></>} />  // Dynamic
    </Routes>
  </Router>
);

export default App;