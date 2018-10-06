import React from 'react';
import { Container,Row,Col,Input} from 'mdbreact';
import './FooterContent.css';
const FooterContent = () => {
    return (  
        <Container fluid className='footer-content w-100 h-100'>
            <Container className='mb-10'>
            <div className='d-flex justify-content-center'>
           <img src="https://www.themountain.com/product_images/uploaded_images/mountain_30.png" 
           alt="Logo" className='img-fluid'/>
            </div>
           <Row>
               <Col md='4' sm='6' xs='12' lg='4' className=''>
               <span className='white-text font-weight-bold text-uppercase'><b>SHOP</b></span>
               <ul className='list-unstyled white-text w-100'>
              <li><a href="/" className='white-text'>Men</a></li>
              <li><a href="/" className='white-text'>Women</a></li>
               <li><a href="/" className='white-text'>Kids</a></li>
              <li><a href="/" className='white-text'>Purchase with A</a></li>
              <li><a href="/" className='white-text'>Purpose</a>   </li>
               </ul>
               </Col>
               {/*End shop*/}
               <Col md='4' sm='6' xs='12' lg='4'>
               <span className='white-text font-weight-bold text-uppercase'>About us</span>
               <ul className='white-text list-unstyled'>
                <li><a href="/" className="text-white">Careers</a></li>
              <li><a href="/" className="text-white">Our values</a></li>
                <li><a href="/" className='text-white'>Our story</a></li>
               <li><a href="/" className='text-white'>Green manufacturing</a></li>
               <li> <a href="/" className='text-white'>Blog</a></li>
               </ul>
               </Col>
                 {/*End About us*/}
               <Col md='4' sm='6' xs='12' lg='4'>
             <span className='white-text font-weight-bold text-uppercase'>
             assistance
             </span>
             <ul className='text-text text-capitalize list-unstyled'>
           <li><a href="/" className='text-white'>FAQs</a></li>
           <li><a href="/" className='text-white'>size chart</a></li>
          <li> <a href="/" className='text-white'>Guarantee</a>  </li>
          <li> <a href="/" className='text-white'>Shipping</a></li>
           <li><a href="/" className='text-white'>Returns</a></li>
            <li><a href="/" className='text-white'>Contacts</a> </li>   
             </ul>
               </Col>
                 {/*End assistance*/}
               </Row>
            <div className="d-flex flex-row-reverse subscribe-content">
            <form>
              <div className='white-text d-inline-block'>
              <Input type='email' 
              validate 
              success='right'
              error='wrong'
              label='Email'
             group
              icon='envelope'
              />
              </div>
              <div className='d-inline-block'>
              <input type='submit' className='white-text btn btn-primary flat btn-sm' />
              </div>
            </form>
            </div>
            </Container>
        </Container>
    );
}
 
export default FooterContent;