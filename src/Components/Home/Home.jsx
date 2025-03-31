import React, {useEffect} from 'react'
import HeaderFront from './HeaderFront/HeaderFront'
import Project from '../Projects/Projects'
import About from '../Personal/About'
import Contact from '../Contact/Contact'
import CarryBags from '../WorkProjects/CarryBags'
import ReactGA from 'react-ga'

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return (
        <div>
            <div style={{margin: 0, padding: 0}}>
                <HeaderFront/>
                <About/>
                <Project  length={6} showTitle={true}/>
                <CarryBags />
                <Contact />
            </div> 
        </div>
    )
}

export default Home
