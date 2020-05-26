import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Footer from '../Footer'
import Moment from 'react-moment';
import { AiFillCode } from 'react-icons/ai'

class BlogPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // this will also be removed from here and we will make this work from the database
            articles: []
        }
    }

    componentDidMount() {
        const api = 'https://portfoliowebby.herokuapp.com/api/fetchblogs'
        // using the fetch api download all the data and append the state variable.
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

    // conditional Rendering
    ListItems = () => {
        if(this.state.articles.length > 0) {
            return(
                <div>
                    <ListGroup>
                        {this.state.articles.map((article) => this.listItem(article.title, article.description, article.date))}
                    </ListGroup>
                </div>
            )
        }

        return(
            <div style={{backgroundColor: 'white', fontSize: 28, display: 'flex', flexDirection: 'row', 
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                Blogs comming soon !
            </div>
        )
        
    }



    render() {
        return(
        <div style={{margin: 20, backgroundColor: 'rgba(238, 238, 238, 0.4)'}}>
            <center> <h2 style={{padding: 14}}> Programming Blogs <AiFillCode /> </h2></center>
            {this.ListItems()}
            <Footer />
        </div>
        )
    }
}

export default BlogPage
