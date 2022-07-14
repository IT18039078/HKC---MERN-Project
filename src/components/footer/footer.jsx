import React, { Component } from 'react';
import "./footer.css";
import logo from './logo.png';

class FooterPart extends React.Component {
    render() { 
        return (
        <footer className="container-fluid page-footer p-5" style={{background:"#1C6DD0"}} >
            <div className="container">
                        {/* here is the intro */}
                        <div >
                            <h1><span style={{color:"whitesmoke",justifyContent:'center'}}>Stay With</span><span style={{color:"red"}}> Us!</span></h1>
                        </div>
                        
                        {/* here is list of websites */} 
                       
                        <div className="row" >
                        {/* <div className="shadow p-3 mb-5 bg-white rounded" style={{textAlign:"center"}}>
                        <img src={logo} alt="Logo" style={{height:250,width:250}}></img>
                        </div> */}
                            
                            <ul className="col list-unstyled" style={{marginLeft:30,color:"whitesmoke"}}>
                                <li style={{fontSize:20,padding:5}}><a>About</a></li>
                                <li>Out story</li>
                                <li>Our Team</li>
                                <li>Career service</li>
                            </ul>
                            
                            <ul className="col list-unstyled" style={{color:"whitesmoke"}}>
                                <li style={{fontSize:20,padding:5}}>Company</li>
                                <li>Our Services</li>
                                <li>Client</li>
                                <li>Contact</li>
                                <li>Press</li>
                            </ul>
                            
                            <ul className="col list-unstyled" style={{color:"whitesmoke"}}>
                                <li style={{fontSize:20,padding:5}}>Resources</li>
                                <li>Blog</li>
                                <li>Newsleter</li>
                                <li>Privacy and policy</li>
                            </ul>
                        </div>
                        

                        
                        {/* here will be social media */}
                        <div style={{padding:20}}>
                            <a href="#" className="fa fa-facebook" ></a>
                            <a href="#" className="fa fa-twitter" ></a>
                            <a href="#" className="fa fa-google" ></a>
                            <a href="#" className="fa fa-youtube" ></a>
                            <a href="#" className="fa fa-instagram" ></a>
                        {/*  Close social media  */}
                        </div>

            {/* heading for copyrights */}
            <p style={{textAlign:"center",color:"whitesmoke"}}>This website is used to create birstday card and special wishes card by our own users.<br/> User have full 
                freedom to change and choose the features.<br/> Our Aims is to provide full fledge technology to create card 
                by users wishes</p>
            <h6 style={{textAlign:"center",color:"whitesmoke"}}>Copyright 1999-2022 by Refsnes Data. All Rights Reserved.</h6>
            <img src={logo} alt="Logo" style={{height:250,width:250}}></img>
            {/* close container  */}
            </div>
        </footer>
        );
    }
}
 
export default FooterPart;