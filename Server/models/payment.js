// create variable for mongoose to handle the mongoose DB
const mongoose = require('mongoose')

// create schema for the payment
const paymnetSchema = new mongoose.Schema({
    payment_date_time: {
        type: Date,
        required: true
    },
    payment_description:{
        type:String,
        required: true
    }
});

// create model and export to use all over the application
const paymentModel = mongoose.model("payment", paymnetSchema);
module.exports = paymentModel;