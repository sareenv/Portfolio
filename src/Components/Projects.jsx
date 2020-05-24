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
        
        return (
            <div>
                <p style = {{display: 'flex', justifyContent: 'center', marginTop: 20, fontSize: 20, color: '#1b1b2f'}}> Personal Projects </p>
                <div style = {{marginTop: -15, display: 'flex', justifyContent: 'center'}}> 
                    <Project title= {'SVSwiper Library'}/>
                    <Project title = {'Food Ordering IOS APP'}/>
                    <Project title = {'Resturant Ordering REST Api'}/>
                </div>    

                <div style = {{marginTop: 10, display: 'flex', justifyContent: 'center'}}> 
                    <Project title = {'Movies Review Application'}/>
                    <Project title = {'Python ChatBot'}/>
                    <Project title = {'YoBruh'}/>
                </div>
            </div>    

        )
    }

}

export default Projects
