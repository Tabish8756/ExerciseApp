const mongoose = require("mongoose");

const appntSchema=new mongoose.Schema({
    name:String,
    contact:String,
    email:String,
    date:String,
    time:String,
    isDeleted:{
        type:Boolean,
        default:false
    }
})

module.exports =new mongoose.model("AppntData", appntSchema)

// module.exports={appntDetails}