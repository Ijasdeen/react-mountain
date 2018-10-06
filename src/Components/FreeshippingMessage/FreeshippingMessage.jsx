import React from 'react';

import { Container }  from 'mdbreact';
import './freeshippingMessage.css';
const FreeShippingMessage = () => {
    return (  
       <React.Fragment>
            <Container fluid className='text-white d-flex justify-content-center align-items-center main-wrapper'>
           <p> <strong>FREE SHIPPING - ORDERS OVER 75$ <small>(US only)</small></strong></p>
            </Container>
       </React.Fragment>
    );
}
 
export default FreeShippingMessage;