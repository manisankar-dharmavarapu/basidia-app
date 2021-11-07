import React, { useState } from "react";
import UserIcon from '../../assets/user-icon.png'
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import AddUser from '../../assets/add-user.png'
import Users from '../../assets/users.png'
import Weather from '../../assets/weather.png'
import Logo from '../../assets/Logo.png'
import { Link, useLocation } from "react-router-dom"
import moment from 'moment'
import './index.css'

const menuList = [
    {
        link: "/add-user",
        title: "Add User",
        icon: AddUser,
    },
    {
        link: "/users",
        title: "Users",
        icon: Users,
    },
    {
        link: "/weather",
        title: "Weather",
        icon: Weather,
    },
]

const Header = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const date = moment(new Date()).format("ddd D MMM h:mm A")

    const toggleMenu = () => setOpen(!open)

    const renderMenuItem = (item) => {
        const { link, title, icon } = item
        const isActive = location.pathname === link
        const menuItem = isActive ? 'sm-active-menu-item' : 'sm-menu-item'
        const menuIcon = isActive ? "sm-menu-icon active-icon-color" : "sm-menu-icon"
        return (
            <Link to={link} className="link-styles" onClick={toggleMenu}>
                <li className={menuItem}>
                    <img className={menuIcon} src={icon} alt={`${title} icon`} />
                    {title}
                </li>
            </Link>
        )
    }

    const menuStatus = open ? 'menu-list' : 'closed-menu-list'
    return (
        <div className='header-container'>
            <h1 className="date">{date}</h1>
            <img className="sm-logo-img" src={Logo} alt="websie logo" />
            <div className="profile-container">
                <p className="profile-name">Welcome John</p>
                <img className='profile-logo' src={UserIcon} alt="user icon" />
            </div>
            <div className='sm-header' onClick={toggleMenu}>
                <button className='menu-btn'>
                    {open ? <GrClose className="close-icon" /> :
                        <HiMenu className="menu-icon" />}
                </button>
                <div className={menuStatus}>
                    {menuList.map((item) => renderMenuItem(item))}
                    <li className='sm-menu-item'>
                        <img className='sm-menu-icon' src={UserIcon} alt={`profile icon`} />
                        John
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header