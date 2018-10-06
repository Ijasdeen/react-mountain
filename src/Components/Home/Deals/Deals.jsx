import React from 'react';
import { Container,Fa} from 'mdbreact';
const Deals = () => {
    return ( 
        <Container className='my-3'>
            <div className='d-flex justify-content-center  font-weight-bold'>
            <div>
            <p className='lead h4-responsive'>DEALS, NEWS AND OTHER FUN GOODIES&nbsp;</p>
            </div>
            <div className='justify-align-right lead h4-responsive'>
            HINT, HINT...LOOKING FOR MORE ?&nbsp; 
            <a href="https://www.facebook.com/themountain" 
                target='_blank'
                rel='noopener noreferrer'
                >
            <Fa icon='facebook'/>
            </a>&nbsp;
            <a href="https://twitter.com/mountainartwear" target='_blank'
                rel='noopener noreferrer'
             >
            <Fa icon='twitter'/>
            </a>&nbsp;
            <a href="https://www.instagram.com/mountainartwear/"
            target='_blank'
            rel='noopener noreferrer'
             >
            <Fa icon='instagram'/>
            </a>&nbsp;
            <a href='https://www.pinterest.com/themountain/?redirected=1'
                rel='noopener noreferrer'
                target='_blank' >
            <Fa icon='pinterest'/>
            </a>&nbsp;
            </div>
             
            </div>
        </Container>
     );
}
 
export default Deals;
