import React from 'react'
import image from '../../../Assets/me.jpeg'
import { Container } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"
import { motion } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../Styles/frontheader.scss'

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

const decorationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 0.6,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
        }
    }
}

const socialVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: 0.6 + (i * 0.1),
            ease: "easeOut"
        }
    })
}

const HeaderFront = () => {
    return (
        <section className="hero">
            <Container>
                <div className="hero__layout">
                    <motion.div
                        className="hero__content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                     
                        
                        <motion.h1 
                            className="hero__title"
                            variants={itemVariants}
                        >
                            Hi, I'm Vinayak
                            <motion.span 
                                className="hero__title-accent"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Software Engineer
                            </motion.span>
                        </motion.h1>
                        
                        <motion.p 
                            className="hero__description"
                            variants={itemVariants}
                        >
                            I build scalable mobile applications at <strong>Dayforce</strong>, 
                            specializing in Swift, SwiftUI, and modern iOS development. 
                            Based in Toronto, Canada.
                        </motion.p>

                        <motion.div 
                            className="hero__actions"
                            variants={itemVariants}
                        >
                            <motion.a 
                                href="#projects"
                                className="hero__btn hero__btn--primary"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View My Work <HiArrowRight />
                            </motion.a>
                            
                            <div className="hero__social">
                                <motion.a 
                                    href="https://github.com/sareenv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero__social-link"
                                    aria-label="GitHub"
                                    custom={0}
                                    variants={socialVariants}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub size={20} />
                                </motion.a>
                                
                                <motion.a 
                                    href="https://www.linkedin.com/in/vinayak-sareen/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero__social-link"
                                    aria-label="LinkedIn"
                                    custom={1}
                                    variants={socialVariants}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin size={20} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero__visual"
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="hero__image-container">
                            <motion.img 
                                src={image} 
                                alt="Vinayak Sareen"
                                className="hero__image"
                                variants={imageVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div 
                                className="hero__image-decoration"
                                variants={decorationVariants}
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default HeaderFront
