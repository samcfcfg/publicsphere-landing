import React, { useState } from 'react';
import sourceExchangeImage from '../assets/sourceexchange-image.jpg';

const SourceExchange = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section style={{ 
      padding: '80px 0', 
      backgroundColor: 'white' 
    }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: '2.0rem',
          color: 'var(--color-text)'
        }}>
          Introducing <strong>SourceExchange</strong>: PublicSphere's first implementation
        </h2>
        
        {/* Overview Section */}
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          marginBottom: '30px'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '20px',
            color: 'var(--color-primary)'
          }}>
            Overview
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '20px',
            lineHeight: '1.8',
            color: 'var(--color-text)'
          }}>
            Digital journalism isn't just about writing anymore—it's about creating spaces for 
            meaningful conversation. In today's complex information landscape, traditional 
            reporting struggles to keep pace with rapidly evolving events. PublicSphere's 
            SourceExchange bridges this gap by empowering authors to create structured, 
            evidence-based discussions that extend naturally from their written work.
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8',
            color: 'var(--color-text)'
          }}>
            SourceExchange grounds journalism in verifiable truth by connecting readers directly 
            to sources and fostering transparent dialogue. Authors who embrace this platform 
            understand that openness to scrutiny and willingness to revise incorrect assertions 
            aren't just noble ideals—they're essential practices of responsible journalism in 
            the digital age.
          </p>
        </div>
        
        {/* Image Section - Same width as overview section but fixed height */}
        <div style={{
          width: '100%',
          marginBottom: '30px'
        }}>
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            overflow: 'hidden', // This ensures the image is cropped when it exceeds the container
            position: 'relative' // Needed for absolute positioning of text overlay
          }}>
            <img 
              src={sourceExchangeImage} 
              alt="SourceExchange Interface" 
              style={{ 
                width: '100%', // Make image full width
                height: '100%',
                objectFit: 'cover', // This will crop the top and bottom
                objectPosition: 'center', // Center the image
                borderRadius: '8px'
              }} 
            />
             {/* Text overlay */}
             <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '10%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '20px'
            }}>
              Example of the PublicSphere: SourceExchange Forums
            </div>
          </div>
        </div>
        
        {/* Function and Design Button */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px'
        }}>
          <button 
            onClick={() => setShowDetails(!showDetails)}
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
            Function and Design
            <span style={{
              display: 'inline-block',
              transform: showDetails ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </span>
          </button>
        </div>
        
        {/* Collapsible Function and Design Section */}
        <div style={{
          maxHeight: showDetails ? '2000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-in-out',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        }}>
          <div style={{ padding: '40px' }}>
            
            <div style={{ marginBottom: '20px' }}>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8',
                color: 'var(--color-text)'
              }}>
                PublicSphere hosts specialized discussions that are a natural extension of sources, 
                footnotes, and an author's deliberately designed discussions connected to an article. 
                In addition to "regular" forum structure, Publicsphere allows readers to add their own 
                sources as part of the discussion, structured to be commented on and referenced in 
                their own right.
              </p>
            </div>
            <div>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8',
                color: 'var(--color-text)',
                marginBottom: '15px'
              }}>
                Articles often have footnotes and sources. With news distrust statistically very high, 
                well-researched sources of information are an important way for readers to ensure that 
                an article is grounded in fact. PublicSphere deepens this interaction, hosting 
                specialized forums and reader discussions around the author's sources, giving readers 
                the tools to do their own thinking.
              </p>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8',
                color: 'var(--color-text)'
              }}>
                What's more, it can give skeptical readers the tools to change their minds. In 
                including reader forums to these sources, these diverse readers can educate each 
                other, disagree, and provide new sources and evidence that can heighten their 
                understanding, and potentially find a more nuanced conclusion together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourceExchange;