import './Style.css'
import { useNavigate } from 'react-router-dom';
import logo from '../logo/logo.png'
const LandingPage =()=>{
    const navigate =useNavigate();
    const register=()=>{
        navigate('/CreateAccount')

    }
    const login=()=>{
        navigate('/Login')
    }
    return (
        <div className="landingPage">
            <div className="lndngPageDtls">
            <div className='logo'>
                <img  src={logo} alt='Logo' /></div>
              <h2>
                Welcome to Fitviro  </h2>
                <button onClick={register} className='btnRgstr'>Register</button>or
                <button onClick={login}  className='btnLgn'>Login</button>
              
            </div>
        
        </div>
    )
}
export default LandingPage;