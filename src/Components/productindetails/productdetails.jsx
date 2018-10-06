import React, { Component } from 'react';
import { Container } from 'mdbreact'; 

class Productdetails extends Component {
    state = {  }
    render() { 
        const {name} = this.props.match.params; 
        return (  
            <Container>
              Hello {name}
            </Container>
        );
    }
}
 

export default Productdetails;