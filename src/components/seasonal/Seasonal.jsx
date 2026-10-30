import React from 'react'
import { getActiveSeason } from './seasons'
import Halloween from './Halloween'
import Christmas from './Christmas'
import '../../styles/seasonal.scss'

const THEMES = { halloween: Halloween, christmas: Christmas }

const Seasonal = () => {
    const Theme = THEMES[getActiveSeason()]
    return Theme ? <Theme /> : null
}

export default Seasonal
