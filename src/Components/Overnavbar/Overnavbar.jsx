import React,{Component} from 'react';

import {Container} from 'mdbreact';
 
import Signupmodal from './Signup/Signupmodal';
import Signinmodal from './Signinmodal/Signinmodal';
import firebaseAuth from '../../config/firebaseAuth';
import firebaseDB from '../../config/firebaseDB';
import Useraccount from './account/Useraccount';
import PropTypes from 'prop-types'; 
import Cart from './shoppingcart/cart';
import './Overnavbar.css';
 
class Overnavbar extends Component{
   
  constructor(props){
      super(props);
     this.database = firebaseDB.database().ref().child('userlogin');
     this.state = {
        loggedIn:false,
        userData:[],
        userName:null,  
      }
   
  }

   componentDidMount(){
       this.authListener();

    }

      authListener = () =>{
    firebaseAuth.auth().onAuthStateChanged(user =>{
         if(user) {
            sessionStorage.setItem('user',user.uid);
           const previousData = this.state.userData;
             
            const answer =this.database.orderByChild('email').equalTo(user.email).limitToFirst(1);
           answer.on('child_added', snap =>{
               this.setState({userName:snap.val().name});
               previousData.push(snap.val());

           })
           this.setState({userData:previousData});
              this.setState({loggedIn:true});
            
        }
        else {
            sessionStorage.setItem('user',null);
            this.setState({loggedIn:false});
        }
    })
   }
   
    handleSignOut = () =>{
      firebaseAuth.auth().signOut();
    }

      

      render(){
        return(
            <Container fluid>
              <Container>
              <div className='d-flex flex-row'>
           <div className='picture-wrapper'>
            <img src="../../Images/website-logo.png" 
                alt="Website logo" 
                className='img-fluid'/>
            </div>
            <div className='p-2 ml-auto shopping-cartwrapper'>
            {this.state.loggedIn ? (
                <React.Fragment>
                    <Useraccount 
                               handleSignOut={this.handleSignOut}
                               userName={this.state.userName}
                               />
                    &nbsp;
                </React.Fragment>
            ) :
            (<React.Fragment><Signupmodal/>&nbsp;OR&nbsp;<Signinmodal/></React.Fragment>)}
                 &nbsp;
                 <Cart totalCount = {this.props.totalCount}
                      fetchSelectedProducts={this.props.fetchSelectedProducts}
                      deletePorduct={this.props.deletePorduct}
                      handleIncrement={this.props.handleIncrement}
                      handleDecrement={this.props.handleDecrement}
                    
                    />
                </div>
              </div>
             
            </Container>
            </Container>
        )
    }
}

Overnavbar.propTypes = {
    fetchSelectedProducts:PropTypes.array.isRequired,
    totalCount:PropTypes.number.isRequired,
    deletePorduct:PropTypes.func.isRequired,
    handleIncrement:PropTypes.func.isRequired,
    handleDecrement:PropTypes.func.isRequired
}

 
export default Overnavbar;