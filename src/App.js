import React, { Component } from 'react';

import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Uploder from './Components/uploader/Uploader';
import Checkout from './Components/Checkout/Checkout';

import CustomNavbar from './Components/Navbar/CustomNavbar'; 
import Overnavbar from './Components/Overnavbar/Overnavbar';
import FreeshippingMessage from './Components/FreeshippingMessage/FreeshippingMessage'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { toast, ToastContainer} from 'mdbreact';
 
import './App.css';
 

//https://ecommerce-6dfb3.firebaseio.com/

class App extends Component {

  state={
    totalCount:0,
    selectedProducts:[],
     
  }

  takeTotalCount = count =>{
     let totalCount = count
     this.setState({ totalCount });
  } 

 
resetProducts = data =>{
  let passedData = data; 
 passedData===1 && this.setState({selectedProducts:[]});
}


 addTocart = product =>{
  const selectedProducts = this.state.selectedProducts; //Initializing selectedproducts from state 
  const check = selectedProducts.some(pr => pr.id===product.id); //Filter and take product which matches with clicked product
  let index = selectedProducts.findIndex(prIndex => prIndex.id===product.id); //Finding index of clicked product
   if(check){
     selectedProducts[index].quantity++; //Increasing value, if product is already in cart 
     this.setState({ selectedProducts });//Updating to state; 
     toast.info(' ⓘ Quantity increased', {
       position:'bottom-right'
     });
   }
   else {
     selectedProducts.push(product); // If product does not exist in cart, product will be added
     this.setState({ selectedProducts }); //Updating to state 
     toast.success('(✔) Added successfully',{
       position:'bottom-right'
     });
   }
 

 }

 
deletePorduct = product =>{ 
   const selectedProducts = [...this.state.selectedProducts]; //Cloning product
   const index = selectedProducts.indexOf(product); //Finding current index; 
    selectedProducts[index].quantity = 1; //Reseting quantity as 1 -> if not, it would take previous quantity too
   const fileredProduct = selectedProducts.filter(p => p.id!==product.id); //Filter current object 
   this.setState({ selectedProducts: fileredProduct }); //Update it . 
  }

handleIncrement = product =>{
 const selectedProducts = [...this.state.selectedProducts]; //Cloning all products 
const index = selectedProducts.indexOf(product); //Finding index of current product
 selectedProducts[index].quantity++; //Increasing value of the product 
  this.setState({ selectedProducts }); //Update it 
}


handleDecrement = product =>{
const selectedProducts = [...this.state.selectedProducts]; //Cloning all selected products
const index = selectedProducts.indexOf(product); //Find index via clicked product
selectedProducts[index].quantity >1 && //If quantity is greater than 1 only 
selectedProducts[index].quantity-- &&  // Decrease quantity of selected product
this.setState({ selectedProducts }); //Set to state 

}

   render() {
     return (
      <Router>
        <div>
        <ToastContainer
            autoClose={2000}
            />
          <header>
      <Overnavbar totalCount={this.state.selectedProducts.length}
      fetchSelectedProducts={this.state.selectedProducts}
      deletePorduct={this.deletePorduct}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
      
      />
        <CustomNavbar/>
        <FreeshippingMessage/>
        
        </header>
       <Route exact path='/' strict component={Home}/>
       <Route exact path='/products' strict render={() => 
       <Products 
          takeTotalCount={this.takeTotalCount}
          selectedProducts={this.state.selectedProducts}
          addTocart={this.addTocart}
          />}/>
       <Route exact path='/Uploder' strict  component = {Uploder}/>
        <Route exact path='/Checkout' strict render = {() =>{
         return <Checkout 
                    selectedProducts={[...this.state.selectedProducts]}
                    resetProducts = {this.resetProducts}
                    />
        }}/>
         </div>
      </Router>
    );
  }
}

export default App;
