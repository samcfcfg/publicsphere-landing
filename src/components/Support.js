import React from 'react';

const Support = () => {
  return (
    <section id="support" style={{ 
      padding: '80px 0', 
      backgroundColor: 'var(--color-gray-light)' 
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          fontSize: '2.2rem',
          color: 'var(--color-text)'
        }}>
          Support PublicSphere
        </h2>
        <div style={{ 
          maxWidth: '800px', 
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '20px',
            lineHeight: '1.8' 
          }}>
            PublicSphere is an ambitious platform aiming to revolutionize how we share and verify information online.
            We're currently in development and looking for support from people who believe in our mission.
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '30px',
            lineHeight: '1.8' 
          }}>
            There are several ways you can help:
          </p>
          <ul style={{
            textAlign: 'left',
            marginBottom: '30px',
            paddingLeft: '20px'
          }}>
            <li style={{ 
              fontSize: '1.1rem', 
              marginBottom: '10px',
              lineHeight: '1.8' 
            }}>
              <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>Join Our Team</span> - 
              Help us build and shape the future of PublicSphere
            </li>
            <li style={{ 
              fontSize: '1.1rem', 
              marginBottom: '10px',
              lineHeight: '1.8' 
            }}>
              <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>Spread the word</span> 
              
            </li>
            <li style={{ 
              fontSize: '1.1rem', 
              marginBottom: '10px',
              lineHeight: '1.8' 
            }}>
              <span style={{ fontWeight: 'bold', color: 'var(--color-text)' }}>Contact Us</span> - 
              Please share your ideas or ask questions about the project
            </li>
          </ul>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '0',
            lineHeight: '1.8' 
          }}>
            For questions, please email{' '}
            <a 
              href="mailto:publicspherestaff@gmail.com" 
              style={{ 
                color: 'var(--color-primary)',
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}
            >
              publicspherestaff@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;