import React from 'react';
import {Container,Row,Col} from 'mdbreact';
import './sideimages.css';
const sideimages = () => {
    return ( 
        <Container fluid className='sideimages-mainwrapper'>
          <Row>
          <Col md='6' sm='12' lg='6'>
            <img src="https://cdn8.bigcommerce.com/s-86394/product_images/uploaded_images/banner-half-promo-drinkware.jpg?t=1537207688&_ga=2.228044573.1048248254.1537183482-2145618724.1537183482" 
            alt="Side images"
            className='img-fluid'
            />
            </Col>
            <Col md='6' sm='12' lg='6'>
            <img src="https://cdn8.bigcommerce.com/s-86394/product_images/uploaded_images/banner-half-promo-myteemonday-9-17.jpg?t=1537205563&_ga=2.118935305.1048248254.1537183482-2145618724.1537183482" 
             alt="Side images 2"
             className='img-fluid'
             />
            </Col>
            
        </Row>
        </Container>
     );
}
 
export default sideimages;