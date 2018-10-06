import React, { Component } from 'react';
import { Container,Row,Col,toast,ToastContainer } from 'mdbreact';
import Userinformation from './Userinformation/Userinformation';
import CustomFooter from '../../Components/CustomFooter/CustomFooter';
import Shoppingcart from '../../Components/Checkout/DisplayShoppingcart/Shoppingcart';
import firebaseDB from '../../config/firebaseDB';
import PropTypes from 'prop-types';
class Checkout extends Component {
    state = {  
        firstname:null,
        lastname:null, 
       apartment:null,
        companyname:null,
        city:null,
        useremail:null
    }

   onChangeHandler = e =>{
    this.setState({[e.target.name] : e.target.value});
   }

   submitFormhandler = e =>{
       e.preventDefault();
     let firstName = this.state.firstname; 
     let lastname = this.state.lastname; 
     let apartment = this.state.apartment; 
     let companyName = this.state.companyname; 
     let city = this.state.city; 
     let useremail = this.state.useremail; 

     const { selectedProducts } = this.props; 
    const databaseConnection = firebaseDB.database().ref(); 
    const database = databaseConnection.child('customer_details');
    let User =  database.push({
        firstName:firstName,
        lastname:lastname,
        apartment:apartment,
        companyName:companyName, 
        city:city,
        useremail:useremail, 
     })

     databaseConnection.child('ordered_products')
     .push().set({
         Products : selectedProducts,
         userid: User.key
     });

     toast.info('Successfully checked out',{
        autoClose:2000
    });
     
    this.props.resetProducts(1);
   
   }
   

     render() { 
    const { selectedProducts } = this.props; 
        return (
            <React.Fragment>
                <Container fluid>
             <Row>
                <Col md='6' sm='6' xs='12' lg='6'>
                <Userinformation 
                        onChangeHandler={this.onChangeHandler}
                        submitFormhandler={this.submitFormhandler}
                        />
                </Col>
                <Col md='6' sm='6' xs='12' lg='6'>
               <Shoppingcart selectedProducts={selectedProducts}/>
                </Col>
            </Row>
            <ToastContainer/>
            </Container>
            <CustomFooter/>
            </React.Fragment>
          );
    }
}

Checkout.propTypes = {
    onChangeHandler:PropTypes.func.isRequired,
    submitFormhandler:PropTypes.func.isRequired,
    selectedProducts:PropTypes.array.isRequired
}
 
export default Checkout;