import React, { Component, useState,useEffect  } from 'react';

import cards from './birthdayCard.jpg';
import "./cardDetails.css";
import "./cardDetails.js";
import {useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import data from '../HomeBody/hdata';

const  CardDetailsBody  = (props) =>{ 

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
    //    END OF THE LOGIN  CHECKING

       const location = useLocation();
       let id  = 0 ;
       let datah = null;
       const [selec, setSelect]= useState('');

    //    filtering the data with the key
       const [filter, setFilter] = useState('');
    //    declaring the variable viewing details in the 
       const [price, setPrice] = useState('');
       const [title, setTile] = useState('');
       const [image, setImage] = useState('');
       const [colour1, setColor1] =useState('');
       const [colour2, setColor2] =useState('');
       const [colour3, setColor3] =useState('');
       const [colour4, setColor4] =useState('');
       const [colour5, setColor5] =useState('');
       useEffect (()=>{
        setPrice(location.state.price);
        setTile(location.state.title);
        setImage(location.state.image);
        setColor1(location.state.color1);
        setColor2(location.state.color2);
        setColor3(location.state.color3);
        setColor4(location.state.color4);
        setColor5(location.state.color5);
        // //    set the id of the product - this used to filter the data 
        //    setFilter(id.id);
        // //    let the product data into variable by filter the product from fata with ID
        //    let dataSearch = datah.CardDetails.filter(item=>{
        //     return Object.keys(item).some(key=>
        //         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        //         )
        //    });
        // //    find the datas and put it into the globale variable 
        //    dataSearch.map((item, index)=>{
        //        setPrice(item.price);
        //        setTile(item.title);
        //        setImage(item.img);
        //    })
        //    console.log(filter)
       
       },[]);

       
     const handleChange = (e)=>{
            setSelect(e.target.value);
      }
         
       
    // const {id} = this.location.state
    // console.log(id)
        // const {data} = this.props.location;
        return (
        <div className="row p-5 m-4">
            <div style={{height:40}}>

            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 m-2'>
                {/*this is devide row for the display photo and buttons*/}
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6  'style={{height:540}}>
                        {/* row for display image */}
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 shadow' style={{height:400}}>
                                <a><img className='detailsImge border m-2' src={image}></img></a>
                                <a><img className='detailsImge border m-2' src={image}></img></a>
                                <a><img className='detailsImge border m-2' src={image}></img></a>
                                <a><img className='detailsImge border m-2' src={image}></img></a>
                            </div>
                            {/* big image of the sub image */}
                            <div className='col-lg-8 col-md-9 col-sm-9 col-xs-9 border shadow m-1' style={{height:400}}>
                                <img className='detailsBigImge border m-2' src={image}/>
                            </div>
                        </div>
                        {/* row for buttons */}
                        
                        <div className='row p-5'>
                            <div className='col-lg-6'>
                                <div className='btn btn-secondary m-2 '>Add to card</div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='btn btn-secondary m-2 '>Buy Now</div>
                            </div>
                        </div>  
                        {/* row for personalize button */}
                        <div className='row m-2' style={{justifyContent:'center'}}>
                            <div className='col-lg-6'>
                                <div className='btn btn-danger '>Personalize you design</div>
                            </div>
                        </div>   
                                               
                    </div>
                                    {/* CARD DETAIS SHOWING */}
                    {/* card real details rendering area */}
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 shadow-lg'style={{height:780}}>
                        {/* div for the title of the card */}
                        <div className='row m-2 '>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <h2>{title}</h2>
                            </div>
                        </div>

                        {/* price details of the card */}
                        <div className='row m-2 '>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                <h4>{price}</h4>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                <h6>FLAT 24%</h6>
                                <h6>Rs 3000</h6>
                            </div>
                        </div>

                        {/* small banner for the prodcut */}
                        <div className='row m-2 '>
                            <label>Price only depends on size you have selected</label>
                        </div>

                        {/* image and wishes upload */}
                        <div className='row m-2 '>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2 '>
                                <label>upload</label><br/><br/>
                                <img src={image} style={{height:100,width:100}}></img>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2 '>
                                <label>wishes</label><br/><br/>
                                <img src={image} style={{height:100,width:100}}></img>
                            </div>
                        </div>

                        {/* color selection */}
                        <div className='row m-2 '>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                                <lable><h5>Color</h5></lable>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                            
                            <select value={selec} 
                            onChange={handleChange.bind(this)} className="btn btn-info">
                                <option value={colour1}>{colour1}</option>
                                <option value={colour2}>{colour2}</option>
                                <option value={colour3}>{colour3}</option>
                                <option value={colour4}>{colour4}</option>
                                <option value={colour5}>{colour5}</option>
                            </select>
                            </div>
                       </div>

                        {/* size selection */}
                        <div className='row m-2 '>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                                <lable><h5>Size</h5></lable>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                            <button className='btn btn-info'>15" * 15"</button>
                            </div>
                        </div>

                        {/* warrenty avalability details */}
                        <div className='row m-2 '>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                                <lable><h5>Warrenty</h5></lable>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                                <lable style={{color:"red"}}><h6>NO WARRENTY AVAILABLE!</h6></lable>
                            </div>
                        </div>

                        {/* seller message */}
                        <div className='row m-2 '>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                                <lable><h5>Seller</h5></lable>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                                <p>
                                “Wherever you go, no matter what the weather, always bring your own sunshine.”
                                </p>
                            </div>
                        </div>

                        {/* produt information */}
                        <div className='row m-2 '>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                                <lable><h5>Product</h5></lable>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2'>
                                <p>
                                Hope this new year will bring you lots of happiness, love, and fun. 
                                You deserve it all!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        );
}

export default CardDetailsBody