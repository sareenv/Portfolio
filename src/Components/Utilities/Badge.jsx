import React from 'react'

const Badge = (props) => {
    return (
        <div>
            <span className="badge badge-dark" style={{minWidth: '5rem'}}>{props.tag}</span>
        </div>
    )
}

export default Badge