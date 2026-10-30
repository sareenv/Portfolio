import React from 'react'
import SeasonalGreeting from './SeasonalGreeting'

const ORNAMENTS = [
    { left: '4%', thread: 140, color: '#d62828', delay: 0 },
    { left: '17%', thread: 220, color: '#2a9d8f', delay: -1.1 },
    { left: '34%', thread: 120, color: '#f4b942', delay: -2.2, extra: true },
    { left: '51%', thread: 190, color: '#d62828', delay: -0.5, extra: true },
    { left: '67%', thread: 150, color: '#3a86ff', delay: -1.7 },
    { left: '83%', thread: 240, color: '#f4b942', delay: -0.9 },
    { left: '94%', thread: 170, color: '#2a9d8f', delay: -2.5, extra: true },
]

const SNOWFLAKES = Array.from({ length: 28 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    size: 6 + ((i * 5) % 9),
    duration: 9 + ((i * 7) % 10),
    delay: -((i * 3) % 14),
    drift: ((i % 2 === 0 ? 1 : -1) * (10 + ((i * 11) % 40))),
}))

const Ornament = ({ color }) => (
    <svg viewBox="0 0 40 52" width="40" height="52" className="decor__item-body">
        <rect x="16" y="0" width="8" height="8" rx="1.5" fill="#c9a227" />
        <circle cx="20" cy="31" r="18" fill={color} />
        <path d="M8 26 Q20 36 32 26" stroke="rgba(255,255,255,0.7)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="13" cy="22" rx="4" ry="6" fill="rgba(255,255,255,0.35)" transform="rotate(-25 13 22)" />
    </svg>
)

const Christmas = () => (
    <>
        <div className="decor decor--christmas" aria-hidden="true">
            {ORNAMENTS.map(({ left, thread, color, delay, extra }) => (
                <div
                    key={left}
                    className={`decor__item ${extra ? 'decor__item--extra' : ''}`}
                    style={{ left, '--thread': `${thread}px`, '--scale': 1, animationDelay: `${delay}s` }}
                >
                    <div className="decor__item-thread" />
                    <Ornament color={color} />
                </div>
            ))}
        </div>
        <div className="snow" aria-hidden="true">
            {SNOWFLAKES.map(({ left, size, duration, delay, drift }, i) => (
                <span
                    key={i}
                    className="snow__flake"
                    style={{
                        left,
                        width: size,
                        height: size,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`,
                        '--drift': `${drift}px`,
                    }}
                />
            ))}
        </div>
        <SeasonalGreeting theme="christmas" text="🎄 Merry Christmas! ☃️" />
    </>
)

export default Christmas
