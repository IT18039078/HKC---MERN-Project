
import React, { Component } from 'react';
import loginBB from './login.png';
import './signIn.css';
import ErrorAlert from './error';

export default function SigninHome(props){

        

        let {
            handleSubmit,
            setEmail, 
            setPassword,
            errorMessage,
            setError
        } = props.loginState;
    
        
        return (
           <div className="row sigTop" style={{marginTop:100}}>
            <div className="shadow col-lg-8 border p-5 bg-white rounded" >
                <div className='row sigTop'>
                <h3>Welcome Back!!</h3>
                {/* this is for the image */}
                <div className="col-lg-6 col-md-12" >
                    <img src={loginBB} alt="signin" style={{height:250,width:250}}/>
                </div>

                {/* this is for the sign page login */}
                <div className="col-lg-6 col-md-12" >
                    <h4>Sign In</h4><br/>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Email" >Email address</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div><br/>
                        <div className="form-group">
                            <label htmlFor="passsword" >Password</label>
                            <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="signInPass" placeholder="Password"/>
                        </div><br/>

                        {
                            errorMessage && <ErrorAlert errorMessage={errorMessage} clearError={()=>{setError(undefined)}}></ErrorAlert>
                        }
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form><br/>
                    <h6> 😊Do not have accoutn? <a style={{color:"blue"}} href="#">Creat Account</a></h6>
                    <h6>🤔If you Forgot your passwors? <a style={{color:"blue"}} href="#">Click here</a></h6>
                </div>
                </div>
            </div>
            </div>
        );

}
 