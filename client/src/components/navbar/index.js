import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navbar = () => {
    
    return (

    <Navbar bg="black">
        <Navbar.Brand as={Link} to="/">NeoSensory</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link as= {Link} to="/" >Home</Nav.Link>
            <Nav.Link as= {Link} to="/userview/" >User View</Nav.Link>
            <Nav.Link as= {Link} to="/tableview" >Table View</Nav.Link>
        </Nav>

    </Navbar>
    )

}
export default navbar;