 
import React from 'react';
import { Dropdown,
         DropdownToggle,
         DropdownMenu,
         DropdownItem, Fa } from 'mdbreact'; 

import PropTypes from 'prop-types';         
import './account.css';
           
const Useraccount = (props) => {
     const {userName,handleSignOut} = props;
  return (  
        <React.Fragment>
          <Dropdown>
                 <DropdownToggle nav caret><Fa icon='user' size='1x'/>&nbsp;HI {userName}</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem className='account-dropdown'>USer details</DropdownItem>
                    <DropdownItem className='account-dropdown'>Account</DropdownItem>
                    <DropdownItem onClick={handleSignOut} className='account-dropdown'>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </React.Fragment>
    );
}
 
Useraccount.propTypes= {
    userName: PropTypes.string,
    handleSignOut : PropTypes.func.isRequired
}


Useraccount.defaultProps={
    userName:'User'
}
export default Useraccount;
 