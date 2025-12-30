import React, {StrictMode} from 'react';
import ReactGA from 'react-ga'
import Navigation from './Components/Navigation'
import './Styles/base.scss'

// Initialize GA at module level so it's ready before any pageview calls
ReactGA.initialize("G-5W33THPW7Y")

function App() {
  return (
      <StrictMode>
        <Navigation /> 
      </StrictMode>
  );
}

export default App;
