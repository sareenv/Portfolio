import React from 'react'
import {Card} from 'antd'
import 'antd/dist/antd.css';

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return(
            <div> 
                <Card hoverable style={{ width: 240 }} cover={
                    <img src="https://i.ytimg.com/vi/h3pS5rNokQA/maxresdefault.jpg" alt= 'noImg' style={{height: 200}}/>
                    } style={{ width: 300, height: 300, margin: 30 }}>
                    <Card.Meta title= {this.props.title} description="www.instagram.com" />
                </Card>
            </div>
        )
    }
} 

export default Project
