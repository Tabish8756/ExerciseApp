import { useEffect, useState } from "react";
import { exerciseoptions, fetchData } from "../utils/fetchData";
import './Style.css'


const BodyPart = () => {
    const [data, setData] = useState();
    const [part, setPart] = useState([])
    const handleData = (part) => {
        setData(part)

    }

    console.log(data)
    useEffect(() => {
        const bodyPart = async () => {
            const partData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseoptions)
            setPart(partData)
            // console.log(partData)

        }
        bodyPart();
    }, [])
    return (
        <div className="bodyPart">
            <h3>Recommend Body Part</h3>
            {part.map((part) => {
                return <div className="partList"> <li key={part.id}


                    
               
                    onClick={() => { handleData(part) }} >
                    {part}
                </li>
                </div>
            })}
        </div>
    )
}

export default BodyPart;