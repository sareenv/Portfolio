import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import CodeSnippet from '../Blogs/CodeSnippet'

class ResearchPage extends React.Component {
    constructor(props) {
        super(props)

    }
    

    render() {
        const code = ''
        const sampleHtml = `
            <h2> Hello Mate</h2> <br> 
            Let's begin the game sir
        `
        return(
        <div style={{margin: 20}}>
            {ReactHtmlParser(sampleHtml)}
        </div>
        )
    }
}

export default ResearchPage
