//console.log("hi");
//

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/FeedbackRoutes");

const app = express();

//middleware
app.use(express.json());
app.use("/feedbacks",router);

mongoose.connect("/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));
