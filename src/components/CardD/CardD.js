import React, { useState, useEffect } from 'react';
import {fabric} from 'fabric';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
const imageMimeType = /image\/(png|jpg|jpeg)/i;

// creating function that holding the canvas
export default function CardD() {

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
  //  END LOGIN CHECKING 
  
  // logics for price calculation with dropdown box
  // user will select type of the box the price will dynamically 
  // change acording tot he type they choosing 
  const [selec, setSelect] = useState('');
  const [cprice, setCprice] = useState('');
  const handleChange = (e)=>{
    setSelect(e.target.value);
    console.log(e.target.value)
      
    if(e.target.value === 'Aniversary Scrap'){
      setCprice("Rs 2000/-");
    }else if (e.target.value === 'Bossy Birthday Scrap'){
      setCprice("Rs 1500/-");
    }else if (e.target.value === 'BEE Scrap'){
      setCprice("Rs 2250/-");
    }else if (e.target.value === 'Birthday scrap'){
      setCprice("Rs 2750/-");
    }else if (e.target.value === 'Clip art scrap'){
      setCprice("Rs 2000/-");
    }

  }

  const [canvas, setCanvas] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [Background, setBURL] = useState('');
  // this file parametter used for background image 
  const [file, setFile] = useState(null);
  // the file parametter for the cnvas to add from device 
  const [filec, setFilec] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [fileCDataURL, setFileCDataURL] = useState(null);

        useEffect(()=>{
          
        })
        useEffect(() => {
          setCanvas(initCanvas());
        }, []);

         //   init function for canvas to have initial setups
         const initCanvas = () => (
          
          new fabric.Canvas('canvas', {
              height:470,
              width: 780
          })
        );
        // completly this is for the background image set up 
        useEffect(() => {
          
          let fileReader, isCancel = false;
          if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
              const { result } = e.target;
              if (result && !isCancel) {
                setBURL(result)
              }
            }
            fileReader.readAsDataURL(file);
          
          }

          return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
              fileReader.abort();
            }
          }
    
        }, [file]); 

       

        // Upload files from the device
        const changeHandler = (e) => {
    
          const file = e.target.files[0];
          if (!file.type.match(imageMimeType)) {
            alert("Image mime type is not valid");
            return;
          }
          setFile(file);
        }


                                // ***********************************************************   //
        // this useEffect used for add image to canvas 
        useEffect(()=>{
            
          let fileReader, isCancel = false;
          if (filec) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
              const { result } = e.target;
              if (result && !isCancel) {
                setFileCDataURL(result)
              }
            }
            fileReader.readAsDataURL(filec);
            fileReader.addEventListener("load", ()=>{
              console.log(fileReader.result)
              new fabric.Image.fromURL(fileReader.result, img=>{
                // adding the image size - when the image added to the system t
                // this is the inital size appear in canvas 
                img.scale(0.35);
                canvas.add(img)
                
                canvas.requestRenderAll();
              })
              
            })
          }

          return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
              fileReader.abort();
            }
          }
        },[filec])

        // Upload files from the device
        const changeHandlerc = (e) => {
    
          const filec = e.target.files[0];
          if (!filec.type.match(imageMimeType)) {
            alert("Image mime type is not valid");
            return;
          }
          setFilec(filec);
        }

  // backURL = "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
  
      

        

        //  Add ractangle to the canvas 
         const addRect = canvi => {
            console.log('rect')
            const canvCenter = canvas.getCenter()
            const rect = new fabric.Rect({
              height: 280,
              width: 200,
              fill: 'yellow',
              left: canvCenter.left,
              top: canvCenter.top,
              originX: 'center',
              originY: 'center'
            });
            canvi.add(rect);
           
            canvi.renderAll();
          }

         
          // Add image by url 
          const addImg = (e, url, canvi) => {
            e.preventDefault();
            
            new fabric.Image.fromURL(url, img => {
              img.scale(0.50);
              
              canvi.add(img);
              
              canvi.renderAll();
              img.crossOrigin = "Anonymous";
              setImgURL('');
              
            });
           
          }
  
          // Add line to the canvas
          const addLine = (canvas) => {
            var line = new fabric.Line([50,10,200,150], {
                strokeWidth: 2,
                stroke: 'red',
                originX: 'center',
                originY: 'center'
               });
            canvas.add(line);
            canvas.renderAll();
          }

          // Adding text to the canvas
          const addText = (canvas) => {
            let newID = (new Date()).getTime().toString().substr(5);
            let text = new fabric.IText('текст', {
                fontFamily: 'arial black',
                left: 100,
                top: 100,
                myid: newID,
                objecttype: 'text'
            });
            
            canvas.add(text);
            canvas.renderAll();
            //this.addLayer(newID, 'text');
        }

       
        // setting the values for the text selected
        const setValue =(canavs)=>{
            
              var myFont = document.getElementById('fonts').value;
              var fSize = document.getElementById('sizes').value;
              var fcolor = document.getElementById('colors').value;
              console.log(myFont,fSize)
              var obj = canvas.getActiveObject();
              obj.set({
                fontFamily: myFont,
                fontSize: fSize,
                fill: fcolor
              });
              canvas.renderAll();            
        }
      
  
        // Adding background
        const addBack = () =>{
          
        }
        
        
      
  return(
    <div className="container shadow p-5 border border-dark" style={{marginTop:100,marginBottom:100}}>
            <h1 className='shadow ' style={{padding:5}} >  Time to Make your Own design 🤩</h1>
            {/* -------------------------------------TOP BUTTON SECTIONS------------------------------ */}
            
{/* Top buttons */}
            <div className="row shadow border rounded m-4 p-4" ><br/><br/>
                  <div className='col-lg-12 col-md-12 col-sm-12'>
                    <label className='d-flex justify-content-left' style={{padding:5, marginBottom:5,width:"40%",fontWeight:'bolder'}}>Image link to download from internet</label>
                  </div>
                <form onSubmit={e => addImg(e, imgURL, canvas)}>
                    <div >
                    <div className="input-group m-0" >
                        <input className="form-control" placeholder="Place URL to download image" aria-label="Add URL for image" aria-describedby="button-addon2"
                            type="text" 
                            value={imgURL} 
                            onChange={ e => setImgURL(e.target.value)} 
                        />
                        <button  className="btn btn-primary" type="submit" id="button-addon2">Download photo</button>
                    </div>

                    {/* <input className="form-control" type="file" id="imageLoader"></input>s */}
                    </div>
                </form>
                
                {/* adding the custom image from the device style={{justifyContent: "flex-start"}}*/}
                <div>
                  <div className='col-lg-12 col-md-12 col-sm-12'>
                    <label className='d-flex justify-content-left' style={{padding:5, marginBottom:5,width:"30%",fontWeight:'bolder'}}>Select a image to add in the card</label>
                  </div>
                    
                    <input className="form-control" type="file" id="formFile myImg" accept="image/*" onChange={changeHandlerc}
                    placeholder="Select a image to add in the card" style={{marginBottom: 10}}></input>

                  <div className='col-lg-12 col-md-12 col-sm-12'>
                    <label className='d-flex justify-content-left' style={{padding:5, marginBottom:5,width:"30%",fontWeight:'bolder'}}>Select a background image</label>
                  </div>
                   
                    <input className="form-control" type="file" id="formFile myImg" accept="image/*" onChange={changeHandler}></input>
                    {/* This is the pace we can use to see preview */}
                    {/* {fileDataURL ?
                      <p className="img-preview-wrapper">
                        {
                          <img src={fileDataURL} alt="preview" />
                        }
                      </p> : null} */}
                </div>
                {/* <div className="custom-file">
                  <input type="file" accept='image/*' className="custom-file-input" id="imgs"/>
                  
                </div> */}
                <div className='col-lg-12 col-sm-12 col-md-12 d-flex justify-content-center'>
                    <button className="btn btn-primary m-2 shadow "   style={{width:150}} onClick={()=>addText(canvas)}>Insert Text</button>
                    <button className="btn btn-primary m-2 shadow "   style={{width:150}} onClick={()=>addRect(canvas)}>Insert Rectangles</button>
                    <button className="btn btn-primary m-2 shadow "   style={{width:150}} onClick={()=>addLine(canvas)}>Inset Line</button>
                    <button className="btn btn-primary m-2 shadow "   style={{width:150}} onClick={()=>addBack(canvas)}>Donlowad</button> 
                </div>           
            </div>
            <br/>
        

            {/* -------------------------------------FRAME SECTION------------------------------ */}
            {/* Midle fram editing area desgn and sections for button that for edit frame */}
            <div className="row  border" style={{height:500}}>
                            {/* CANVAS */}
                {/* THIS IS  THE CONVAS DESIGN AREA */}
                <div className="col-9 shadow border " style={{height:480}}>
                    {/* here will be the all carddesigns things will come */}
                    <canvas id="canvas" style={{marginTop:3,backgroundImage: `url(${Background})`}}/>
                </div>
                            {/* END CANVAS */}



                {/* editable buttons */}
                <div className="col-3 border d-flex justify-content-center flex-column" style={{height:480}}>
                    {/* drop down box for font type */}
                    <div className='d-flex justify-content-center'>
                    <span  style={{marginTop:10}}>Font type </span>
                    {/* <input type={"text"} id='fonts'></input>s */}
                    <select id='fonts' className="form-select btn btn-info border border-light m-2"  aria-label="Default select example" style={{width:180}}>
                        <option  defaultValue={"Times new roman"}>Times new roman</option>
                        <option >Arial</option>
                        <option >Two</option>
                        <option >Three</option>
                    </select><br/> 
                    </div>
                    {/* drop down box for font type */}
                    <div className='d-flex justify-content-center'>
                    <span style={{marginTop:10}}>Font Size </span>
                    <select id='sizes' className="form-select btn btn-info border border-light m-2"  aria-label="Default select example" style={{width:180}}>
                    <option  defaultValue={8}>8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="24">24</option>
                        <option value="26">26</option>
                        <option value="28">28</option>
                        <option value="30">30</option>
                        <option value="32">32</option>
                        <option value="34">34</option>
                    </select><br/>
                    </div>

                    {/* drop down box for font type */}
                    <div className='d-flex justify-content-center'>
                    <span style={{marginTop:10}}>Font Color </span>
                    <select id='colors' className="form-select btn btn-info border border-light m-2"  aria-label="Default select example" style={{width:180}}>
                        <option defaultValue={"Black"}>Black</option>
                        <option value="white">white</option>
                        <option value="white">white</option>
                        <option value="green">green</option>
                        <option value="red">red</option>
                        <option value="gray">gray</option>
                    </select><br/>
                    
                    </div>
                    <br/>
                    <div>
                        <button className="btn btn-primary m-2 "   style={{width:150}}   onClick={setValue}>Set Values</button>            
                    </div>
                    <br/><br/><br/><br/><br/><br/>

                    <br/>
                    
                </div>
            </div>

                {/* -------------------------------------FINALIZE BUTTOS------------------------------ */}
            {/* Finalizing buttons */}
            <div className="row shadow border " style={{marginBottom:30}}>
                <button className="btn btn-success m-2 " style={{width:240}}> Total</button>
                <span  className="p-2 m-2 border shadow"style={{width:180,height:40,marginTop:8}}>{cprice}</span>
                {/* <button className="btn btn-success m-2 " style={{width:150}}>Select Design</button>  */}
                <select value={selec} style={{width:240}} 
                            onChange={handleChange.bind(this)} className="btn btn-primary m-2">
                                <option value="Aniversary Scrap">Aniversary Scrap</option>
                                <option value="Bossy Birthday Scrap">Bossy Birthday Scrap</option>
                                <option value="BEE Scrap">BEE Scrap</option>
                                <option value="Birthday scrap">Birthday scrap</option>
                                <option value="Clip art scrap">Clip art scrap</option>
                </select>           {/* end of the finalizing buttons */}
            </div>
        </div>
  );
}
