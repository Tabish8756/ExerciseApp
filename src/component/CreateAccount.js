import './Style.css'
import { useNavigate } from 'react-router-dom'
import {useContext, useState} from 'react'
import axios from 'axios'
import { Details } from '../Context'
import {Link} from 'react-router-dom'


const CreateAccount = () => {
    const navigate = useNavigate()
    const{userName, setUserName}=useContext(Details)
    const [details, setDetails]=useState('')
    const [message, setMessage]=useState('')
    const [login, setLogin] =useState(false)
    const [user, setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange=(e)=>{
        const{name, value}=e.target
        setUser({
            ...user,[name]:value
        })
    }

    const handleCreateAccount = () => {
        const regex_patt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const {name, email, password, reEnterPassword}=user
    if(name===''|| email===''|| password===''||reEnterPassword===''){
        setMessage("Please fill all the details")
        
 }
 else if(password.length<8){
     setMessage("Password must be of the atleast 8 character")
     
 }
 else if(password !== reEnterPassword){
     setMessage("Password and Re-enter password must be same")
     
 }
 else if(!regex_patt.test(email)){
    setMessage("Please enter  valid email")
 }
 
 else {
    axios.post("http://localhost:9000/register", user)
    .then((res)=>{
        console.log(res.data)
        setDetails(res.data.message)
        setUserName(res.data.user.name)
        
        
    })
    console.log(details)
    if(details==="112"){
        navigate('/Success')
    }
    else if(details==="110"){
        setMessage("User is already registered")
        setLogin(true)
    }
    else{
        setMessage("Some error occured")
    }
 }
}
     

    return (
        <div className="createAccount">
                    <h1>Sign Up</h1>
            <div className='accountDetails'>
                <h3>{message}</h3>
                {login ? <Link to="/">Please Login</Link> : ''}
                <input type="text" name="name" value={user.name} placeholder="Enter the name" onChange={handleChange} />
                <input type="email" name="email" value={user.email} placeholder="Enter the email" onChange={handleChange} />
                <input type="password" name="password" value={user.password} placeholder="Enter the password" onChange={handleChange}  />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Enter the Password Again" onChange={handleChange} />
                <button className='sbmtButton' onClick={handleCreateAccount}>Submit Details </button>
            </div>
        </div>
    )
}
export default CreateAccount
