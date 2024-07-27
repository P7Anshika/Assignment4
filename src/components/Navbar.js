import React from 'react';

function Navbar({ toggleTheme }) {
  return (
    <nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;
