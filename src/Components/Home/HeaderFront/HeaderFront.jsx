import React from 'react'
import AnimatedTitles from './AnimatedtTitles'
import image from '../../../Assets/me.jpeg'
import { Button, Image } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../Styles/frontheader.scss'

const HeaderFront = () => {
    return (
        <div>
            <div className="frontheader">
                <Image thumbnail className="circularimage" src = {image} alt='noImg' />
                <div style={{display: 'flex', flexDirection: 'column', padding: 0, margin: 0}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <h3 style = {{color: '#e63946', marginTop: 15, padding: 3}}>  Hi <span role="img" aria-label="hi"> 👋 </span> I'm </h3>
                        <h3 style = {{color: '#f1faee', marginTop: 15}}> Vinayak Sareen  </h3>
                    </div>
                    <p style={{color: '#f1faee', marginTop: '0.1em', fontSize: '1em', textAlign: 'center'}}> 
                         I'm enthusiastic Masters (MEng) Student at Concordia University. </p>
                </div>
                <AnimatedTitles /> 
                <Button variant="light"> <span style={{fontSize: '1em'}} role="img" aria-label="cv"> 🧑‍💻  </span> Resume </Button> 
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
