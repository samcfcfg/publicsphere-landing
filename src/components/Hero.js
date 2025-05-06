import React, { useState } from 'react';
import About from './About';

const Hero = () => {
  const [showAbout, setShowAbout] = useState(false);
  
  const scrollToSupport = () => {
    const supportElement = document.getElementById('support');
    if (supportElement) {
      supportElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section style={{
      padding: '120px 0 0 0',
      backgroundColor: 'var(--color-background)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Left Side */}
        <div style={{ 
          flex: '1',
          minWidth: '300px',
          paddingRight: '30px',
          marginBottom: '30px'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '60px',
            color: 'var(--color-text)' 
          }}>
            <span style={{ color: 'var(--color-primary)' }}>Public</span>
            <span style={{ color: 'var(--color-secondary)' }}>Sphere</span>
            {' '}is:
          </h1>
          <div style={{ marginTop: '25px' }}>
            <h2 style={{ 
              fontSize: '1.8rem', 
              fontWeight: '400',
              marginBottom: '30px',
            }}>
              A space for democratic discourse
            </h2>
            <h2 style={{ 
              fontSize: '1.8rem', 
              fontWeight: '400',
              marginBottom: '30px',
            }}>
              A social medium for facts
            </h2>
            <h2 style={{ 
              fontSize: '1.8rem', 
              fontWeight: '400',
              marginBottom: '15px',
            }}>
              {/*In development, and could use*/}{' '}
              <span 
                onClick={scrollToSupport}
                style={{ 
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                support
              </span>.
            </h2>
          </div>
        </div>
        
        {/* Right Side */}
        <div style={{ 
          flex: '1',
          minWidth: '300px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: 'var(--color-primary)',
              marginBottom: '10px'
            }}>
              Evidence-Based
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-text)' }}>
              Designed to bring clarity to complex ideas, making them digestible and easy to work with. Prioritizes factual accuracy over engagement metrics and sensationalism.
            </p>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: 'var(--color-primary)',
              marginBottom: '10px'
            }}>
              Logically Structured
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-text)' }}>
              Reveal the underlying simplicity in complex arguments through intuitive mapping. Countering misinformation with sound deliberation.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: 'var(--color-primary)',
              marginBottom: '10px'
            }}>
              Giving Space for Democratic Information
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-text)' }}>
              Voice on-the-ground perspectives, and place it within a larger context. 
            </p>
          </div>
        </div>
      </div>
      
      {/* How It Works button at the bottom */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        paddingBottom: '30px'
      }}>
        <button 
          onClick={() => setShowAbout(!showAbout)}
          style={{ 
            background: 'var(--color-primary)',
            color: 'white',
            padding: '12px 30px',
            fontSize: '1.1rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          How It Works
          <span style={{
            display: 'inline-block',
            transform: showAbout ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}>
            ▼
          </span>
        </button>
      </div>
      
      {/* Collapsible About section */}
      <div style={{
        maxHeight: showAbout ? '2000px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out',
        backgroundColor: 'var(--color-gray-light)'
      }}>
        <About />
      </div>
    </section>
  );
};

export default Hero;