// Libraries Import.
import React, { useState, useEffect } from 'react'
import { Switch, HashRouter, Route, NavLink, useLocation } from 'react-router-dom'
import Home from '../Components/Home/Home'
import ContactPage from '../Components/Contact/Contact'
import ExperiencePage from '../Components/Personal/ExperiencePage'
import ProjectsPage from '../Components/Projects/ProjectsPage'
import Service from '../Components/Personal/Services'
import ProjectDetails from '../Components/Projects/ProjectDetails'
import EducationPage from '../Components/Personal/Education/EducationPage'
import ArticlesPage from '../Components/Articles/ArticlesPage'
import ArticleDetailPage from '../Components/Articles/ArticleDetailPage'
import NotFound from '../Components/Utilities/NotFound'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

// CSS Imports
import '../Styles/base.scss'
import '../Styles/navigation.scss'

// Navigation Links Data
const navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/articles', label: 'Articles', matchPaths: ['/articles'] },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/services', label: 'Services' }
]

// Animation Variants
const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.1 + (i * 0.05), ease: "easeOut" }
    })
}

const mobileMenuVariants = {
    hidden: { 
        opacity: 0,
        height: 0,
        transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3, ease: "easeInOut" }
    }
}

const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, delay: 0.05 + (i * 0.05), ease: "easeOut" }
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
}

// Navigation Component
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location.pathname])

    // Check if link is active
    const isLinkActive = (link) => {
        if (link.exact) {
            return location.pathname === link.path
        }
        if (link.matchPaths) {
            return link.matchPaths.some(p => location.pathname.startsWith(p))
        }
        return location.pathname === link.path
    }

    return (
        <motion.nav 
            className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="nav__container">
                {/* Desktop Navigation */}
                <div className="nav__links">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.path}
                            custom={index}
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <NavLink
                                to={link.path}
                                exact={link.exact}
                                className={`nav__link ${isLinkActive(link) ? 'nav__link--active' : ''}`}
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    {link.label}
                                </motion.span>
                                {isLinkActive(link) && (
                                    <motion.div 
                                        className="nav__link-indicator"
                                        layoutId="activeIndicator"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </NavLink>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <motion.button 
                    className="nav__toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle navigation menu"
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HiX size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HiMenuAlt3 size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        className="nav__mobile"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="nav__mobile-links">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    custom={index}
                                    variants={mobileLinkVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <NavLink
                                        to={link.path}
                                        exact={link.exact}
                                        className={`nav__mobile-link ${isLinkActive(link) ? 'nav__mobile-link--active' : ''}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                        {isLinkActive(link) && (
                                            <motion.span 
                                                className="nav__mobile-link-indicator"
                                                layoutId="mobileActiveIndicator"
                                            />
                                        )}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

// Main Router with Navigation
const MainRouter = () => {
    return (
        <HashRouter basename='/'>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={ProjectsPage} />
                <Route path="/articles" exact component={ArticlesPage} />
                <Route path="/articles/:topicId/:conceptId/:slug" exact component={ArticleDetailPage} />
                <Route path="/experience" exact component={ExperiencePage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/services" exact component={Service} />
                <Route path="/education" exact component={EducationPage} />
                <Route path="/project_details/:id" exact component={ProjectDetails} />
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    )
}

export default MainRouter
