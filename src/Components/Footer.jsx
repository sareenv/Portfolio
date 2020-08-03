import React from 'react'
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"
import '../Styles/footer.scss'


const Footer = () => {
    return (
        <div className = "footer">
            Copyright © 2020 Vinayak Sareen.
            <div style={{color: 'white', display: 'flex', justifyContent: 'center'}}> 
                Connect on 
                <a style={{textDecoration: 'none', color: 'white'}} href="https://github.com/sareenv"> <FaGithub style = {{marginRight: 15, fontSize: 20}}/> </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://www.linkedin.com/in/vinayak-sareen/"> <FaLinkedin style = {{marginRight: 20}}/> </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://www.linkedin.com/in/vinayak-sareen/"> <FaDiscord style = {{marginRight: 20}}/> </a>
            </div>
        </div>
    )
}

export default Footer
