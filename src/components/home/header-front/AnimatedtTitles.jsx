import React from 'react'
import Typed from 'react-typed';

const AnimatedTitles = () => {
    return(
        <div style = {{
                color: 'rgb(230, 57, 70)', 
                fontSize: '1.3rem', 
                fontWeight: 400, 
                display: 'flex'
            }}>
            <p style= {{color: 'white', fontSize: "1.3rem"}}>#</p>
            <Typed
                strings={[
                    'Mobile Application',
                    'Software',
                    'Backend API', 
                    'FullStack',
                ]}
                typeSpeed={40}
                loop
            />
            <p style= {{color: 'white', fontSize: "1.3rem"}}>Developer</p>
        </div>
    )
}

export default AnimatedTitles