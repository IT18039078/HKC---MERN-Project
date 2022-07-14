import React, { useState } from 'react'; 
import SigninHome from '../components/signin/signInBody.jsx'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar/NavBar.jsx';
import { useDispatch, useStore } from 'react-redux';
import { loginAction } from '../container/action.js';
import { useNavigate } from 'react-router-dom';
import LoggedNav from '../components/NavBar/LoggedNav.jsx';

export default function SignIn(){
    
       const[email, setEmail] = useState("");
       const[password, setPassword] = useState("");
       const[errorMessage, setError] = useState("");

    const dispatch = useDispatch()
    const store = useStore()
    const history = useNavigate()

    //    handle submit handler function
    const handleSubmit = (event) =>{
        event.preventDefault();

        const userCredentails = {
            email,
            password
        }
        
        
        const login = dispatch(loginAction(userCredentails))
        login
            .then(data =>{
                history("/LHome")
            })
            .catch(error =>{
                setError(error.err)
                console.log(error.err)
            })

        console.log(store.getState())
        
    }


        return (
        <div>
            <NavBar/>
            <SigninHome loginState = {{handleSubmit, setEmail, setPassword, setError}}/>
        </div>);
    
}
 