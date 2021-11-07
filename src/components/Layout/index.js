import React from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";
import './index.css'

const Layout = (props) => {
    return (
        <div className='layout-container'>
            <SideMenu />
            <div className='header-content'>
                <Header />
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout