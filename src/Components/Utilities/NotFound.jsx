import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiHome, HiArrowLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #003049 0%, #004c59 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none'
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none'
            }} />

            <Container>
                <motion.div 
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 1
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {/* 404 Number */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(8rem, 20vw, 12rem)',
                            fontWeight: 800,
                            color: 'transparent',
                            background: 'linear-gradient(135deg, #00b4d8 0%, #48cae4 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            lineHeight: 1,
                            marginBottom: '0.5rem',
                            textShadow: '0 0 80px rgba(0, 180, 216, 0.3)'
                        }}>
                            404
                        </h1>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                            fontWeight: 600,
                            color: '#f1faee',
                            marginBottom: '1rem'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Page Not Found
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        style={{
                            fontSize: '1.1rem',
                            color: 'rgba(241, 250, 238, 0.7)',
                            lineHeight: 1.7,
                            marginBottom: '2.5rem'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Oops! The page you're looking for seems to have wandered off. 
                        Let's get you back on track.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link
                            to="/"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 1.75rem',
                                backgroundColor: '#00b4d8',
                                color: '#003049',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0, 180, 216, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 180, 216, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 180, 216, 0.3)';
                            }}
                        >
                            <HiHome size={18} />
                            Back to Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 1.75rem',
                                backgroundColor: 'transparent',
                                color: '#f1faee',
                                border: '1px solid rgba(241, 250, 238, 0.3)',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(241, 250, 238, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(241, 250, 238, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = 'rgba(241, 250, 238, 0.3)';
                            }}
                        >
                            <HiArrowLeft size={18} />
                            Go Back
                        </button>
                    </motion.div>

                    {/* Helpful Links */}
                    <motion.div
                        style={{
                            marginTop: '3rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(241, 250, 238, 0.1)'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <p style={{
                            fontSize: '0.9rem',
                            color: 'rgba(241, 250, 238, 0.5)',
                            marginBottom: '1rem'
                        }}>
                            Or check out these pages:
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            {[
                                { path: '/projects', label: 'Projects' },
                                { path: '/experience', label: 'Experience' },
                                { path: '/services', label: 'Connect' }
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        color: '#2d3748',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#1a1a2e';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '#00b4d8';
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
};

export default NotFound;
