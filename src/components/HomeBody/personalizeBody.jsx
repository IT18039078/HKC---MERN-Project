import React, { Component, useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import {Navbar, Nav,FormControl,Form, Button, Container} from 'react-bootstrap';
import data from './data';
import {useSelector} from 'react-redux';
//import the responsiveness css sheet

// import 
export default function PersonalizeBody(){

    // THIS WHOLE CODE IS USED TO CHECK WHETHER THE USER ALREADY 
    // SIGNED IN OR NO
    // IF NOT THIS WILL REDIRECT TO SIGN IN PAGE
    const route = () =>{
        const token = localStorage.getItem('x-access-token')
        return token ? true: false
    }
       const user = useSelector(state => state.isLoggedIn)   
       const history = useNavigate()
       useEffect(()=>{
            if(!route()){
                history("/SignIn")
            }
       },[route(), history])




    // use navigate to redirect to the details page with the data 
    const navigate = useNavigate ();

    // create function to call with particular item
        const handler = (item) => {
        
       
        //Redirect to another route
        navigate( "/CardDetailsMain",
            {state:{
                id: item.id,
                price:item.price,
                title: item.title,
                image: item.img,
                color1: item.color1,
                color2: item.color2,
                color3: item.color3,
                color4: item.color4,
                color5: item.color5,
            }}
        ) 
        }


    const [filter, setFilter] = useState('');
    const searchText = (event)=>{
        setFilter(event.target.value)
    }

    let dataSearch = data.PCardData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

        return (
            <div style={{marginTop:100}}>
                <div className="space"></div>
                    
                    <Form className='d-flex justify-content-end' style={{width:400,marginLeft:'60%', marginBottom:50}}>
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={filter}
                        onChange={searchText.bind(this)}
                        />
                        <Button >Search</Button>
                    </Form>
                {/* Card details by their occation's*/}
            {/* 1 - birthday */}
            
            <div className="Container ">
                <div className='row d-flex justify-content-center '>

                {dataSearch.map((item, index)=>{
                        
                        if(item.id === 0){
                            return(
                            <div>
                                <h4>Greeting Card</h4>
                            </div>
                            )
                        }else if(item.id === 100){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Valentiens Card</h4>
                                </div>
                                )
                        }else if(item.id === 1000){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Explosion Card </h4>
                                </div>
                                )
                        }else if(item.id === 19){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Aniversary scrap</h4>
                                </div>
                                )
                        }else if(item.id === 25){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Boss baby scrap </h4>
                                </div>
                                )
                        }else if(item.id === 30){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>BEE scrap</h4>
                                </div>
                                )
                        }else if(item.id === 35){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Brithday scrap</h4>
                                </div>
                                )
                        }

                        
                        return(
                            
                            <div className='col-lg-3 col-md-6 col-xs-12 shadow rounded mb-5 p-2 m-3 occCard'>
                                <div>
                                    <h5>{item.title}</h5>
                                    <img src={item.img} alt="" className="occImg"></img>
                                <h6 className='cprice'>{item.price}</h6>
                               
                                        <button className='btn btn-info' onClick={()=>handler(item)}>view</button>
                                
                                
                                </div>
                            </div>
                          
                            ) //end return

                    })}
              
                </div>
                </div>
            </div>
        );
    
}
