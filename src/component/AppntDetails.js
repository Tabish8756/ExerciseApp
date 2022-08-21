import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Details } from "../Context";
import './Style.css'
import NavBar from './NavBar'

const AppntDetails = () => {
    const { userEmail } = useContext(Details);
    const [details, setDetails] = useState('')
    const [display, setDisplay] = useState(false);
    const {appnEmail} =userEmail;


    useEffect(() => {
        const getAppn = () => {
            console.log(appnEmail)
            axios.get(`http://localhost:9000/appointment/${appnEmail}`)
                .then((res) => {
                    console.log(res)
                    contDisplay(res.data.apntDet)
                })
        }
        getAppn();
    }, [])


   

    const deleteAppn = () => {
        axios.delete(`http://localhost:9000/appointment/${userEmail}`)
            .then((res) => {
                console.log(res.data.message)
                cancelData(res.data.message)
            })
    }

    const contDisplay = (apntData) => {
        if (apntData) {
            setDetails(apntData)
            setDisplay(true)
        }
    }

    const cancelData = (data) => {
        if (data === "111") {
            console.log("appnt deleted")
        }
        else {
            console.log("appnt not deleted")
        }
    }


    const { name, email, contact, date, time } = details;
    return (
        <div>
            <NavBar />
            {display ? <div className="appnDetail">
                <div className="apnData">
                    <h3>Consultee Name: {name}</h3>
                    <h3>Contact: {contact}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Date: {date}</h3>
                    <h3>Time: {time} hrs</h3>
                    <button onClick={deleteAppn} className="btnCancel">Cancel</button>

                </div>

            </div> : <h2>No appoint book yet. Please book the appoint</h2>}

        </div>
    )
}
export default AppntDetails;