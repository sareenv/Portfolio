import React from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import Footer from '../Footer'

class BlogPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // this will also be removed from here and we will make this work from the database
            articles: [
                {   
                    id: 12,
                    page: 1,
                    date: new Date().toLocaleDateString(), 
                    image: '',
                    title: 'Optionals in Swift Programming', 
                    description: 'This is a nice article on hacking with swift and will help me'
                },
                {   
                    id: 13,
                    page: 1,
                    date: new Date().toLocaleDateString(), 
                    image: '',
                    title: 'UICollectionView Tutorial', 
                    description: 'This is a nice article on hacking with swift and will help me'
                }, {
                    id: 13,
                    page: 1,
                    date: new Date().toLocaleDateString(), 
                    image: '',
                    title: 'UITableViewController', 
                    description: 'This is a nice article on hacking with swift and will help me'
                }, {
                    id: 14,
                    page: 1,
                    date: new Date().toLocaleDateString(), 
                    image: '',
                    title: 'Developing React Applications With Javascript', 
                    description: 'This is a nice article on hacking with swift and will help me'
                }
            ]
        }
    }

    listItem = (title, description, date) => {
        return (
            <div style={{padding: 10}}>
                <ListGroup.Item>
                    <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 20}}> 
                        <h2> {title} </h2>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {date} <br/>
                            {description}
                        </div>
                    </div>
                    <Button variant="outline-secondary"> Continue Reading </Button>
                </ListGroup.Item>
            </div>
        )
    }

    render() {
        return(
        <div style={{margin: 20, backgroundColor: 'rgba(238, 238, 238, 0.4)'}}>
            <center> <h2 style={{padding: 14}}> Programming Blogs 🔥 </h2></center>
            <ListGroup>
                {this.state.articles.map((article) => this.listItem(article.title, article.description, article.date))}
                {console.log(this.state.articles[0].date)}
            </ListGroup>
            <Footer />
        </div>
        )
    }
}

export default BlogPage
