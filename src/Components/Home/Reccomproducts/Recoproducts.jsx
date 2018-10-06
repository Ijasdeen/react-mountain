import React from 'react';
import { Container,
         Row,
         Col,
         Card,
         CardImage,
         CardBody,
         CardText,
         Button,
         CardGroup,
         Fa,Animation  } from 'mdbreact';
 import './Reccomproducts.css';
const Recoproducts = () => {
    return ( 
        <Container className='recoproducts-wrapper'>
               <Row>
        <Col md='12' lg='12' xs='12' sm='12'>
       <p className='lead text-center h3-responsive'>RECCOMMENED PRODUCTS</p>
        <Animation type='fadeInLeft' reveal>
        <CardGroup deck>
        <Card>
            <CardImage src='https://cdn8.bigcommerce.com/s-86394/images/stencil/500x659/products/18032/111187/59_5958_web__21898.1532537334.jpg?c=2' 
            className='img-fluid' 
           overlay='green-slight'
            alt='Card image top'
            />
        <CardBody>
            <CardText>
            The Mountain Barista Stainless Steel Travel Mug - Flag-Bearing Eagle
            </CardText>
            <CardText>
                <small>$25.00</small>
            </CardText>
        <Button outline color='primary' size='sm'>Quick view
        &nbsp;<Fa icon='search' size='lg'/></Button>
        </CardBody>
        </Card>
        {/*Card ends*/}

        <Card>
            <CardImage src='https://cdn8.bigcommerce.com/s-86394/images/stencil/500x659/products/18061/111245/59_6182_web__16280.1532537352.jpg?c=2'
                       className='img-fluid'
                       overlay='green-slight'
                       alt='Card image top'
            />
            <CardBody>
                <CardText>
                The Mountain Barista Stainless Steel Travel Mug - Lady Liberty Hanukkah
                </CardText>
                <CardText className='grey-text'>
                    <small>$25.00</small>
                </CardText>
                <Button outline color='primary' size='sm'>
                Quick view&nbsp;<Fa icon='search' size='lg'/></Button>
            </CardBody>
        </Card>
        {/*End card*/}


        <Card>
          <CardImage src='https://cdn8.bigcommerce.com/s-86394/images/stencil/500x659/products/18072/111273/10_6173_web__02269.1532613873.jpg?c=2'
                    className='img-fluid'
                    overlay='green-slight'
                    alt='Alt image'
          />
          <CardBody>
            <CardText>
            The Mountain Adult Unisex T-Shirt - New Meeting of the Clan Seekers
            </CardText>
            <CardText>
                <small>$22.00</small>
            </CardText>
        <Button outline color='primary' size='sm'>Quick view
        &nbsp;<Fa icon='search' size='lg'/>
        </Button>
          </CardBody>
        </Card>
        {/*Card ends*/}
        
        <Card>
            <CardImage src='https://cdn8.bigcommerce.com/s-86394/images/stencil/500x659/products/17994/111115/53_5923_0237_web__80045.1532529529.jpg?c=2'
                    className='img-fluid'
                    alt='header image'
                    overlay='green-slight'
            />
        <CardBody>
            <CardText>
            The Mountain Kid's Hoodie Sweatshirt - Fire Dragon
            </CardText>
            <CardText><small>$35.00</small></CardText>
        <Button outline color='primary' size='sm'>
        Quick view&nbsp;<Fa icon='search' size='lg'/>
        </Button>
        </CardBody>
        
        </Card>
          </CardGroup>
        </Animation>
          </Col>

            </Row>
         </Container>
     );
}
 
export default Recoproducts;