import * as React from 'react';

const Nav = () => {
  return (
    <nav
      style={{
        background: '#7b1fa2',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
    >
      Hello from the Remote React App hosted at localhost:3003
    </nav>
  );
};

export default Nav;
