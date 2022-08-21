import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AppointCard from './AppointCard';
import './Style.css'
import axios from 'axios'
import { Details } from '../Context';
const Appoint = () => {
    const navigate=useNavigate();
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const{appntUser}=useContext(Details);
    const{userEmail}=useContext(Details);
    const{apntName, setApntName}=useContext(Details);
    const{apntDate, setApntDate}=useContext(Details);
    const{apntTime, setApntTime}=useContext(Details);

    const [apntDetails, setapntDetails] = useState({
        name: "",
        contact: "",
        date: "",
        time: "",
        email:userEmail
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setapntDetails({
            ...apntDetails, [name]: value
        })
    }

    const handleAppoint = () => {
        console.log(apntDetails)
        axios.post("http://localhost:9000/appointment",apntDetails, appntUser)
        .then((res)=>{
            console.log(res)
            setApntName(res.data.apntDetails.name)
            console.log(res.data.apntDetails)
            setApntDate(res.data.apntDetails.date)
            setApntTime(res.data.apntDetails.time)

        })
        console.log(userEmail)
        console.log(apntName)

        setShow(true)

    }

    //-----------------------------------------Modal Functions---------------------------------------//
    const openModal = () => {
        setOpen(true)
        setShow(false)
    }
    const afterOpenModal = () => {

    }
    const closeModal = () => {
        setOpen(false)
    }
    ////////------------------------------------------------------------------------------------------///
    return (
        <div className='mainClass'>
            <button className='apntBtn' onClick={openModal}>Book Appointment</button>
            <Modal
                isOpen={open}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // className="Modal"
                // overlayClassName="Overlay"
            >   {show ? <AppointCard  closeModal={closeModal} />:
            <div className="appointForm">
            <div className="appointDetails">
                <h2>Book Consultation</h2>
                <label for="consulName">Consultee Name</label>
                <input type="text" name="name" value={apntDetails.name} placeholder="Enter the name" id="consulName" onChange={handleChange} />

                <label for="contact">Contact No</label>
                <input type="number" name="contact" value={apntDetails.contact} placeholder="Enter the contact no." id="contact" onChange={handleChange} />

                <label for="date">Date</label>
                <input type="date" name="date" value={apntDetails.date} id="date" onChange={handleChange} />

                <label for="time">Time</label>
                <input type="time" name="time" id="time" value={apntDetails.time} onChange={handleChange} />

                {/* <label for="email">Email</label>
                <input type="email" name="email" id="email" value={userEmail} onChange={handleChange} /> */}
                <button onClick={handleAppoint}>Book Appointment</button>
              
            </div>

        </div>
            
            }
                
             
            </Modal>
          
          
        </div>

    )
}
export default Appoint;