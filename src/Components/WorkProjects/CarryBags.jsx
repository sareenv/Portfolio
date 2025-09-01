import React from 'react';
import {Row, Col, Image, Container} from 'react-bootstrap'
import CB02 from '../../Assets/carrybags/cb02.png'
import CB04 from '../../Assets/carrybags/cb04.png'
import DownloadLogo from '../../Assets/appStoreButton.svg'

const CarryBags = () => {
    const handleOpenAppLink = () => {
        window.location.href = "https://apps.apple.com/ca/app/wecarrybags/id6475269259"
    }
    return (
        <Container thumbnail style={{
            marginTop: '1rem',
            background: 'white',
            padding: '1rem', 
            borderRadius: '0.3rem'
        }}> 
            <Row>
                <Col sm={12} md={12} lg={3}>
                    <Image thumbnail fluid src={CB04}></Image>
                </Col>

                <Col sm={12} md={12} lg={3}>
                    <Image thumbnail fluid src={CB02}></Image>
                </Col>
                <Col sm={12} md={12} lg={5}>
                   
                <Col sm={12} md={12} lg={12}>
                    <h3 style={{fontWeight: 540, color: 'black', paddingBottom: '1rem'}}> 
                        WeCarryBags: Elevate Your Shopping Experience 
                    </h3>
                </Col>
                    
                    <label style={{color: 'gray', 
                        marginTop: '0.4rem', 
                        textAlign: 'justify'}}>
                        WeCarryBags transforms your in-store shopping journey by delivering your purchases 
                        directly to any address you choose. Say goodbye to the hassle of carrying bags and hello 
                        to more leisure and work time. Built with SwiftUI, this app offers the ultimate convenience 
                        for shoppers looking to blend shopping with their busy lifestyles seamlessly.
                    </label>
                    <center>
                        <h5 style={{marginTop: '1rem'}}>Benefits</h5>
                    </center>
                    <div style={{fontWeight: 200}}>
                        <ol style={{textAlign: 'justify'}}>
                            <li> Have your purchases delivered directly to your doorstep or hotel—wherever your journey takes you. </li>
                            <li> Reclaim your day and explore freely without being weighed down by shopping bags. </li>
                            <li> Location-adaptive service that follows you whether you're a local or tourist.
                            </li>
                            <li> Simple in-app payment system with transparent pricing and no hidden fees.
                            </li>
                            <li> Supports iPhone and iPad iOS 15.0+ devices. </li>
                        </ol>
                    </div>
                    <div style={{
                        display: 'flex', 
                        width: '100%',
                        justifyContent: 'start',
                        marginTop: '1rem'
                    }}>
                        <Image src={DownloadLogo} onClick={handleOpenAppLink}></Image>
                    </div>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default CarryBags;