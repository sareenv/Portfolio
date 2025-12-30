import React from 'react'

const Badge = (props) => {
    return (
        <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(0, 180, 216, 0.1)',
            color: '#00b4d8',
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