import React from 'react';

const About = () => {
  return (
    <section style={{ 
      padding: '100px 0', 
      backgroundColor: 'var(--color-background)' 
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
          About PublicSphere
        </h2>
        <div style={{ 
          maxWidth: '800px', 
          textAlign: 'left',
          padding: '0 20px'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '0px',
            lineHeight: '1.8',
            textIndent: '2em'
          }}>
            PublicSphere is designed to bring clarity to the underlying logical simplicity to complex ideas and data, to make them not only digestible to readers, but easy to work with, for people to synthesize their own ideas. It does this with our version of argument mapping, which is both simple and logically robust.
          </p>

          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '0px',
            lineHeight: '1.8',
            textIndent: '2em'
          }}>
            It all starts with the evidence. Users can submit sources of any kind to the website, which can be used as the foundational building block for arguments by all other users. These sources can be commented on and rated by users in an organic way to give context to the source. Sources can be cross-referenced dynamically, creating an even more sound foundation. From here, users can connect evidence to claims to support or contradict them. Sources can be dynamically connected and updated to make sure that any given claim has the latest information. If there is evidence for it, a counterclaim can be added, which may be supported by the same evidence that contradicts the first, or use an entirely new set of sources. From this simple framework for discourse, an explosion of possibilities arises.
          </p>
          
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '0px',
            lineHeight: '1.8',
            textIndent: '2em'
          }}>
            Once the argument map is done, you can post it, or use it as a starting place for a written paper that can be posted alongside it. Once posted, you can request an admin review to verify that the argument is basically sound, or request an open peer-review process from other users for rigorous feedback. Readers can request these too.
          </p>
          
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '0px',
            lineHeight: '1.8',
            textIndent: '2em'
          }}>
            As a reader, you can also give your take on each modular source, claim, or connection in the specific comments section, or just by a tentative confidence score system. For more nuanced takes on things, you can bring your own evidence to the table.
          </p>
          
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '30px',
            lineHeight: '1.8',
            textIndent: '2em'
          }}>
            The argument mapping framework is intuitive; it just makes explicit how all good news reporting and synthetic argumentation works. PublicSphere's innovation is to make this framework explicit and dynamic at all levels, democratizing the discourse so that finding the truth becomes collaborative, while keeping writers honest by putting the basis of their argument, the facts, at the forefront. Opening this process to broad participation will empower people with a pre-existing rigorous discourse to examine and contribute to, instead of being left to their own devices to critique media spin. With facts laid clean, sensationalism and crude bias are easy to spot.
          </p>
          <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          fontSize: '2.2rem',
          color: 'var(--color-text)'
        }}>
          Design Philosophy of PublicSphere
        </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '0px',
            lineHeight: '1.8',
            textIndent: '2em'
          }}>
            I designed PublicSphere using a first-principles approach, drawing inspiration from the philosophy of logic, and trying to extend the bounds of what a democratic internet can be. It is designed as a generalized framework to best facilitate rapid transfer of ideas and information in any domain of knowledge, and I hope it can be used as such. And while I think that this kind of collaborative media framework has a place in any interconnected society, the reason that I started working on PublicSphere is because the current "state-of-discourse" in news media is systematically counterproductive in ways that a common sense forum like PublicSphere counters. To list a few: (1) journalists are, as Harvard's Thomas Patterson says, "vulnerable to their sources" if they are not explicitly analyzed, leaving readers to be critical. (2) Social media as outlets for news do not promote information on the basis of soundness; they directly amplify posts that retain view-time or "likes", which in practice incentivize sensationalism, or worse. This is a downstream effect of commercialism in news, which affected TV and print news in a similar but perhaps less exaggerated way long before online news. (3) Undertakings in revisionist history that is still political can be labeled a "conspiracy theory", regardless of the presence of a conspiracy in that theory, and in a process of undue alienation, dismissed. (4) State-to-state disinformation campaigns are a perceived and real threat, which rely on this social media amplified sensationalism and subsequent division. (5) The well-documented personalized news phenomenon, or bubble effect, means that news media employ evidence cherry-picking and selective coverage in order to spin stories along party, identity or nationalist lines.
          </p>
          
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '0px',
            lineHeight: '1.8',
            textIndent: '2em'
          }}>
            These factors contribute to the notorious so-called state of discourse today. Candidly, our intelligence has been insulted by that discourse so much that the profound damage caused by these structural problems is too easily overlooked. These are very solvable problems. Democracy is designed around good-faith public deliberation, and sound information is the foundation.
          </p>

          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8',
            fontStyle: 'italic',
            color: 'var(--color-primary)',
            margin: '0px'
          }}>
            Democracy is designed around good-faith public deliberation, and sound information is the foundation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;