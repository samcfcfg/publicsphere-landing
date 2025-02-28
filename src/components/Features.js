import React from 'react';

const Features = () => {
  return (
    <section style={{ 
      padding: '80px 0', 
      backgroundColor: 'var(--color-gray-light)' 
    }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: '2.2rem',
          color: 'var(--color-text)'
        }}>
          More About PublicSphere
        </h2>
        
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          marginBottom: '30px'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '20px',
            lineHeight: '1.8',
            color: 'var(--color-text)'
          }}>
            PublicSphere is a social medium for facts. It is designed to bring clarity and reveal the underlying logical simplicity to extremely complex ideas and data, to make them not only digestible to readers, but easy to work with, for people to synthesize their own ideas. It does this with our version of argument mapping, which is both simple and logically robust.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '20px',
              color: 'var(--color-primary)'
            }}>
              A structured core and room for creativity
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--color-text)'
            }}>
              Publicsphere's discourse formatting is highly functional for quick and clear communication of ideas. 
              The somewhat unique benefits include modularity to reduce redundancy in research, and support for mathematical and logical language. 
              The site will also include less-structured components like essays, papers and traditional forums posts. 
              While people who post will be expected to maintain rigor, readers can opt for less formal participation.  
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '20px',
              color: 'var(--color-primary)'
            }}>
              User Review
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--color-text)'
            }}>
              Like scientific theories, articles here will be a standing challenge to be disproven. As a reader, you can give your take on each modular source, claim, or connection in the specific comments section, or just by a tentative confidence score system. For more nuanced takes on things, you can bring your own evidence to the table.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '20px',
              color: 'var(--color-primary)'
            }}>
              Verificaiton Process
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--color-text)'
            }}>
              As the base of information on the site grows, it will begin to act as a large database of modular claims and sources for others to use, and a reosurce for all users. 
              In order for sources and facts to become better established, users will be able to request admin-review or peer-review for basic validation or mor robust factchecking respectively. 
              This is an important step in generating a shared knowledge base, and while the framework for this process is being built, the scalability depends on the level of participation. 
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;