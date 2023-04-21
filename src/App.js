import React, {StrictMode, useEffect} from 'react';
import ReactGA from 'react-ga'
import Navigation from './Components/Navigation'
import './Styles/base.scss'

function App() {
  useEffect(() => {
    ReactGA.initialize("G-5W33THPW7Y")
    console.log("tested")
  }, [])

  return (
      <StrictMode>
        <Navigation /> 
      </StrictMode>
  );
}

export default App;
