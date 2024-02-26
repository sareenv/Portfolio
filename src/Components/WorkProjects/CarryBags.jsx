import React from 'react';
import {Row, Col, Image, Container, Button} from 'react-bootstrap'
import CB02 from '../../Assets/carrybags/cb02.png'
import CB04 from '../../Assets/carrybags/cb04.png'
// import downloadLogo from '../../Assets/carrybags/downloadLogo.svg'
const CarryBags = () => {
    const handleOpenAppLink = () => {
        console.log('click detected.')
        window.location.href = "https://apps.apple.com/ca/app/wecarrybags/id6475269259"
    }
    return (
        <Container thumbnail style={{
            marginTop: '1rem',
            background: '#f9fafb',
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
                    <h3 style={{fontWeight: 600, color: 'black'}}> WeCarryBags: Elevate Your Shopping Experience </h3>
                    
                    <label style={{color: 'gray', marginTop: '0.4rem', textAlign: 'justify'}}>
                        WeCarryBags transforms your in-store shopping journey by delivering your purchases 
                        directly to any address you choose. Say goodbye to the hassle of carrying bags and hello 
                        to more leisure and work time. Built with SwiftUI, this app offers the ultimate convenience 
                        for shoppers looking to blend shopping with their busy lifestyles seamlessly.
                    </label>
                    <h5 style={{marginTop: '1rem'}}><b> Benefits</b></h5>
                    <div style={{fontWeight: 160}}>
                        - Have your purchases sent straight to your destination.<br />
                        - Enjoy your free time without the hassle of carrying bags. <br />
                        - Service tailored to wherever you're located  <br />
                        - Seamlessly pay for delivery within the app <br />
                        - Supports iPhone and iPad iOS 15.0+ devices.
                    </div>
                    <Button onClick={handleOpenAppLink} variant="dark" style={{width: '100%', marginTop: '1rem'}}> Download on Appstore </Button>
                    <Button disabled variant='primary' style={{width: '100%', marginTop: '1rem'}}> Learn More </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CarryBags;