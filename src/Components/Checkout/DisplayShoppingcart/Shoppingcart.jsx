import React from 'react';
import { Card, CardBody, Container, Col } from 'mdbreact';
import PropTypes from 'prop-types';
import './Shoppingcart.css';
const Shoppingcart = props => {
  const { selectedProducts } = props; 
  let subtotal = 0; 
 
     return ( 
        <React.Fragment>
        <Container className='sticky-top' id="shoppingcart-mainwrapper">
            <div className='row justify-content-md-center'>
                <Col md='8'>
                <Card className='my-4' id='checkout-shoppingcart'>
            <div className="card-header">
            Order summery
            </div>
            <CardBody>
           <Container>
            {selectedProducts.length===0 && <h4 className='h4-responsive text text-danger text-center'>No products on shopping cart</h4>}
          <div id='product-listwrapper'>
          {selectedProducts.map(product =>{
            subtotal +=(product.price.substring(1,6) * product.quantity);

                return(
            <div className="d-flex flex-row" key={product.id}>
           <div className="p-2">
            <img src={product.image} alt={product.name} className='img-fluid product-image'/>
            &nbsp; {product.name}
           </div>
           <div className="ml-auto">
           <span className='badge badge-primary'>{product.quantity}</span>&nbsp;X&nbsp; 
           {product.price}
           </div>
            </div>
                )
            })}
              </div> 
            <hr/>
          <div className='d-flex flex-row justify-content-center'>   
           <div className="p-2">
           <input type='text' 
                    className='form-control' 
                    id='discount-field'
                    placeholder='Discount' />
           </div>
           <div>
           <button className='btn btn-outline-default'>APPLY</button>
            </div>
             </div>
             <div className="d-flex flex-row my-4">
             <div className="p-2">SUBTOTAL</div>
             <div className="p-2 ml-auto">${subtotal.toFixed(2)}</div>
             </div>
           </Container>
            </CardBody>
        </Card>
                </Col>
            </div>
        </Container>
        </React.Fragment>
     );
}
 
Shoppingcart.propTypes ={
    selectedProducts : PropTypes.array.isRequired
}


export default Shoppingcart;