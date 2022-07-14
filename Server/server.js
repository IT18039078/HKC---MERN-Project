// entry point of our all apis
// here will write all the DB setups 
// and also we will write all the api setups

const express = require("express")
// intialize the app with express to handle main function in the application
const app = express();

require("dotenv").config({path: "Server/config.env"});
// this package is used to connect the front end with these end points
const cors = require("cors");
// allow use to send data as json to backend 
app.use(express.json());
app.use(cors());
// import the router to call all the api
app.use('/api', require('./router/router.js'));

// import the consumer model to handle Db for it
const consumerModel = require ("./models/consumer");
// import admin model
const adminModel = require("./models/admin");

// import mongoose pacskage to connet the DB 
const mongoose = require("mongoose")
//connet the DB 
mongoose.connect("mongodb+srv://HKC:Handmade123@hkc1.4ckjs.mongodb.net/HK_Crafterina?retryWrites=true&w=majority");


// tell our application to start the api 
const port = process.env.PORT;
app.listen(port, ()=> {
    // whent he server run succesfuly this message will print in the consoles
    console.log("SERVER RUNNING SUCCESSFULY",port)
    console.log("SERVER RUNNING SUCCESSFULY",process.env.PORT)
});
// handle the first GET method to retrive the information of consumer
app.get("/getConsumer",(req,res)=>{
    consumerModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

// create consumer 
app.post("/createConsumer",async (req,res)=>{
    // reques the consumer details from the front end
    const consumer = req.body;
    // make a model from the collected details from front end
    const newConsumer = new consumerModel(consumer);
    // and save that in db
    await newConsumer.save();

    res.json(consumer);
});

// handle the first GET method to retrive the information of consumer
app.get("/getAdmin",(req,res)=>{
    adminModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});






