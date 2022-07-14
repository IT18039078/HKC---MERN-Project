// import the mongoose package to handle the mongooDB
const mongoose = require('mongoose')

// create schema for the prodct 
const productSchema = new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    product_price:{
        type: Number,
        required: true
    },
    product_image:{
        type: Buffer,
        required: true
    },
    product_description:{
        type:String,
        required: true
    }
});

// create the model from the schema and export as module
const productModel = mongoose.model("product", productSchema);
module.exports = productModel;