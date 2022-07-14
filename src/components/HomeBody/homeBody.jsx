import React, { Component, useState } from 'react';

import {Navbar, Nav,FormControl,Form, Button, Container} from 'react-bootstrap';
import message from './message.png';
import happyE from './happyE.png'
import sframe from './slider2Frame.jpg';
import smemories from './memories3.gif';
import smessage from './chatbot.gif';
import { useNavigate  } from "react-router-dom";

import {
    Link
  } from "react-router-dom";
import "./homeBody.css";
import data from './hdata';

const HomeBody = () =>{
        
        const navigate = useNavigate ()
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
            setFilter(event.target.value);
        }

        let dataSearch = data.CardDetails.filter(item=>{
            return Object.keys(item).some(key=>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });

        return (
        <div >
            
                    <div className="space"></div>
                    
                    <Form className='d-flex justify-content-end' style={{width:400,marginLeft:'60%'}}>
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
                    
            {/* Welcome message */}
            <div className="space2"></div>
            <div >
                <h1>Welcome To <span style={{color:"red"}}>HKC!!!</span></h1><br/>
                <h6>This website is used to create birstday card and special wishes card by our own users.<br/>
                    User have full freedom to change and choose the features.<br/>
                    Our Aims is to provide full fledge technology to create card by users wishes</h6><br/>
                
            {/* end welcome message */}
            </div>


            {/* Card details by their occation's*/}
            {/* 1 - birthday */}
            <div className="Container ">
                <div className='row d-flex justify-content-center '>
                    {dataSearch.map((item, index)=>{
                        console.log(item)
                        if(item.id === 1){
                            return(
                            <div>
                                <h4>Birthday Day Card</h4>
                            </div>
                            )
                        }else if(item.id === 8){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Christmass Day Card</h4>
                                </div>
                                )
                        }else if(item.id === 15){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Wall Hanger </h4>
                                </div>
                                )
                        }else if(item.id === 22){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Clip art scrap </h4>
                                </div>
                                )
                        }else if(item.id === 26){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Cartoon scrap </h4>
                                </div>
                                )
                        }else if(item.id === 31){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Heart shap scrap </h4>
                                </div>
                                )
                        }else if(item.id === 36){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Photograph scrap</h4>
                                </div>
                                )
                        }else if(item.id === 42){
                            return(
                                <div>
                                    <a className='text-secondary occMoreText' >More</a>
                                    <br/><br/>
                                    <h4>Shaker type scrap</h4>
                                </div>
                                )
                        }
                        return(
                            <div className='col-lg-3 col-md-6 col-xs-12 shadow rounded mb-5 p-2 m-3 occCard'>
                                <div>
                                    <h5>{item.title}</h5>
                                    <img src={item.img} alt="" className="occImg"></img>
                                    <h6 className='cprice'>{item.price}</h6>
                                    {/* <Link 
                                    to={"/CardDetailsMain"}
                                    state ={{
                                        id : item.title
                                    }}    
                                    className="btn btn-primary m-0" >View</Link> */}
                                    <button className='btn btn-info' onClick={()=>handler(item)}>view</button>
                                </div>
                            </div>
                            )
                    })}
                </div>
 
            </div>
         
            {/* -------- */}
            {/* steps */}
            <div className='row ' style={{justifyContent:'center'}}>
                <h3 className=" col-lg-12 col-md-12 col-xs-12 m-5 rounded " style={{color:"whitesmoke",backgroundColor:"#232323",padding:10,width:400}}>Chat Wth us Anytime!!</h3>
            </div>
    
            <div className="row" style={{marginTop:20,justifyContent:'center'}}>
                {/* put image to explain the chatbot in our system */}
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <img src={message} alt="Message" style={{height:280,width:300}}></img>
                </div>
                {/* explain the chat bot system feature */}
                <div className="col-lg-6 col-md-6 col-xs-12  m-5" >
                    <h6 style={{padding:40,textAlign:"center"}}>Chatbot webpage vector template with isometric illustration. <br/>Website interface design.
                         Info bot receiving client messages.<br/>
                         AI and business. Customer support.<br/> IOT 3d concept. Mobile app design Pro Vector</h6>
                        <h4 style={{textAlign:"left"}}>Benifites</h4>
                         <ol style={{textAlign:"left"}}>
                             <li>Help with lead generation and sales</li>
                             <li>Help with (or better) customer service</li>
                             <li>Increased revenue</li>
                         </ol>
                </div>
            </div>

            {/* <hr style={{width:800, marginLeft:300,marginTop:20}}/> */}
            <div className='row' style={{justifyContent:'center'}}>
                <h2  className="col-lg-12 col-md-12 col-xs-12 rounded" style={{color:"whitesmoke",backgroundColor:"#232323",padding:10,fontSize:25,width:200}}>BEGIN!!</h2>
            </div>
            {/* -------- */}
            {/* features with two cards */}
            <div className="row "  style={{justifyContent:'center'}}>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 m-2 border border-dark " style={{height:300,width:300}}>
                <div className="hovereffect">
                    <img className="img-responsive" src={smessage}alt=""/>
                    <div className="overlay">
                    <h2>Chat With us!</h2>
                    <a className="info" href="#">Click Here</a><br/><br/>
                    <h4 style={{padding:5,color:"whitesmoke"}}>We Here to help anytime, just tap your message!!</h4>
                    </div>
               </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 m-2 " style={{height:300,width:300}}>
                <div className="hovereffect">
                    <img className="img-responsive" src={smemories} alt=""/>
                    <div className="overlay">
                    <h2>Make your Own Memories!</h2>
                    <a className="info" href="#">Click Here</a><br/><br/>
                    <h4 style={{padding:5,color:"whitesmoke"}}>Make every moment as Memories, that hold your best times!!</h4>
                    </div>
               </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 m-2 border border-dark" style={{height:300,width:300}}>
                <div className="hovereffect">
                    <img className="img-responsive" src={sframe} alt=""/>
                    <div className="overlay">
                    <h2>Here we go with frame!</h2>
                    <a className="info" href="#">Click Here</a> <br/><br/>
                    <h4 style={{padding:5,color:"whitesmoke"}}>Select the frame & make your memeories!!</h4>
                    </div>
               </div>
            </div>

            </div>{/* End features with two cards */}
            <br/><br/>
            {/* end card system declaration */}
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-2  " >
                        <div className=" p-3 mb-5 bg-white rounded" >
                                <h3 style={{fontFamily:"fantasy",color:"blue"}}>Life is Full of memory</h3>
                                <hr/>
                        
                                <h5>Our system's ultimate feature is the user can edit the frame dynamically
                                    <br/>how they want. <br/>sSystem provide features to move along witht the frame 
                                    and make their own version of their design!!.<br/><br/>
                                </h5>
                         
                                <img src={happyE} alt="Message" style={{height:150,width:150}}></img>
                        </div>
                        </div>
                    </div>      
            </div>
        );
    
}


export default HomeBody