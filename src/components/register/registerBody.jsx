import React, { Component } from 'react';
import regsiterB from './registration.png';
// axios use to handle get and post method in front end
import Axios from "axios";
import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import './registerStyle.css';


// chnaged into cont function to return the registration body
export default function RegisterBody(props){
    //    const navigate = useNavigate();
    // create varible for post method
    //    const [email,setEmail] = useState("");
    //    const [firstName,setFname] = useState("");
    //    const [lastName,setlname] = useState("");
    //    const [password,setPassword] = useState("");
    //    const [passwordCheck,setCheckPassword] = useState("");

    

    //   const createConsumer = ()=>{
    //       Axios.post("http://localhost:3001/createConsumer",{
    //             email,
    //             firstName,
    //             lastName,
    //             password,
    //             passwordCheck
    //       }).then((response)=>{
    //         alert("USER CREATED");
    //       });
          
    //   }
    
    let {
        handleSubmit,
        setEmail,
        setFname,
        setlname,
        setPassword,
        setCheckPassword
    } = props.registerState;

        return (
        // design as card 
        <div className='row regTop'>
        <div className="col-lg-8 shadow  border bg-white rounded regBody" >
            {/* image */}
            <div className="row regTop">
                <img className="p-3 m-5 col-lg-6 " src={regsiterB} alt="Registration" style={{width:250,height:250}}/>
                <div className='p-5 m-5 col-lg-6 '><h2>Lets
                <span style={{color:"red"}}> Get </span> Register🎁</h2>
                <h6 >If you are demanding registration before checkout,
                    <br/> you need to cease this practice immediately</h6>
                </div>
            </div>
           
            {/* registration form */}
            <div className="row " >
                <form  method='post' onSubmit={handleSubmit}
                className="d-flex justify-content-center col-lg-12" style={{color:"black",fontWeight:"bolder"}}>
                    <div className="form-row " >
                        <div className="form-group mb-3 col-lg-12 col-md-12 col-sm-12">  
                        <div className='input-group '>                
                        <span className="input-group-text">First and last name</span>
                            <input 
                            type="email" className="form-control" 
                            id="inputEmail4" placeholder="Email"
                            onChange={(event)=>{
                                setEmail(event.target.value);
                            }}
                            required={true}
                            />
                        </div>    
                        </div>

                        <div className="form-group mb-3 col-lg-12 col-md-12 col-sm-12">
                            <div className='input-group'>
                            <span className="input-group-text">First Name</span>
                            <input 
                            type="text" className="form-control" id="inputPassword" placeholder="Enter first Name"
                            onChange={(event)=>{
                                setFname(event.target.value);
                            }}
                            required={true}
                            />
                            </div>
                        </div>
                        

                        <div className="form-group mb-3 col-lg-12 col-md-12 col-sm-12">
                            <div className='input-group'>
                            <span className="input-group-text">Last Name</span>
                            <input 
                            type="text" className="form-control" id="inputPassword4" placeholder="Enter Last Name"
                            onChange={(event)=>{
                                setlname(event.target.value);
                            }}
                            required={true}
                            />
                            </div>
                        </div>

                        <div className="form-group mb-3 col-lg-12 col-md-12 col-sm-12">
                            <div className='input-group'>
                            <span className="input-group-text">Enter your password</span>
                            <input 
                            type="password" className="form-control" placeholder="Password"
                            onChange={(event)=>{
                                setPassword(event.target.value);
                            }}
                            required={true}
                            />
                            </div>
                        </div>

                        <div className="form-group mb-3 col-lg-12 col-md-12 col-sm-12">
                            <div className='input-group'>
                            <span className="input-group-text">Re-Enter your password</span>
                            <input 
                            type="password" className="form-control" placeholder="Re-Enter your Password" 
                            onChange={(event)=>{
                                setCheckPassword(event.target.value);
                            }}
                            required={true}/>
                            </div>
                        </div><br/>

                        <label style={{fontWeight:"normal"}}>
                            <small>By clicking Submit, you agree to our Terms & Conditions, <br/>Visitor Agreement and Privacy Policy.</small>
                        </label>
                        <br/><br/>
                        <button 
                        className="btn btn-primary" 
                        >Submit</button><br/><br/>
                    </div>
                </form>
            </div>

        </div>
        </div>
        // end of the body
        );
}
 
