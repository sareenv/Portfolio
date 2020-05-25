import React from 'react'
import AnimatedTitles from './AnimatedtTitles'
import image from '../../../me.jpeg'
import { Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css'

const HeaderFront = () => {
    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', 
            backgroundColor: '#1b1b2f', minHeight: 400, minWidth: '100%' ,flexDirection: 'column', padding: 10}}>
                <img src = {image} alt='noImg' style={{width: 100, height: 100,
                    borderRadius: 50, marginTop: 25}} />
                <div style={{display: 'flex', flexDirection: 'column', padding: 0, margin: 0}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <p style = {{color: '#e43f5a', fontSize: 25, marginTop: 15, padding: 3}}>  Hi, I'm </p>
                        <p style = {{color: 'white', fontSize: 25, marginTop: 15}}> Vinayak Sareen  </p>
                    </div>
                    <h3 style={{color: 'white', marginTop: -20, fontSize: '15px', textAlign: 'center'}}> 
                    I'm enthusiastic recenlty graduated software engineer from Coventry University. </h3>
                    <h3 style={{color: 'white', marginTop: -10, fontSize: '15px'}}> I'm a full stack developer who can 
                    develop mobile applications and backend REST Api as per the business logic.
                    </h3>
                </div>
                <AnimatedTitles /> 
                <Button> Download Resume </Button> 
            </div>
            <div style={{color: 'white', display: 'flex', marginTop: -40, justifyContent: 'flex-end', marginRight: 10}}> 
                <a style={{textDecoration: 'none', color: 'white'}} href="https://github.coventry.ac.uk/sareenv"> <FaGithub style = {{marginRight: 15, fontSize: 20}}/> </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://www.linkedin.com/in/vinayak-sareen/"> <FaLinkedin style = {{marginRight: 20}}/> </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://www.linkedin.com/in/vinayak-sareen/"> <FaDiscord style = {{marginRight: 20}}/> </a>
            </div>
        </div>
    )
}

export default HeaderFront
