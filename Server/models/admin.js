// create variable for mongoose to handle the mongo DB funcitons
const mongoose = require('mongoose')

// create schema for mongoose
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

// create model for admin and export to use all over the application
const adminModel = mongoose.model("model", adminSchema);
module.exports = adminModel;