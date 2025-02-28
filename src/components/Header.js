import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      background: 'var(--color-light)', 
      padding: '20px 0', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold' }}>
          <span style={{ color: 'var(--color-primary)' }}>Public</span>
          <span style={{ color: 'var(--color-secondary)' }}>Sphere</span>
        </div>
        <nav>
          <button style={{ 
            background: 'var(--color-secondary)', 
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Coming Soon
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;