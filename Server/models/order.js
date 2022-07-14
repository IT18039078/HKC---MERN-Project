// import mongoose to handle the mongoose statments
const mongoose = require('mongoose')

// crete schema for the order
const orderSchema = new mongoose.Schema({
    order_name:{
        type: String,
        require: true
    },
    order_price:{
        type: Number,
        required: true
    },
    order_description:{
        type: String,
        required: true
    },
    order_image:{
        type: Buffer,
        required: true
    }
});

// create order model and export it to access all over the application
const orderModel = mongoose.model("order",orderSchema);
module.exports = orderModel;