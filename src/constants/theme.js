/**
 * Design System Constants
 * Centralized design tokens for consistent styling across the application
 */

// =============================================================================
// COLORS
// =============================================================================

export const colors = {
    // Primary palette
    primary: {
        main: '#003049',
        dark: '#002035',
        light: '#004c59',
    },
    
    // Accent colors
    accent: {
        red: '#e63946',
        redDark: '#d62828',
    },
    
    // Neutral colors
    neutral: {
        white: '#ffffff',
        offWhite: '#f1faee',
        lightGray: '#f8f9fa',
        gray: '#666666',
        darkGray: '#333333',
        border: '#e8e8e8',
    },
    
    // Semantic colors
    semantic: {
        error: '#dc3545',
        success: '#28a745',
        warning: '#ffc107',
        info: '#6c757d',
    },
    
    // Background colors
    background: {
        page: '#f8f9fa',
        card: '#ffffff',
        overlay: 'rgba(255, 255, 255, 0.1)',
        overlayHover: 'rgba(255, 255, 255, 0.2)',
    },
};

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const typography = {
    // Font sizes
    fontSize: {
        xs: '0.75rem',      // 12px
        sm: '0.85rem',      // ~14px
        base: '0.9rem',     // ~14px
        md: '0.95rem',      // ~15px
        lg: '1rem',         // 16px
        xl: '1.05rem',      // ~17px
        '2xl': '1.1rem',    // ~18px
        '3xl': '1.15rem',   // ~18px
        '4xl': '1.3rem',    // ~21px
        '5xl': '1.5rem',    // 24px
        '6xl': '1.8rem',    // ~29px
        '7xl': '2rem',      // 32px
        '8xl': '2.5rem',    // 40px
    },
    
    // Font weights
    fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    
    // Line heights
    lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.6,
        loose: 1.7,
    },
};

// =============================================================================
// SPACING
// =============================================================================

export const spacing = {
    xs: '0.25rem',      // 4px
    sm: '0.5rem',       // 8px
    md: '0.75rem',      // 12px
    lg: '1rem',         // 16px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '2rem',      // 32px
    '4xl': '2.5rem',    // 40px
    '5xl': '3rem',      // 48px
    '6xl': '4rem',      // 64px
};

// =============================================================================
// BORDERS
// =============================================================================

export const borders = {
    radius: {
        sm: '4px',
        md: '8px',
        lg: '10px',
        xl: '12px',
        full: '50%',
    },
    
    width: {
        thin: '1px',
        medium: '2px',
        thick: '3px',
        heavy: '4px',
    },
};

// =============================================================================
// SHADOWS
// =============================================================================

export const shadows = {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 2px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.1)',
    hover: '0 4px 12px rgba(0, 48, 73, 0.3)',
};

// =============================================================================
// TRANSITIONS
// =============================================================================

export const transitions = {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
};

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
};

// =============================================================================
// Z-INDEX
// =============================================================================

export const zIndex = {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
};

// =============================================================================
// LAYOUT
// =============================================================================

export const layout = {
    maxWidth: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
    },
    
    containerPadding: '1rem',
    
    minHeight: {
        section: '300px',
        hero: '70vh',
        page: '100vh',
    },
};

// =============================================================================
// API / SERVICE CONSTANTS
// =============================================================================

export const api = {
    baseUrl: 'https://api.sareenv.com/api/v1',
    cacheTTL: 20 * 60 * 1000, // 20 minutes in milliseconds
    timeout: 10000, // 10 seconds
};

// =============================================================================
// ANIMATION
// =============================================================================

export const animation = {
    duration: {
        fast: 150,
        normal: 300,
        slow: 500,
    },
    
    easing: {
        ease: 'ease',
        easeIn: 'ease-in',
        easeOut: 'ease-out',
        easeInOut: 'ease-in-out',
    },
};

// =============================================================================
// ICON SIZES
// =============================================================================

export const iconSize = {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 32,
    '3xl': 48,
};

// =============================================================================
// DEFAULT EXPORT (for convenience)
// =============================================================================

const theme = {
    colors,
    typography,
    spacing,
    borders,
    shadows,
    transitions,
    breakpoints,
    zIndex,
    layout,
    api,
    animation,
    iconSize,
};

export default theme;
