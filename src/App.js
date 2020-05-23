import React from 'react';
import Header from './Components/Header'
import HeaderFront from './Components/HeaderFront'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import CodeBlock from './Components/CodeSnippet'
import Blog from './Components/Blog'

import './App.css';

function App() {
  return (
    <div>
      <Header />
        <HeaderFront />
        <Blog />
        <Projects />
      <Footer />
    </div>
  );
}

export default App;
