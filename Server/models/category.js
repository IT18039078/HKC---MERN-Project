// import mongoose to handle the mongoose statments
const mongoose = require('mongoose')

// create schema for category
const categoryShema  = new mongoose.Schema({
    category_name:{
        type: String,
        required: true
    },
    category_price:{
        type: Number,
        required: true
    },
    category_description:{
        type: String,
        required: true
    },
    category_image:{
        type: Buffer,
        required: true
    }
});


// create the model and export to use all over the applicatoin 
const categoryModel = mongoose.model("category", categoryShema);
module.exports = categoryModel;