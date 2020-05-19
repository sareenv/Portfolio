import React from 'react'
import Project from '../Components/Project'
import 'antd/dist/antd.css';

class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // here fetch all the projects concering the portfolio
    }

    render() {
        const tile = "hello"
        return (
            <div>
                <div style = {{marginTop: 10, display: 'flex', justifyContent: 'center'}}> 
                    <Project title= {'YoBruh'}/>
                    <Project title = {tile}/>
                    <Project title = {tile}/>
                </div>    

                <div style = {{marginTop: 10, display: 'flex', justifyContent: 'center'}}> 
                    <Project title = {tile}/>
                    <Project title = {tile}/>
                    <Project title = {tile}/>
                </div>
            </div>    

        )
    }

}

export default Projects
