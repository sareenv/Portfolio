import React from 'react';
import Navigation from './Components/Navigation'
import './Styles/base.scss'
import SafeArea from 'react-safe-area-component'

function App() {
  return (
    <SafeArea top>
      <Navigation /> 
    </SafeArea>
  );
}

export default App;
