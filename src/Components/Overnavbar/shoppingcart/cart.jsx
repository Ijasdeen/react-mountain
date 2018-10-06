import React, { Component } from 'react';
import { Container,Modal,ModalBody,Fa } from 'mdbreact';
import { Link } from 'react-router-dom';
 import PropTypes from 'prop-types';

import './cart.css';

class Cart extends Component {
    state = {  
        modal:false,
        
    }

   toggle = () =>{
    this.setState(prevState =>{
        return {modal:!prevState.modal}
    })
    
   }

   //This function is used to close modal
   goToCheckout = () =>{
       this.setState({modal:false}); 
   }
  

    render() { 

  const { fetchSelectedProducts,
          totalCount,
          deletePorduct,
          handleIncrement,
          handleDecrement } = this.props;

     let totalofProducts = 0; 
    const emptyImage = 'https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png';
    const cartImg = 'https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png';   
    return ( 
            <Container>
                <a onClick={this.toggle}>
               <img src={cartImg} alt='cart' className='img-fluid'/>
               &nbsp; 
                <span className='badge badge-success'>{totalCount}</span>
                 </a>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className='cascading-modal'>
            <div className="modal-header warning-color white-text">
            <h4 className="h4-responsive title">
            <strong><Fa icon='shopping-cart'/></strong> Shopping cart
            </h4>
            <button onClick={this.toggle} className='close'> X </button>
            </div>
            <ModalBody>
                <div>
        {totalCount!==0 ? (
          <div>
          {fetchSelectedProducts.map(product =>{
              totalofProducts+=(product.price.substring(1,6) * product.quantity);
              return(
                  <div className='d-flex flex-row' key={product.id}>
                  <div className="p-2">
                  <img src={product.image} className='img-fluid' id='cart_image' alt={product.name}/>
                  </div>
                   <div className='p-2'>
                  <span>{product.name}</span> <br/>
                  <button className='btn btn-outline-info btn-sm'
                          onClick={() =>handleIncrement(product)}
                  ><Fa icon='plus'/></button>
                  <button className="btn btn-outline-indigo btn-sm"
                          onClick={() =>handleDecrement(product)}
                  ><Fa icon='minus'/></button>
                  </div>
                  <div className='p-2'>
                  <span className='text text-right primary-text'>
                  {product.quantity} X {product.price}
                  </span>
                  </div>
                   <div>
                   <button className='btn btn-outline-danger btn-sm'
                           onClick={() =>deletePorduct(product)}
                   ><Fa icon='trash'/></button>  
                  </div>
                  <hr/>
                  </div>
            )
         
          })}
         <div className="text-left font-weight-bold p-2">Total : ${totalofProducts.toFixed(2)}</div>
         <div className="text-right">
          <Link to='/Checkout'>
          <button className='btn btn-outline-primary btn-block' onClick={this.goToCheckout}>Check out</button>
           </Link>
          </div>
          </div>
        ):<div className='p-2'>
        <img src={emptyImage} alt='Empty' className='img-fluid'/><br/>
        <span className='text-muted font-weight-bold h3-responsive'>Your cart is empty</span>
        </div>}
           </div>
            </ModalBody>
            </Modal>
            </Container>
         );
    }
}
 
Cart.propTypes = {
    fetchSelectedProducts:PropTypes.array.isRequired,
    totalCount:PropTypes.number.isRequired,
    deletePorduct:PropTypes.func.isRequired,
    handleIncrement:PropTypes.func.isRequired,
    handleDecrement:PropTypes.func.isRequired
}

export default Cart;