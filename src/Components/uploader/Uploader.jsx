import React, { Component } from 'react';
import { Container,Row,Col,Input,toast,ToastContainer } from 'mdbreact';
import firebaseDB from '../../config/firebaseDB';

class Uploader extends Component {
    constructor(){
        super();
        this.state = {  
            data:[],
            name:null,
            price:null,
            description:null,
            image:null,
            progress:0
        }
    this.storage = firebaseDB.storage();
    this.database = firebaseDB.database().ref().child('products');
    }

  onChangeHandler = e =>{
    this.setState({[e.target.name] : e.target.value});
  }

    handleSubmit = e =>{
        e.preventDefault();
        let productName = this.state.name; //Calling name from state
        let productPrice = this.state.price; //Calling price from state
        let productDesc = this.state.description; //Calling desc from state
        let productImage = this.state.image; // Calling image from state
       
    /*this.storage => This is initialized in constructor for saving images in firebase*/  
    /** We are saving photos in (products/image) */
    this.storage.ref(`products/${productImage.name}`).put(productImage)
      .on('state_changed', 
      snapshot =>{
          //Setting progress bar to detuct percentage
          let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
          this.setState({ progress });
      },
      error =>{
          //If error found
          toast.error(error.message);
      },() =>{
          //If success

        /**Once successfully image is uploaded, we are retrieving image url 
         * and put into the real time database for future use
         * 
         */
         this.storage.ref('products').child(productImage.name).getDownloadURL()
         .then(url =>{
           
             // if url found => Save all data into database
             let downloadedUrl = url; 
             this.database.push().set({
               productName:productName,
               productPrice:productPrice,
               productDesc:productDesc,
               productImage:downloadedUrl
             });
             toast.success('Saved successfully');
             this.myform.reset();
             
         });
      })
      
        
     }

     onChangeFileHandler = event =>{
        this.setState({image:event.target.files[0]});
     }


    render() { 
        return (
            <Container>
               <Row>
                   <Col md='6'>
                   <ToastContainer/>
                    <form onSubmit={this.handleSubmit} autoComplete='off' ref={(el) => this.myform = el}>
                    <Input type='text' 
                           label='Enter your name'
                           validate 
                           success='right'
                           error='wrong'
                           required
                           group
                           icon='user'
                           name='name'
                            onChange={this.onChangeHandler}

                    />
                    <Input type='text' 
                           label='Enter your price'
                           validate
                           success='right'
                           error='wrong'
                           required
                           group
                           icon='doller'
                           name='price'
                           onChange={this.onChangeHandler}
                    />
                    <Input type='text' 
                           label='Enter your description'
                           validate
                           success='right'
                           error='wrong'
                           required
                           group
                           name='description'
                           onChange={this.onChangeHandler}
                    />
                    <Input type='file' 
                           required
                           success='right'
                           error='wrong'
                           group
                           onChange={this.onChangeFileHandler}
                              />
                    <progress value={this.state.progress} max={100}/>
                    <div className='text-center'>
                    <input type='submit'  value='Submit data' className='btn btn-outline-info btn-block'/>
                    </div>
                    </form>
                   </Col>
               </Row>
            </Container>
          );
    }
}
 
export default Uploader;