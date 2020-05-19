import React from 'react'

class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // here fetch all the projects concering the portfolio
    }

    render() {
        return (
            <div style = {{marginTop: 10}}> 
                These are grid of projects which I have developed
            </div>    
        )
    }

}

export default Projects
