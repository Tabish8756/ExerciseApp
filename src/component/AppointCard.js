import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { Details } from '../Context';
import './Style.css'
const AppointCard=({closeModal})=>{
    const navigate=useNavigate();
    const{apntName}=useContext(Details);
    const{apntDate}=useContext(Details);
    const{apntTime}=useContext(Details);

    return (
        <div className="appointCard">
         <div className="cardDetails">
          <h3>Congratulations {apntName} </h3>
          <p>Your appoint has been scheduled on {apntDate} at {apntTime} hrs</p>
          <p>Please be available</p>
          <button onClick={closeModal}>Thank You</button>
         </div>
        </div>
    )
}
export default AppointCard