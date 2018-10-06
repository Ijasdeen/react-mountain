import React from 'react';
import {Card,CardImage,CardBody,CardTitle,CardText } from 'mdbreact';
import './product.css';
const Product = props => {
    const {name,price,description,image,id,addToCard} = props; 
    return (  
          <React.Fragment>
         
              <Card className='m-2' key={id} id='product-card'>
            <CardImage src={image} className='img-fluid' id='productcard-image'/>
        <CardBody>
            <CardTitle tag='h5'>
            {name}
            </CardTitle>
            <CardBody>
                <CardText>
           {description.substring(0,100)}....
                </CardText>
                <CardText>
                   {price}
                </CardText>
                <button className='btn btn-outline-info btn-sm' onClick={() =>addToCard(props.product)}>
                    Add to cart
                </button>
            </CardBody>
        </CardBody>
        </Card>
         
          </React.Fragment>
       );
}
 
export default Product;