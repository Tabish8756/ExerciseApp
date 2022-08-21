import './Style.css'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { Details } from '../Context';
const Success =()=>{
    const navigate=useNavigate();
    const {userName}=useContext(Details)
    return(
        <div className="welcomeCard">
            <div className='cardDetails'>
            <h1>Welcome {userName}  </h1>
            <h1>Congratulations</h1>
            <h2>Registration is successfull</h2>
            <h3>Please make login to proceed further</h3>
            <button onClick={()=>navigate('/')}>Login</button>
            </div>
        </div>
    )
}
export default Success