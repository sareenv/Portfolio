import React from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';
import Footer from '../Footer';
import axios from 'axios';
import { AiFillCode } from 'react-icons/ai';
import CodeBlock from './CodeSnippet'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
import Blog from './Blog';

class BlogPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            currentArticle: false
        }
    }

    downloadArticles = async (url) => {
        const response  = await axios(url, {method: 'GET', mode: 'no-cors'})
        this.setState({
            articles: response.data
        })
    }

    componentDidMount() {
        this.downloadArticles('https://portfoliowebby.herokuapp.com/api/fetchBlogs')
    }

    handleModal = (id) => {
        this.setState({currentArticle: true})
    }

    listItem = (title, description, date, image) => {
        return (
            <div style={{ marginBottom: 30}}>
                <ListGroup.Item>
                    <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 20}}> 
                        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
                            <img src={image} style={{maxWidth: 300}}/> 

                            <div style={{display: 'flex', flexDirection: 'column', padding: 20}}>
                                <h2> {title} </h2>
                                {date} <br/>
                                {description}
                                <br/><br/>
                                <Button variant="outline-secondary" style={{maxWidth: 230}} onClick={this.handleModal}> Continue Reading </Button>
                            </div>
                        </div>
                    </div>
                    
                </ListGroup.Item>
            </div>
        )
    }

    // conditional Rendering
    ListItems = () => {
        if(this.state.articles.length > 0 && this.state.currentArticle === false) {
            return(
                <div>
                    <ListGroup>
                        {this.state.articles.map((article) => this.listItem(article.title, article.description, article.date, article.thumbnail))}
                    </ListGroup>
                </div>
            )
        }

        else if(this.state.currentArticle === true) {
            return(
                <div style={{backgroundColor: 'white', fontSize: 15,
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    alignItems: 'center',
                    margin: 10
                }}>
                    
            
                <CodeBlock lang = 'swift' code= {this.state.articles[2].article} />

                </div>
            )
        }

        else  {
            return (<div> </div>)
        }
        
    }

    Header() {
        return (
            <div>
                <center> <h2 style={{padding: 14}}> <AiFillCode /> Programming Blogs  </h2></center>
            </div>)
    }

    render() {
        if(this.state.currentArticle === false) {
            return(
                <div style={{marginLeft: 20, marginRight: 20, backgroundColor: 'rgba(238, 238, 238, 0.4)'}}>
                    {this.Header()}
                    {this.ListItems()}
                    <Footer />
                </div>)
        }

        return(
            <div style={{marginLeft: 20, marginRight: 20, backgroundColor: 'rgba(238, 238, 238, 0.4)'}}>
                {this.ListItems()}
                <Footer />
            </div>)
        
    }
}

export default BlogPage
