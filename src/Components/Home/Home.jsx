import React from 'react'
import HeaderFront from './HeaderFront/HeaderFront'
import Footer from '../Footer'
import Project from '../Projects/Projects'
import About from '../Personal/About'
import Contact from '../Contact/Contact'


const Home = () => {
    return (
        <div>
            <div style={{margin: 0, padding: 0}}>
                <HeaderFront/>
                    <About/>
                    <div className='projectBase'>
                        <Project showTitle={true}/>
                    </div>
                    <Contact />
                <Footer />
            </div> 
        </div>
    )
}

export default Home
