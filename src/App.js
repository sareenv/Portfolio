import React from 'react';
import Header from './Components/Header'
import HeaderFront from './Components/HeaderFront'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <div>
      <Header />
        <HeaderFront />
        <Projects />
      <Footer />
    </div>
  );
}

export default App;
