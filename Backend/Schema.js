const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    name:String,
    email: String,
    password:String,
    // contact:String,
    // date:Number,
    // time:Number
})



module.exports = new mongoose.model("User", userSchema)


