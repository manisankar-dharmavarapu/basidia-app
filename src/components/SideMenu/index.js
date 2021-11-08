import React from "react";
import Logo from '../../assets/Logo.png'
import AddUser from '../../assets/add-user.png'
import Users from '../../assets/users.png'
import Weather from '../../assets/weather.png'
import { Link, useLocation } from "react-router-dom"
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

function SideMenu() {
    const location = useLocation();

    const renderMenuItem = (item) => {
        const { link, title, icon } = item
        const isActive = location.pathname === link
        const activeMenuItem = isActive
            ? "lg-menu-item active-list-item"
            : "lg-menu-item"
        const menuIcon = isActive ? "menu-logo active-icon-color" : "menu-logo"
        return (
            <Link to={link} className="link-styles">
                <li className={activeMenuItem}>
                    <img className={menuIcon} src={icon} alt={`${title} icon`} />
                    {title}
                </li>
            </Link>
        )
    }

    const containerTheme = 'light-theme-container lg-menu-container side-menu-position'
    return (
        <div className={containerTheme}>
            <ul className="lg-menu-list">
                <div className="img-position">
                    <img src={Logo} alt="company logo" />
                </div>
                <hr className="divider-styles" />
                {menuList.map((item) => renderMenuItem(item))}
            </ul>
        </div>
    )
}

export default SideMenu