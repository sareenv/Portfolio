import React, { useState } from 'react'

const SeasonalGreeting = ({ theme, text }) => {
    const [visible, setVisible] = useState(true)
    if (!visible) return null

    return (
        <div className={`seasonal-greeting seasonal-greeting--${theme}`} role="status">
            <span>{text}</span>
            <button
                type="button"
                className="seasonal-greeting__close"
                aria-label="Dismiss greeting"
                onClick={() => setVisible(false)}
            >
                ×
            </button>
        </div>
    )
}

export default SeasonalGreeting
