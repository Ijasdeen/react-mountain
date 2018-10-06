import React from 'react';
import { Container, Row, Col,Animation} from 'mdbreact';
import { Link } from 'react-router-dom';
import './Topcollection.css';
const Topcollections = () => {
    return (  
        <Container>
            <h2 className='h2-responsive font-weight-bold  text-center p-4'>TOP COLLECTIONS</h2>

        <Row>
            <Col md='3'>
     <Link to={{pathname: '/single-product/The Mountain Adult Unisex T-Shirt - Emerald Forest'}}>
     <Animation type='fadeInUp' reveal>
     <span><h3 className='h3-responsive imgTitle text-white text-center'>WILD ANIMALS</h3></span>
    <img src="https://cdn8.bigcommerce.com/s-86394/product_images/uploaded_images/tile-emerald-forest-rt.jpg?t=1521476848&_ga=2.82295058.529695057.1521461744-101673120.1510308621" 
    alt="wild animals"
    className='img-fluid'
    />
     </Animation>
     </Link>
            </Col>
            <Col md='3'>
        <Animation type='fadeInRight' reveal>
        <span><h3 className='imgTitle h3-responsive text-white text-center'>AQUATIC</h3></span>
      <img src="https://cdn8.bigcommerce.com/s-86394/product_images/uploaded_images/tile-sea-turtles-swim-rt.jpg?t=1521476846&_ga=2.82295058.529695057.1521461744-101673120.1510308621" 
    alt="Aquatic"
    className='img-fluid'
    />   
        </Animation>
            </Col>
            <Col md='3'>
        <Animation type='fadeInUp' reveal>
        <span><h3 className='imgTitle h3-responisve text-white text-center'>DEAN RUSSO</h3></span>
 <img src="https://cdn8.bigcommerce.com/s-86394/product_images/uploaded_images/tile-russo-elephant-rt.jpg?t=1521476847&_ga=2.82295058.529695057.1521461744-101673120.1510308621" 
      alt="Dean russo"
      className='img-fluid'
      />
        </Animation>
            </Col>
            <Col md='3'>
            <Animation type='fadeInLeft' reveal>
            <span><h3 className='imgTitle h3-responisve text-white text-center'>PROTECT</h3></span>
     <img src="https://cdn8.bigcommerce.com/s-86394/product_images/uploaded_images/tile-be-my-voice-rt.jpg?t=1521476845&_ga=2.82295058.529695057.1521461744-101673120.1510308621" 
        alt="Protect"
        className='img-fluid'
        />        
            </Animation>
            </Col>
        </Row>
        </Container>
    );
}
 
export default Topcollections;