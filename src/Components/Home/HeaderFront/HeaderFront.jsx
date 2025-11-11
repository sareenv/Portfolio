import React from 'react'
import { useState } from 'react'
import image from '../../../Assets/me.jpeg'
import { Image, Container } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {motion} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../Styles/frontheader.scss'

const HeaderFront = () => {
    const [rotate, setRotate] = useState(false);
    return (
        <div className="frontheader">
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '320px',
                padding: '2rem 1rem'
            }}>
                <motion.div 
                    animate={{ rotate: rotate ? 360 : 0}} 
                    onClick={() => setRotate(!rotate)} 
                    onHoverStart={() => setRotate(!rotate)}
                    style={{marginBottom: '1.5rem'}}
                >
                    <Image 
                        className="circularimage" 
                        src={image} 
                        alt='Vinayak Sareen'
                        style={{
                            width: '140px',
                            height: '140px',
                            borderRadius: '50%',
                            border: '3px solid rgba(255,255,255,0.2)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                            cursor: 'pointer'
                        }}
                    />
                </motion.div>

                <div style={{
                    textAlign: 'center',
                    maxWidth: '700px'
                }}>
                    <div style={{
                        marginBottom: '0.75rem'
                    }}>
                        <h1 style={{
                            color: '#f1faee',
                            fontSize: '2rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem',
                            lineHeight: '1.2'
                        }}>
                            Hi <span role="img" aria-label="hi">👋</span> I'm <span style={{
                                background: 'linear-gradient(135deg, #d62828 0%, #e63946 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>Vinayak Sareen</span>
                        </h1>
                    </div>
                    
                    <p style={{
                        color: 'rgba(241, 250, 238, 0.9)',
                        fontSize: '1.05rem',
                        marginBottom: '1rem',
                        fontWeight: '400',
                        lineHeight: '1.6'
                    }}>
                        Software Engineer at <strong style={{color: '#f1faee'}}>Dayforce</strong>
                    </p>
                    
                    <p style={{
                        color: 'rgba(241, 250, 238, 0.8)',
                        fontSize: '0.95rem',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6'
                    }}>
                        Building scalable mobile applications and crafting exceptional user experiences
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <a 
                            href="https://github.com/sareenv"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: '0.6rem 1.2rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(255,255,255,0.2)',
                                fontWeight: '500',
                                fontSize: '0.9rem'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            <FaGithub style={{fontSize: '1.1rem'}}/> GitHub
                        </a>
                        
                        <a 
                            href="https://www.linkedin.com/in/vinayak-sareen/"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: '0.6rem 1.2rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(255,255,255,0.2)',
                                fontWeight: '500',
                                fontSize: '0.9rem'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            <FaLinkedin style={{fontSize: '1.1rem'}}/> LinkedIn
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderFront
