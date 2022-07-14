// create mongoose variable to handle the db statments 
const mongoose = require('mongoose');
// create schema for consumer
const ConsumerSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        minlength: 8,
        required: true
    }
});

// make the consumer model and export it to use all over the application
const consumerModel = mongoose.model("consumers", ConsumerSchema);
module.exports = consumerModel;