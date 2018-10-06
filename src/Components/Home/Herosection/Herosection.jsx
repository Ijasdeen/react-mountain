import React from 'react';
import {Container} from 'mdbreact';
import './Herosection.css';
const Herosection = () => {
    return ( 
        <Container fluid className='main-wrapper'>
        <img src="Images/hero-section-image.PNG" 
        alt="Hero section images"
        className='img-fluid'
        />
        </Container>
     );
}
 
export default Herosection;