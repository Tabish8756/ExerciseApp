import { NavItem } from "./NavItem";
import {Link} from 'react-router-dom';
import './NavBar.css';
const SideBar=()=>{
    return(
        <ul className="sideBar">
        {NavItem.map((item)=>{
            return <li key={item.id}>
                <Link to={item.path} className={item.cName}>{item.title}</Link>
            </li>
        })}
        </ul>
    )
}
export default SideBar;