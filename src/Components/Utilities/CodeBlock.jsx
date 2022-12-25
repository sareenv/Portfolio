import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class CodeBlock extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            language : this.props.language, 
            code: this.props.code
        }
    }

    render() {
        return(
            <div>
                <SyntaxHighlighter language={this.state.language} style={docco}>
                    {this.state.code}
                 </SyntaxHighlighter>
            </div>
        )
    }

}

export default CodeBlock
