import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiHome, HiArrowLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { PROJECTS_ENABLED } from '../../constants';

const dicebearImageUrl = 'https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=page-rebuild&backgroundColor=f5f3ee&radius=18';

const NotFound = () => {
    const helpfulLinks = [
        PROJECTS_ENABLED && { path: '/projects', label: 'Projects' },
        { path: '/apps', label: 'Published Apps' },
        { path: '/experience', label: 'Experience' },
        { path: '/services', label: 'Connect' }
    ].filter(Boolean);

    return (
        <div style={{
            minHeight: '100vh',
            background: '#F5F3EE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            color: '#14213D'
        }}>
            <Container>
                <motion.div 
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <img
                            src={dicebearImageUrl}
                            alt="Friendly work in progress illustration"
                            width="180"
                            height="180"
                            style={{
                                width: 'min(180px, 48vw)',
                                height: 'auto',
                                marginBottom: '1.25rem'
                            }}
                        />
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                            fontWeight: 700,
                            color: '#14213D',
                            lineHeight: 1.08,
                            marginBottom: '1rem'
                        }}>
                            We're working on this page
                        </h1>
                    </motion.div>

                    <motion.h2
                        style={{
                            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                            fontWeight: 600,
                            color: '#14213D',
                            marginBottom: '1rem'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Bringing it back soon
                    </motion.h2>

                    <motion.p
                        style={{
                            fontSize: '1.1rem',
                            color: '#627D98',
                            lineHeight: 1.65,
                            marginBottom: '2.5rem'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        This part of the website is being refreshed. I'm keeping it tucked away for now and will bring it back when the update is ready.
                    </motion.p>

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
                                backgroundColor: '#D97706',
                                color: '#ffffff',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s ease, transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.backgroundColor = '#B45309';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.backgroundColor = '#D97706';
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
                                color: '#14213D',
                                border: '1px solid #E2DED6',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease, border-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                                e.currentTarget.style.borderColor = '#D97706';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = '#E2DED6';
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
                            borderTop: '1px solid #E2DED6'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <p style={{
                            fontSize: '0.9rem',
                            color: '#627D98',
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
                            {helpfulLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        color: '#14213D',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#D97706';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '#14213D';
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
