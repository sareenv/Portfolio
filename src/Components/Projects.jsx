import React from 'react'
import {Card} from 'antd'
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
            <div style = {{marginTop: 10}}> 
                <Card title="Default size card" cover={
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt= 'noImg'/>
                } style={{ width: 300, margin: 10 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>    
        )
    }

}

export default Projects
