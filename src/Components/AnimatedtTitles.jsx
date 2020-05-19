import React from 'react'
import Typed from 'react-typed';

const AnimatedTitles = () => {
    return(
        <div style = {{color: 'purple', fontSize: 20, display: 'flex', alignItems: 'center', marginTop: '-50px'}}>
            <p style= {{color: 'black', padding: 4}}>#</p>
            <Typed
                strings={['Mobile Application', 
                'REST API',
                'Web Application', 
                ]}
                typeSpeed={40}
                loop
            />
            <p style= {{color: 'black', padding: 4}}>Developer</p>
        </div>
    )
}

export default AnimatedTitles