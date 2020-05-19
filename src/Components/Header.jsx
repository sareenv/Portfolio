import React from 'react'

const Header = () => {
    return (
        <div style = {{backgroundColor: 'white', color: 'black', minHeight: 80, marginTop: 0, padding: 0, minWidth: '100%'}}>
            <div> 
                <ul style = {{textDecoration: 'none', listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <li style = {{padding: 12}}> Research </li>
                    <li style = {{padding: 12}}> Hackathons </li>
                    <li style = {{padding: 12}}> Articles </li>
                    <li style = {{padding: 12}}> Projects </li>
                    <li style = {{padding: 12}}> Experience </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
