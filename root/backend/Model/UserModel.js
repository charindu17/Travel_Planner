const express = require("express");
const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const userSchema = new Schema({
    userID:{
        type:String,
        required:true  //validate
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    },
    preferences:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    }
});
    //function name and the file name
module.exports = mongoose.model("UserModel",userSchema);