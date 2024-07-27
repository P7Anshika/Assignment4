import React from 'react';

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;
