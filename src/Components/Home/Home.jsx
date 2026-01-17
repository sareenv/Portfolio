import React, {useEffect} from 'react'
import HeaderFront from './HeaderFront/HeaderFront'
import Project from '../Projects/Projects'
import About from '../Personal/About'
import Contact from '../Contact/Contact'
import PublishedWork from '../WorkProjects/CarryBags'
import ArticlesPreview from '../Articles/ArticlesPreview'
import ReactGA from 'react-ga'
import '../../Styles/home.scss'

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    
    return (
        <div className="home">
            {/* Hero Section */}
            <HeaderFront/>
            
            {/* About Section */}
            <section id="about">
                <About/>
            </section>

            {/* Articles Section */}
            <section id="articles">
                <ArticlesPreview limit={6} />
            </section>
            
            {/* Projects Section */}
            <section id="projects">
                <Project length={9} showTitle={true}/>
            </section>

            {/* Published Work Section */}
            <section id="published-work">
                <PublishedWork />
            </section>
            
            
            {/* Contact Section */}
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home
