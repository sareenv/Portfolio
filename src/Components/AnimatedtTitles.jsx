import React from 'react'
import Typed from 'react-typed';

const AnimatedTitles = () => {
    return(
        <div style = {{color: '#e43f5a', fontSize: 20, display: 'flex'}}>
            <p style= {{color: 'white'}}>#</p>
            <Typed
                strings={['Mobile Application', 
                'REST API',
                'Web Application', 
                ]}
                typeSpeed={40}
                loop
            />
            
            <p style= {{color: 'white'}}>Developer</p>
        </div>
    )
}

export default AnimatedTitles