import React from 'react';
import { Button, Card, Image, ListGroup } from "react-bootstrap";
import Badge from "../../Utilities/Badge"
import "../../../Styles/about.scss"
import "../../../Styles/base.scss"


const Education = (props) => {
    // Simplified version for home page
    if (props.isHE === true) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '0'
            }}>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    minHeight: '120px'
                }}>
                    <Image 
                        src={props.image} 
                        style={{
                            maxHeight: '80px',
                            objectFit: 'contain',
                            maxWidth: '100%'
                        }}
                    />
                </div>
                
                <div style={{padding: '0 1rem'}}>
                    <h5 style={{
                        fontWeight: 600,
                        color: '#003049',
                        fontSize: '1.1rem',
                        marginBottom: '0.75rem'
                    }}>
                        {props.qualification}
                    </h5>

                    <div style={{
                        color: '#666',
                        fontSize: '0.95rem',
                        marginBottom: '0.5rem',
                        lineHeight: '1.6'
                    }}>
                        {props.instition}
                    </div>

                    {props.address && (
                        <div style={{
                            color: '#999',
                            fontSize: '0.85rem',
                            marginBottom: 0
                        }}>
                            {props.address}
                        </div>
                    )}
                </div>
            </div>
        );
    }
    
    // Full version for Education page
    return (
        <Card style={{
            display: 'flex',
            flexType: 'wrap',
            justifyContent: 'space-around',
            minHeight: props.visible === true ? '26rem' : 'auto',
            textAlign: 'center',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            height: '100%'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: props.isHE === true ? '140px' : '180px'
            }}>
                <Image 
                    className="customThumbnail" 
                    src={props.image} 
                    style={{
                        maxHeight: props.isHE === true ? '100px': '150px',
                        objectFit: 'contain',
                        maxWidth: '100%'
                    }}
                />
            </div>
            
            <Card.Body style={{padding: '2rem'}}>
                <span>
                    <div>
                        <h5 style={{
                            fontWeight: 700,
                            color: '#003049',
                            fontSize: '1.2rem',
                            marginBottom: '1rem'
                        }}>{props.qualification}</h5>
                    </div>

                    <div style={{
                        color: '#666',
                        fontSize: '1rem',
                        marginBottom: '1rem',
                        lineHeight: '1.6'
                    }}>
                        {props.instition}
                    </div>

                    {props.issued != null &&
                        <div style={{marginBottom: '1rem'}}>
                            <Badge tag={props.issued}/>
                        </div>
                    }

                    {
                        props.certificateID != null &&
                        <div style={{
                            color: '#666',
                            fontSize: '0.9rem',
                            marginBottom: '1rem'
                        }}>
                            <strong style={{color: '#003049'}}>Credential ID:</strong> {props.certificateID}
                        </div>
                    }


                    {props.address != null &&
                        <div style={{
                            color: '#666',
                            fontSize: '0.95rem',
                            marginBottom: '1rem',
                            lineHeight: '1.5'
                        }}>
                            {props.address}
                        </div>
                    }

                    {props.modules === true &&
                        <div style={{marginTop: '1.5rem'}}>
                            <Card.Header style={{
                                marginTop: '1rem',
                                backgroundColor: '#f8f9fa',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0.75rem'
                            }}>
                                <span>
                                    <strong style={{color: '#003049', fontSize: '1rem'}}>Relevant Modules</strong>
                                </span>
                            </Card.Header>

                            <ListGroup variant="flush" style={{marginTop: '0.5rem'}}>
                                {props.courses != null && props.courses.map(function (course) {
                                    return (
                                        <ListGroup.Item 
                                            key={course.id}
                                            style={{
                                                border: 'none',
                                                padding: '0.5rem 0',
                                                color: '#666',
                                                fontSize: '0.95rem',
                                                textAlign: 'left'
                                            }}
                                        >• {course}</ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </div>
                    }
                </span>

            </Card.Body>

            {props.visible === true &&
                <Button 
                    disabled={(props.credLink === undefined || props.credLink === "")} 
                    className="text-decoration-none"
                    style={{
                        margin: '1rem',
                        backgroundColor: (props.credLink === undefined || props.credLink === "") ? '#ccc' : '#003049',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        cursor: (props.credLink === undefined || props.credLink === "") ? 'not-allowed' : 'pointer'
                    }}
                    href={props.credLink}
                    onMouseEnter={(e) => {
                        if (props.credLink !== undefined && props.credLink !== "") {
                            e.target.style.backgroundColor = '#002035';
                            e.target.style.boxShadow = '0 4px 12px rgba(0,48,73,0.3)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (props.credLink !== undefined && props.credLink !== "") {
                            e.target.style.backgroundColor = '#003049';
                            e.target.style.boxShadow = 'none';
                        }
                    }}
                >{props.bnttitle}</Button>
            }
        </Card>
    )
}

export default Education;