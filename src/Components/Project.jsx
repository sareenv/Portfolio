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
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt= 'noImg'/>
                } style={{ width: 300, margin: 30 }}>
                <Card.Meta title= {this.props.title} description="www.instagram.com" />
            </Card>
            </div>
        )
    }

} 

export default Project
