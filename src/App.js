import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <ThemeSwitcher toggleTheme={() => setDarkMode(!darkMode)} />
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/settings">Settings</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
