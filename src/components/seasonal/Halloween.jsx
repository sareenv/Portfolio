import React from 'react'
import SeasonalGreeting from './SeasonalGreeting'

// left: horizontal position, thread: length in px (the top ~76px sits behind the nav bar)
const SPIDERS = [
    { left: '3%', thread: 150, scale: 0.9, delay: 0 },
    { left: '15%', thread: 230, scale: 1.1, delay: -1.2 },
    { left: '33%', thread: 120, scale: 0.7, delay: -2.1, extra: true },
    { left: '52%', thread: 190, scale: 0.8, delay: -0.6, extra: true },
    { left: '68%', thread: 140, scale: 1, delay: -1.8 },
    { left: '82%', thread: 260, scale: 1.2, delay: -0.9 },
    { left: '94%', thread: 170, scale: 0.8, delay: -2.6, extra: true },
]

const SpiderBody = () => (
    <svg viewBox="0 0 60 50" width="60" height="50" className="decor__item-body">
        <g stroke="#1b1b1b" strokeWidth="2.5" strokeLinecap="round" fill="none">
            <path d="M22 26 L8 14 L3 22" />
            <path d="M22 30 L6 30 L2 40" />
            <path d="M23 34 L10 44 L12 49" />
            <path d="M26 36 L20 48 L24 50" />
            <path d="M38 26 L52 14 L57 22" />
            <path d="M38 30 L54 30 L58 40" />
            <path d="M37 34 L50 44 L48 49" />
            <path d="M34 36 L40 48 L36 50" />
        </g>
        <ellipse cx="30" cy="34" rx="11" ry="13" fill="#1b1b1b" />
        <circle cx="30" cy="20" r="8" fill="#1b1b1b" />
        <circle cx="27" cy="19" r="2.2" fill="#ff6a00" />
        <circle cx="33" cy="19" r="2.2" fill="#ff6a00" />
        <path d="M25 36 L30 31 L35 36 L30 41 Z" fill="#ff6a00" opacity="0.85" />
    </svg>
)

const Halloween = () => (
    <>
        <div className="decor decor--halloween" aria-hidden="true">
            {SPIDERS.map(({ left, thread, scale, delay, extra }) => (
                <div
                    key={left}
                    className={`decor__item ${extra ? 'decor__item--extra' : ''}`}
                    style={{ left, '--thread': `${thread}px`, '--scale': scale, animationDelay: `${delay}s` }}
                >
                    <div className="decor__item-thread" />
                    <SpiderBody />
                </div>
            ))}
        </div>
        <SeasonalGreeting theme="halloween" text="🎃 Happy Halloween! 🕷️" />
    </>
)

export default Halloween
