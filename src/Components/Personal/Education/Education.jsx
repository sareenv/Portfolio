import React from 'react';
import { Button, Card, Image, ListGroup } from "react-bootstrap";
import Badge from "../../Utilities/Badge"
import "../../../Styles/about.scss"
import "../../../Styles/base.scss"


const Education = (props) => {
    return (
        <Card style={{
            display: 'flex', flexType: 'wrap',
            justifyContent: 'space-around',
            minHeight: props.visible === true ? '26rem' : 'auto', 
            textAlign: 'center'
        }}
        >
            <Image className="customThumbnail" src={props.image} style={{maxHeight: props.isHE === true ? '100px': '150px'}} />
            <Card.Body>
                <span>
                    <div>
                        <h5 style={{fontWeight: 800}}> {props.qualification} </h5>
                    </div>

                    <div>
                        {props.instition}
                    </div>

                    {props.issued != null &&
                        <div>
                            <Badge tag= {props.issued}/>
                        </div>
                    }

                    {
                        props.certificateID != null &&
                        <div>
                            <b>Credential ID:</b> {props.certificateID}
                        </div>
                    }


                    {props.address != null &&
                        <div>
                            {props.address}
                        </div>
                    }

                    {props.modules === true &&
                        <div>
                            <Card.Header style={{ marginTop: '1rem' }}>
                                <span>
                                    <b>Relevant Modules </b>
                                </span>

                            </Card.Header>

                            <ListGroup variant="flush">
                                {props.courses != null && props.courses.map(function (course) {
                                    return (
                                        <ListGroup.Item key={course.id}> • {course} </ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </div>
                    }
                </span>

            </Card.Body>

            {props.visible === true &&
                <Button disabled={(props.credLink === undefined || props.credLink === "")} className="customLink text-decoration-none rounded"  style={{ margin: '0.5rem' }} href={props.credLink}> {props.bnttitle} </Button>
            }
        </Card>
    )
}

export default Education;