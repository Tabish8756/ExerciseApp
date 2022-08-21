import axios from 'axios';
import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Details } from '../Context';
const Login=()=>{
    const[message, setMessage]=useState()
    const{name, setName}=useContext(Details)
    const{appntUser, setAppntUser}=useContext(Details)
    const{loginUser, setLoginUser}=useContext(Details)
    const{userEmail, setUserEmail}=useContext(Details)
    const [user, setUser]=useState({
        email:"",
        password:""
        
    })
    const navigate=useNavigate();
    const handleChange=(e)=>{
         const {name, value}=e.target
         setUser({
            ...user, [name]:value
         })
    }

    const handleLogin=()=>{
        const {email, password}=user
        if(email && password){
          axios.post("http://localhost:9000/login", user)
          .then((res)=>{
            console.log(res.data)
            login(res.data) //----------------function()
            setName(res.data.user.name)
            setLoginUser(res.data.user)
            setAppntUser(res.data.user)
            setUserEmail(user.email)
            
          })
        

        }
        else{
            alert("Invalid Input")
        }
    }

    const login=(data)=>{
           if(data.message==="111"){
            navigate('/Home')
            // console.log(loginUser)
           }
           else if (data.message==="222") {
            setMessage("Password does not match")
           }
           else{
              setMessage("User or Password is wrong")
           }
        }

    return (
        <div className='loginForm'>
                      <p>Welcome Back</p>
                      <p>Sign in</p>
                      <h1>{message}</h1>
            <div className='login'>
            <input type="email" name="email"  placeholder="Enter the email" onChange={handleChange}></input>
            <input type="password" name="password" placeholder="Enter the password" onChange={handleChange}></input>
            <button className='sbmtButton' onClick={handleLogin}>Login</button>
            <p>or</p>
            <Link style={{textDecoration:'none', color:' rgb(250, 11, 11)'}} to='/CreateAccount'>Create Account</Link>
            </div>
        </div>
    )
}
export default Login;