import React, {StrictMode} from 'react';
import ReactGA from 'react-ga'
import Navigation from './components/Navigation'
import Seasonal from './components/seasonal/Seasonal'
import './styles/base.scss'

// Initialize GA at module level so it's ready before any pageview calls
ReactGA.initialize("G-5W33THPW7Y")

function App() {
  return (
      <StrictMode>
        <Seasonal />
        <Navigation />
      </StrictMode>
  );
}

export default App;
