import React from 'react'
import Typed from 'react-typed';

const AnimatedTitles = () => {
    return(
        <div style = {{color: 'rgb(230, 57, 70)', fontSize: 20, display: 'flex'}}>
            <p style= {{color: 'white'}}>#</p>
            <Typed
                strings={['iOS Application', 
                'Spring Boot',
                'Java',
                'Python', 
                'FullStack' 
                ]}
                typeSpeed={40}
                loop
            />
            
            <p style= {{color: 'white'}}>Developer</p>
        </div>
    )
}

export default AnimatedTitles