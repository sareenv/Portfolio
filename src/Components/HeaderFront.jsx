import React from 'react'
import AnimatedTitles from './AnimatedtTitles'
import image from '../me.jpeg'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const HeaderFront = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', 
        backgroundColor: 'white', minHeight: 200, minWidth: '100%' ,flexDirection: 'column'}}>
            <img src = {image} alt='noImg' style={{width: 100, height: 100,
                 borderRadius: 50, marginTop: 25}} />
            <div style={{display: 'flex', flexDirection: 'column', padding: 0, margin: 0}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <p style = {{color: 'purple', fontSize: 25, marginTop: 15, padding: 3}}>  Hi, I'm </p>
                    <p style = {{color: 'black', fontSize: 25, marginTop: 15}}> Vinayak Sareen  </p>
                </div>
                <AnimatedTitles /> 
            </div>
            <Button> Download Resume </Button>
        </div>
    )
}

export default HeaderFront
