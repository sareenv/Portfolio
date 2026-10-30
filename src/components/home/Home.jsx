import React, {useEffect} from 'react'
import HeaderFront from './header-front/HeaderFront'
import Project from '../projects/Projects'
import About from '../personal/About'
import Contact from '../contact/Contact'
import ArticlesPreview from '../articles/ArticlesPreview'
import ReactGA from 'react-ga'
import '../../styles/home.scss'
import { PROJECTS_ENABLED } from '../../constants'

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
            
            {PROJECTS_ENABLED && (
                <section id="projects">
                    <Project length={9} showTitle={true}/>
                </section>
            )}
            
            {/* Contact Section */}
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home
