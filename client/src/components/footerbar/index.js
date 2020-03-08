import React from 'react';
import { MDBFooter, MDBContainer } from 'mdbreact';
import '../style/index.css';

const footerbar = () => {
    return (
        <MDBFooter className="footer">
            <MDBContainer fluid>
                &copy; Copyright: Neosensory
            </MDBContainer>
           
        </MDBFooter>
    );
}
export default footerbar;
    