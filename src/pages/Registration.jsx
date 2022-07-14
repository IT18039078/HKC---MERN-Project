import React, { Component } from 'react';

import { useState, useEffect } from 'react';
import RegisterBody from '../components/register/registerBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar/NavBar';

import { registerAction } from '../container/action';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';

export default function Registration(){
        // create varible for post method
       const [email,setEmail] = useState("");
       const [firstName,setFname] = useState("");
       const [lastName,setlname] = useState("");
       const [password,setPassword] = useState("");
       const [passwordCheck,setCheckPassword] = useState("");

       const dispatch = useDispatch()
       const history = useNavigate ()

       //    on submit fucntion to handle the post 
    const handleSubmit = (event) =>{
        event.preventDefault();

        const newUser = {
            email,
            firstName,
            lastName,
            password,
            passwordCheck
        }

        
        const validate  = dispatch(registerAction(newUser));
        validate
            .then(data=>{
                history("/SignIn")
            })
            .catch(error=>{
                console.log(error)
            })
        
        // console.log(newUser);
    }


    let registerData ={
        handleSubmit,
        setEmail,
        setFname,
        setlname,
        setPassword,
        setCheckPassword
    }
     
        return (
            <div>
                <NavBar/>
                <RegisterBody registerState ={registerData}/>
            </div>
        )

}
 