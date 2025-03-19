const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    comment:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:false,
    },
    rating:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model(
    "FeebackModel", //file name
    feedbackSchema //function name
)