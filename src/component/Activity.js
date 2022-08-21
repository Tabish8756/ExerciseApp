import { useContext } from "react"
import { act } from "react-dom/test-utils"
import { Details } from "../Context"
import NavBar from "./NavBar"
import './Style.css'


const Activity=()=>{
    const {activity, setActivity} =useContext(Details)
    // console.log(activity)
    const handleDelete=(id)=>{
        setActivity(activity.filter((activity)=>activity.id !== id))
    }
    return(
      <div>
        <NavBar />
        <table className="activityTable">
          <tr>
            <th>Body Part</th>
            <th>Name</th>
            <th>Equipment</th>
            <th>Target</th>
            <th>Activity</th>
          </tr>
          
          {activity.map((item)=>{
            return <tr>
             <td>{item.bodyPart}</td>
            <td>{item.name}</td>
            <td>{item.equipment}</td>
            <td>{item.target}</td>
            <td><button onClick={()=>handleDelete(item.id)} className="btnDelete">Delete</button></td>
            </tr>
          })}
          
           
        </table>
      </div>
    )
}
export default Activity