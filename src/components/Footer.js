import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '40px 0', 
      backgroundColor: 'var(--color-dark)',
      color: 'var(--color-light)' 
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <div style={{ 
          marginBottom: '20px', 
          fontSize: '24px', 
          fontWeight: 'bold' 
        }}>
          <span style={{ color: 'var(--color-primary)' }}>Public</span>
          <span style={{ color: 'var(--color-secondary)' }}>Sphere</span>
        </div>
        <p style={{ 
          marginBottom: '20px', 
          textAlign: 'center' 
        }}>
          A social medium for facts. Coming soon.
        </p>
        <div style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} PublicSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;