import React from 'react';
import {Container} from 'mdbreact';
import './shopforall.css';
const shopforall = () => {
    return (  
        <Container fluid className='my-3 shopall-wrapper'>
        <img 
        src="https://cdn8.bigcommerce.com/s-86394/product_images/uploaded_images/banner-promo-cool-weather-styles-rt.jpg?t=1536764187&_ga=2.151052473.1883715670.1536750859-398936310.1536062940" 
        alt="Shop for all"
        className='img-fluid'
        />
        </Container>
    );
}
 
export default shopforall;