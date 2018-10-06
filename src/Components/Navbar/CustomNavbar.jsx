import React, { Component } from 'react';

import {Container, Navbar,  NavbarNav, NavbarToggler, Collapse, NavItem, NavLink  } from 'mdbreact';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    state = { 
        collapse:false,
        isWideEnough:false
     }

  onClick = () =>{
      this.setState({
          collapse:!this.state.collapse
      })
  }

    render() { 
        return (  
            <Container fluid className='main-wrapper'>
             <Navbar className='navbar-wrapper' dark expand="md" scrolling>
                  
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <Container>
                        <NavbarNav>
                          <NavItem>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/products">Products</NavLink>
                          </NavItem>
                            </NavbarNav>
                        </Container>
                         
                    </Collapse>
                </Navbar>
            </Container>
        );
        
    }
}
 
export default CustomNavbar;