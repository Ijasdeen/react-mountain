import React, { Component } from 'react';

// <Components>
import Herosection from './Herosection/Herosection';
import Sideimages from './Sideimages/Sideimages';
import Deals from './Deals/Deals';
import Topcollections from './Topcollections/Topcollections';
import Shopforall from './Shopall/Shopforall';
import Recoproducts from './Reccomproducts/Recoproducts';
import CustomFooter from '../CustomFooter/CustomFooter';
// </Components>

class Home extends Component {
      
    render() { 
        return ( 
            <React.Fragment>
                <Herosection/>
                <Sideimages/>
                <Deals/>
                <Topcollections />
                <Shopforall/>
                <Recoproducts/>
                <CustomFooter/>
             </React.Fragment>
         );
    }
}
 

export default Home;