import {DropDownItem} from './NavItem'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
const Dropdown=()=>{
    const [dropDown, setDropDown]= useState(false);
    return(
       <ul className={dropDown ?"appoint-submenu-clicked":"appoint-submenu"} onClick={()=>setDropDown(!dropDown)}>
         {DropDownItem.map((item)=>{
            return <li key={item.id}>
                <Link to={item.path} className={item.cName}
                onClick={()=>setDropDown(false)}
                >{item.title}</Link>
            </li>
         })}
       </ul>
    )
}
export default Dropdown;