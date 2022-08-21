const router = require('express').Router()
const User = require('./Schema')
const appntData = require('./SchemaAppnt')

router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        User.findOne({ email: email }, (err, user) => {
            if (email === user.email && password === user.password) {
                res.send({ message: "111", user })
            }
            else if (email === user.email && password !== user.password) {
                res.send({ message: "222" })
            }
            else {
                res.send({ message: "User or Passoword is wrong" })
            }

        })
    } catch (err) {
        return res.send({ msg: err.message })
    }
})

router.post('/register',  (req, res) => {
    const { name, email, password } = req.body
     User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "110", user })
        }
        else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "112", user })
                }
            })
        }
    })
})

router.post('/appointment', (req, res) => {
    console.log(req.body)
    const { name, contact, date, time, email } = req.body
    User.findOne({email:email}, (err, apntDetails)=>{
        if(apntDetails){
        const apntDetails=new appntData({
            name,
            contact,
            email,
            date,
            time
        })
        apntDetails.save(err=>{
            if(err){
                console.log(err)
            }
            else{
                res.send({message:"120", apntDetails})
                 console.log("data save")
            }
        })
    }
    else{
        res.send({message:"1222"})
    }
      

    })

})


router.get('/appointment/:userEmail',(req, res)=>{
    const email =req.params.userEmail
    appntData.findOne({email:email}, (err,apntDetails)=>{
      if(apntDetails){
        const{name, contact, email, date, time} =apntDetails
       const apntDet =new appntData({
        name,
        contact,
        email,
        date,
        time

       })
       res.send({apntDet})
      }
      else{
        res.send({message:"1000"})
      }

    })
    console.log(req.params)
    console.log(email)
    
})

router.delete('/appointment/:userEmail', (req, res)=>{
    const email=req.params.userEmail
    appntData.findOne({email:email},()=>{
        appntData.deleteOne({email:email}, err=>{
            if(err){
                res.send({message:"100"})
            }
            else{
                res.send({message:"111"})
            }
        })
    } )
})

module.exports = router