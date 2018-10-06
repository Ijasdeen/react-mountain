import React, { Component } from 'react';
import { Container,Modal,ModalBody,Fa,Input,toast,ToastContainer} from 'mdbreact';

import firebaseAuth from '../../../config/firebaseDB';
 


class Signinmodal extends Component {
    state = {
        openModal:false,
        email:null,
        password:null,
        loggedIn:false
      }

 openModal = () =>{
     this.setState(prevState =>{
         return {openModal:!prevState.openModal}
     });
 }

inputChangeHandler = e =>{
   this.setState({[e.target.name] : e.target.value});
}

 loginHandler = e =>{
     e.preventDefault();
  const email = this.state.email; 
  const password = this.state.password; 


firebaseAuth.auth().signInWithEmailAndPassword(email,password)
.then(() =>{
    toast.success('Successfully logged in');
    this.setState({openModal:false});
    
})
.catch(error => toast.error(error.message));


 }

    render() { 
        return (  
             <React.Fragment>
                 <span className='green-text authontication-text' onClick={this.openModal}><b>LOGIN</b></span><ToastContainer/>
               <Modal isOpen={this.state.openModal} toggle={this.openModal} className='cascading-modal'>
                <div className='modal-header primary-color white-text'>
                <Fa icon='user-circle-o' size='2x'/>&nbsp; 
                <h3 className="text-center h3-responsive title">LOGIN </h3>
                <button className="close" onClick={this.openModal}>&times; </button>
                </div>
            <ModalBody>
                <Container>
                    <form autoComplete='off' onSubmit={this.loginHandler}>
                    <Input 
                        type='email'
                        group
                        validate
                        success='right'
                        error='wrong'
                        required
                        name='email'
                        icon='envelope'
                        size='sm'
                        label='Enter your email'
                        onChange={this.inputChangeHandler}
                    />
                  <Input 
                        type='password'
                        group
                        validate
                        success='right'
                        error='wrong'
                        required
                        name='password'
                        icon='lock'
                        size='sm'
                        label='Enter your password'
                        onChange={this.inputChangeHandler}
                  />
                <div className="text-center white-text">
                <input type="submit" value='LOGIN' className='btn btn-outline-info'/>
                
                </div>
                    </form>
                </Container>
            </ModalBody>
            </Modal>
             

             </React.Fragment>
        );
    }
}
 
export default Signinmodal;