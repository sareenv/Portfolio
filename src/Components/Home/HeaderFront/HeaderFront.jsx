import React from 'react'
import AnimatedTitles from './AnimatedtTitles'
import image from '../../../Assets/me.jpeg'
import { Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../Styles/frontheader.scss'

const HeaderFront = () => {
    return (
        <div>
            <div className="frontheader">
                <img className="circularimage" src = {image} alt='noImg' />
                <div style={{display: 'flex', flexDirection: 'column', padding: 0, margin: 0}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <p style = {{color: '#e63946', fontSize: '1.6rem', marginTop: 15, padding: 3}}>  Hi <span>👋 </span> I'm </p>
                        <p style = {{color: '#f1faee', fontSize: '1.6rem', marginTop: 15}}> Vinayak Sareen  </p>
                    </div>
                    <h3 style={{color: '#f1faee', marginTop: -20, fontSize: '15px', textAlign: 'center'}}> 
                    I'm enthusiastic Masters Student At Concordia University with Software Engineering experience of two years. </h3>
                </div>
                <AnimatedTitles /> 
                <Button className='resumeBtn'>  #Resume </Button> 
            </div>
            <div style={{color: 'white', display: 'flex', marginTop: -40, justifyContent: 'flex-end', marginRight: 10}}> 
                <a style={{textDecoration: 'none', color: 'white'}} href="https://github.com/sareenv"> <FaGithub style = {{marginRight: 15, fontSize: 20}}/> </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://www.linkedin.com/in/vinayak-sareen/"> <FaLinkedin style = {{marginRight: 20}}/> </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://www.linkedin.com/in/vinayak-sareen/"> <FaDiscord style = {{marginRight: 20}}/> </a>
            </div>
        </div>
    )
}

export default HeaderFront
