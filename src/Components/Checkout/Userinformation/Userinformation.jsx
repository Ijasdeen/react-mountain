import React from 'react';
import { Input, Container, Row, Col} from 'mdbreact';
import PropTypes from 'prop-types';
import './Userinformation.css';
const Userinformation = props => {
    const { onChangeHandler, submitFormhandler } = props; 
    return ( 
         <div className='userinformation-wrapper'>
          <Container>
          <h3 className='h3-responsive font-weight-bold my-4'>Contact information</h3>
             <div className='shipping-addresswrapper'>
            <form onSubmit={submitFormhandler} autoComplete='off'>
            <div className="form-group">
               <input type='email' 
                      className='form-control' 
                      name='useremail'
                      placeholder='Contact email'
                      onChange={onChangeHandler}
                      />
               </div>
               <h4 className="h4-responsive">SHIPPING ADDRESS</h4>
            
            <Row>
                <Col md='6' xs='12' lg='6' sm='6'>
                <Input type='text'
                       group 
                       validate 
                       success='right'
                       error='wrong'
                       label='First name'
                       icon='user'
                       name='firstname'
                       onChange={onChangeHandler}
                />
                </Col>
                <Col md='6' xs='12' lg='6' sm='6'>
                <Input type='text' 
                   group
                   validate
                   success='right'
                   error='wrong'
                   label='Last name'
                   icon='user'
                   name='lastname'
                   required
                   onChange={onChangeHandler}
             />
                </Col>
            </Row>
             
            <Input type='text' 
                   group
                   validate 
                   success='right'
                   error='wrong'
                   label='Company (Optional)'
                   icon='building'
                   onChange={onChangeHandler}
                   name='companyname'
             />
            <Input type='text' 
                   group
                   validate 
                   success='right'
                   error='wrong'
                   label='Apartment,suite, etc'
                   icon='home'
                   onChange={onChangeHandler}
                   name='apartment'
                   required
            />
            <Input type='text'
                   group
                   validate
                   success='right'
                   error='wrong'
                   label='City'
                   icon='puzzle-piece'
                   onChange={onChangeHandler}
                   name='city'
                   required
             />
            <div className="text-center">
            <input type='submit' className='btn btn-outline-primary' value='Check out'/>
            </div>
            </form>
            </div>
          </Container>
       
         </div>
     );
}
 
Userinformation.propTypes = {
    onChangeHandler : PropTypes.func.isRequired, 
    submitFormhandler:PropTypes.func.isRequired
}
export default Userinformation;