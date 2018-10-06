import React from 'react';
import './CustomFooter.css';
import FooterContent from './FooterContent/FooterContent';
import { Container } from 'mdbreact';

const CustomFooter = () => {
    return ( 
        <Container fluid className='footer-wrapper my-2'>
        <div className='footer-top'/>
        <FooterContent/>
         </Container>
     );
}
 
export default CustomFooter;