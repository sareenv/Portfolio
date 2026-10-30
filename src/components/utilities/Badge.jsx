import React from 'react'

const Badge = (props) => {
    return (
        <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(217, 119, 6, 0.12)',
            color: '#D97706',
            padding: '0.35rem 0.85rem',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.02em'
        }}>
            {props.tag}
        </span>
    )
}

export default Badge