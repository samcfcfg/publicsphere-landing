import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SourceExchange from './components/SourceExchange';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SourceExchange />
      <Features />

      <Footer />
    </div>
  );
}

export default App;