const mongoose =require('mongoose')
const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const router = require('./Routes')

dotenv.config()


const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

app.use('/',router)


 const Connect=mongoose.connect(process.env.Data_Base_Acess, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}, ()=>console.log("Db connected"))


// Schema

// const userSchema= new mongoose.Schema({
//     name:String,
//     email: String,
//     password:String,
//     // contact:String,
//     // date:Number,
//     // time:Number
// })

// // Model

// const User = new mongoose.model("User", userSchema)


//----------------------------------- Routes for Login----------------------------------//---------

// app.post('/login', (req,res)=>{
//     const{email, password}=req.body
//     User.findOne({email:email}, (err, user)=>{
        // if(user){
        //     if(password === user.password){
        //         res.send({message:"Login Done",  user})
        //     }
        // }
        //     else {
        //         res.send({message:"Password not match"})
        //     }
//         if(user && password === user.password){
//             res.send({message:"111", user})
//         }
//         else if(user && password !== user.password){
//             res.send({message:"Password does not match"})
//         }
//         else{
//             res.send({message:"User or Passoword is wrong"})
//         }
        
//     })
// })

// //------------------------------------------Routes for Register--------------------------------

// app.post('/register', (req,res)=>{
//     const {name, email, password}=req.body
//     User.findOne({email:email},(err, user)=>{
//         if(user){
//             res.send({message:"110", user})
//         }
//         else{
//             const user=new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err=>{
//                 if(err){
//                     res.send(err)
//                 }
//                 else{
//                     res.send({message:"112"})
//                 }
//             })
//         }
//     })

// })

// //-------------------------------------Routes for Appointemnt-----------------------------------------------

// app.post('/appointment', (req,res)=>{
//     console.log(req.body)
    
// })


app.listen(9000, ()=>console.log("server is running"))
module.exports={Connect}




// const mongoose =require('mongoose')
// const express =require('express')
// const cors =require('cors')
// const dotenv = require('dotenv')

// dotenv.config()


// const app=express()
// app.use(express.json())
// app.use(cors())
// app.use(express.urlencoded({extended:true}))

// mongoose.connect(process.env.Data_Base_Acess, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }, ()=>console.log("Db connected"))


// // Schema
// const userSchema= new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// })

// // Model

// const User=new mongoose.model("User", userSchema)


// // Routes

// app.post('/sign', (req,res)=>{
//     res.send("singUp")
// })

// app.post('/register', (req,res)=>{
//     const{name, email, password}=req.body
//     console.log(req.body)
//     const user=new User({
//         name,
//         email,
//         password
//     })
//     user.save(err=>{
//         if(err){
//             console.log(err)
//             res.send(err)
//         }
//         else{
//             console.log("success")
//             res.send({message:"Successfull"})
//         }
//     })
// })







// app.listen(5000, ()=>console.log("Server is running"))