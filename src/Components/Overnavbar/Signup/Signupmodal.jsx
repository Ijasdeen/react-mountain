import React, { Component } from 'react';
import { Container,Modal,ModalBody,Input,Fa,toast,ToastContainer } from 'mdbreact';
 import firerbaseDB from '../../../config/firebaseDB';
import firebaseAuth from '../../../config/firebaseDB';


class Signupmodal extends Component {
 
    constructor(){
        super();

        this.state = {  
            isOpen:false,
            username:null,
            useremail:null,
            userpassword:null,
            useraddress:null,
            userphonenumber:null
       }
                    //We are initializing firebase into constructor
    this.database =firerbaseDB.database().ref().child('userlogin'); //firebase for databae
    this.authontication= firebaseAuth.auth();  // firebase for authontication
    }
    
 
   openModal = () =>{
   this.setState(prevState =>{
       return {isOpen:!prevState.isOpen}
   })
   }

   onChaneHandler = e =>{
       this.setState({[e.target.name] :e.target.value});
  }

   handleSubmit = e =>{
       e.preventDefault();
    let name = this.state.username; 
    let email = this.state.useremail; 
    let password = this.state.userpassword;
    let address = this.state.useraddress; 
    let phone = this.state.userphonenumber; 
    
    this.authontication.createUserWithEmailAndPassword(email,password)
    .then(() =>{
       this.database.push().set({
            name:name,
            email:email,
            password:password,
            address:address,
            phone:phone
        })
      toast.success('Successfully registered');
    
      this.setState({isOpen:false});

    }).catch(error => toast.error(error.message));

 

   }


    render() { 
        return ( 
            <React.Fragment>
                <ToastContainer/>
                 <span className='green-text authontication-text' onClick={this.openModal}><b>REGISTER</b></span>
               <Modal isOpen={this.state.isOpen} toggle={this.openModal}  className="cascading-modal">
                <div className='modal-header info-color white-text'>
                <Fa icon='sign-in' size='2x'/>&nbsp; 
               <h3 className="h4-responsive text-center title">SIGN IN </h3>
               <button className="close" onClick={this.openModal} type='button'>
               &times; 
               </button>
                </div>
                <ModalBody>
                 <Container className='grey-text'>
                     <form autoComplete='off' onSubmit={this.handleSubmit}>
                <Input type='text' 
                       size='sm' 
                       label='Enter your name'
                       validate
                       success='right'
                       error='wrong'
                       icon='user'
                       group
                       name='username'
                       onChange={this.onChaneHandler}
                       
                       />
                <Input type='email'
                       size='sm'
                       label='Enter your Email'
                       validate 
                       success='right'
                       error='wrong'
                       group
                       name='useremail'
                       icon='envelope'
                         onChange={this.onChaneHandler}
                       />
                <Input type='password'
                       size='sm'
                       label='Enter your password'
                       validate
                       success='right'
                       error='wrong'
                       group
                       name='userpassword'
                       icon='lock'
                         onChange={this.onChaneHandler}
                    />
               <Input type='text'
                      size='sm'
                      label='Enter your address'
                      validate
                      success='right'
                      error='wrong'
                      group
                      name='useraddress'
                      icon='home'
                       onChange={this.onChaneHandler}
               />
               <Input type='tel'
                      size='sm'
                      label='Enter your mobile number'
                      validate 
                      success='right'
                      error='wrong'
                      group
                      name='userphonenumber'
                      icon='phone'
                       onChange={this.onChaneHandler}
               />
               <div className="text-center">
               <input type='submit' value='Register' className='btn btn-outline-success'/>
               </div>
                     </form>
                 </Container>
                </ModalBody>
                   </Modal>   
                 
            </React.Fragment>
         );
    }
}
 
export default Signupmodal;