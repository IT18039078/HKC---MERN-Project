import React, { Component } from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,FormControl,Form, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBar extends Component {

    //here we will code the nav bar and return 
    render() { 
        //the nav bar code section start here
        return (
            <div>
            <Navbar fixed="top" expand="lg" className='NavMain shadow p-3 mb-5 bg-white rounded'>
                <Container fluid>
                    <Navbar.Brand className="links brands" href="#" style={{color:'black'}}><span style={{color:"red"}}>HK</span>Crafterina</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto  my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link className="links m-1" as={Link} to={"/"} style={{color:"black"}}>Home</Nav.Link>
                        <Nav.Link className="links m-1" as={Link} to={"/Personalize"}  style={{color:"black"}}>Personalize</Nav.Link>
                        {/* <Nav.Link className="links m-1" as={Link} to={"/CardDetailsMain"}  style={{color:"black"}}>Card Details</Nav.Link> */}
                        <Nav.Link className="links m-1" as={Link} to={"/CardDesign"} style={{color:"black"}} >Card edit</Nav.Link>
                        <Nav.Link className="btn  m-1" as={Link} to={"/Registration"} style={{color:"whitesmoke",background:'#1C6DD0'}} >Regiter</Nav.Link>
                        <Nav.Link className="btn  m-1" as={Link} to={"/SignIn"} style={{color:"whitesmoke",background:'#1C6DD0'}} >Sign In</Nav.Link>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        );
    }
}
 
export default NavBar;