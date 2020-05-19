import React from 'react'
import Typed from 'react-typed';

const AnimatedTitles = () => {
    return(
        <div style = {{color: 'purple', fontSize: 20, display: 'flex', marginTop: '-30px'}}>
            <p style= {{color: 'black'}}>#</p>
            <Typed
                strings={['Mobile Application', 
                'REST API',
                'Web Application', 
                ]}
                typeSpeed={40}
                loop
            />
            
            <p style= {{color: 'black'}}>Developer</p>
        </div>
    )
}

export default AnimatedTitles