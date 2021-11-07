import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import { IoMenuOutline } from "react-icons/io5"
import UserIcon from '../../assets/user-icon.png'
import { useSelector } from 'react-redux'
import moment from "moment";
import './index.css'

const Users = () => {
    const data = useSelector((state) => state.users)
    const [searchStatus, setSearchStatus] = useState(false)
    const [allUsers, setAllUsers] = useState(data)
    const [users, setUsers] = useState(data)

    useEffect(() => {
        setAllUsers(data.users)
        setUsers(data.users)
    }, [data])
    console.log(data, allUsers, "uuuuu")

    const onSearch = (e) => {
        const res = allUsers.filter((user) => user.userName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setUsers(res)
    }

    const getAge = (birthdate) => {
        var years = moment().diff(birthdate, 'years');
        return years
    }

    const renderUserDetails = () => (
        <>
            <div>
                <p className="search-title">Card View</p>
                <div className="card-container">
                    {users.length > 0 && users.map((user) => {
                        return (
                            <div className="user-card" key={user.id}>
                                <img className="user-icon" src={UserIcon} alt="user-icon" />
                                <div className='card-content'>
                                    <p className="user-details">{user.userName}</p>
                                    <p className="user-details" style={{ lineHeight: 0 }}>{getAge(user.dob)}</p>
                                    <p className="user-details">{user.stateData}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <p className="search-title">List View</p>
                <ul className='main-list-container'>
                    {users.length > 0 && users.map((user) => {
                        return (
                            <li className="list-container" key={user.id}>
                                <div className="list-item">
                                    <img className="list-user-icon" src={UserIcon} alt="user-icon" />
                                    <p className="user-details">{user.userName}-</p>
                                    <p className="user-details">{getAge(user.dob)}-</p>
                                    <p className="user-details">{user.stateData}</p>
                                </div>
                                <IoMenuOutline />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
    return (
        <div>
            <p className='section-title'>Users</p>
            <div className='users-container'>
                <div>
                    <p className="search-title">Search</p>
                    <div className="search-container">
                        <input className="search-input" type="text" onChange={onSearch} placeholder="Search user by name..." />
                        <BsSearch />
                    </div>
                </div>
                {users.length === 0 ? <div><p>No Data</p></div> : renderUserDetails()}
            </div>
        </div>
    )
}
export default Users