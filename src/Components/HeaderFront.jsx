import React from 'react'
import AnimatedTitles from './AnimatedtTitles'
import image from '../me.jpeg'
const HeaderFront = () => {
    return (
        <section style={{display: 'flex', alignItems: 'center', 
        backgroundColor: 'white', minHeight: 200, minWidth: '100%' ,flexDirection: 'column'}}>
            <img src = {image} alt='noImg' style={{width: 100, height: 100,
                 borderRadius: 50, marginTop: 25}} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, margin: 0}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <p style = {{color: 'purple', fontSize: 25, marginTop: 5, padding: 3}}> " Hi,</p>
                    <p style = {{color: 'black', fontSize: 25, marginTop: 15}}> I am Vinayak Sareen " </p>
                </div>
                <AnimatedTitles />
                
            </div>
        </section>
    )
}

export default HeaderFront
