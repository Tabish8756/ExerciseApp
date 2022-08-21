import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Details } from '../Context'
import { useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Dropdown from './Dropdown'
import './NavBar.css'
import { NavItem } from './NavItem'
import SideBar from './SideBar'

const NavBar = () => {
    const [showDrop, setShowDrop] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(true)
    const navigate = useNavigate()
    const { name } = useContext(Details)
    const handleLogOut = () => {
        navigate('/')
    }
    return (
        <div>
            <nav className='navBar'>
                <ul className='openCloseIcon'>
                    {mobileMenu ? <Link to='' onClick={() => setMobileMenu(false)} className="openMenu">{<AiOutlineMenu />}</Link>
                        : <Link to='' onClick={() => setMobileMenu(true)} className="closeMenu">{<AiOutlineClose />}</Link>}
                    {!mobileMenu ? <SideBar /> : ''}
                </ul>

                <Link to="/" className="navBarLogo">FITVIRO</Link>
                <ul className="nav-items">
                    {NavItem.map((item) => {
                        if (item.title === 'Appointment') {
                            return <li key={item.id} className={item.cName}
                                onMouseEnter={() => setShowDrop(true)} onMouseLeave={() => setShowDrop(false)}
                            >
                                <Link to={item.path} >{item.title}</Link>
                                {showDrop && < Dropdown />}
                            </li>
                        }

                        return <li key={item.id} className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>

                        </li>
                    })}
                </ul>
                <div className="userDetails">
                    <h3>{name}</h3>
                </div>
                <button className='btnLogOut' onClick={handleLogOut}>Logout</button>
            </nav>

        </div>
    )
}
export default NavBar;