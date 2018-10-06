import React, { Component } from 'react';
import { Container,Row,Col,CardGroup } from 'mdbreact';
import Product from './Product/Product';
import CustomFooter from '../CustomFooter/CustomFooter';
import firebaseDB from '../../config/firebaseDB';
 

class Products extends Component {
    constructor(props){
        super(props);
    this.database = firebaseDB.database().ref().child('products');
    
    this.state = {
         products:[],
          
      }
     
    }
    
 
componentDidMount() {
   this.fetchAllData();
}

  

    fetchAllData = () =>{ //Retrieving data from database 
      const products = this.state.products; 
      this.database.on('child_added', snap =>{
          products.push({
              id:snap.key,
              name:snap.val().productName,
              price:snap.val().productPrice,
              description:snap.val().productDesc,
              image:snap.val().productImage,
              quantity:1
          });
      })
      this.setState({ products });
    }

    //Add to cart
 addToCard = product =>{
    this.props.addTocart(product);
 
  }


    render() { 
          return (  
            <React.Fragment>
                 <Container className='my-4'>
              <Row>
                  <Col md='12'>
                  <CardGroup deck>
                {this.state.products.map(product =>{
                    return (
                       <Col md='3' xs='12' sm='4' lg='3' key={product.id}>
                        <Product 
                          id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        addToCard={this.addToCard}
                        product={product}
                        />
                       </Col>
                    )
                })}
                  </CardGroup>
                  </Col>
              </Row>
             
            </Container>
             <CustomFooter/>
            
            </React.Fragment>
        );
    }
}
 
export default Products;