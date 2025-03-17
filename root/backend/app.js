//console.log("hi");
//IrnrWkBOrpLk4oO7

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoute");

const app = express();

//middleware
app.use("/users",router);

mongoose.connect("mongodb+srv://admin:IrnrWkBOrpLk4oO7@charindudl17.wgv0h.mongodb.net/")
.then(()=>{
    console.log("connected to mongodb");
})
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));