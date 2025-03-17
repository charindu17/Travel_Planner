//console.log("hi");
//IrnrWkBOrpLk4oO7

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoute");

const app = express();

//middleware
app.use("/users",router);

mongoose.connect("")
.then(()=>{
    console.log("connected to mongodb");
})
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));