import {Row, Col, Image} from 'react-bootstrap'
import React from 'react'
import {useEffect, useState} from 'react'
import Markdown from 'markdown-to-jsx';
import CodeBlock from '../Utilities/CodeBlock'


const CustomImage = (children) => {
    return(
        <Image fluid src={children.src}>
       
        </Image>
    )
}

const CustomCode = (children) => {
    return (
        <div style={{marginTop: '1rem'}}>
        <CodeBlock style={{maxWidth: '1vw'}} language="swift" code={children.children[0].props.children}/>
        </div>
    )
    
}

const CustomNote = (children) => {
    
    return (
        <div style={{backgroundColor: 'whitesmoke', padding: '1rem'}}>
        {children.children[0] + children.children[1]}
        </div>
    )
}

const Show = () => {
    
    const file_name = 'article.md';
    const [post, setPost] = useState('');
    useEffect(() => {
        import(`../../Content/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
                })
            .catch(err => console.log(err));
    });

    return (
        <Row style={{padding: '1rem'}}>
            <Col sm={12} md={12} lg={9} >
                <Markdown 
                    options={{
                        forceBlock: true,
                        overrides: {
                            img: {
                                component: CustomImage,
                            }, 
                            note: {
                                component: CustomNote
                            }, 
                            code: {
                                component: CustomCode
                            }
                        }
                    }}
                    
                >
                    {post}
                </Markdown>
            </Col>
        </Row>
    )
}

export default Show;