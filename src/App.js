import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Support />
      <Footer />
    </div>
  );
}

export default App;