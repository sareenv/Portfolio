// Date windows are inclusive and use the visitor's local date.
const SEASONS = [
    { name: 'halloween', start: { month: 10, day: 24 }, end: { month: 11, day: 1 } },
    { name: 'christmas', start: { month: 12, day: 15 }, end: { month: 12, day: 26 } },
]

const toKey = ({ month, day }) => month * 100 + day

export const getActiveSeason = (date = new Date()) => {
    // Preview a theme any time with ?season=christmas or ?season=halloween
    const preview = new URLSearchParams(window.location.search).get('season')
    if (SEASONS.some(({ name }) => name === preview)) return preview

    const key = (date.getMonth() + 1) * 100 + date.getDate()
    const season = SEASONS.find(({ start, end }) => key >= toKey(start) && key <= toKey(end))
    return season ? season.name : null
}
