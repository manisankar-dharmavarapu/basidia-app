import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from "../../redux/userSlice";
import './index.css'

const AddUser = () => {
    const dispatch = useDispatch()
    const statesData = useSelector((state) => state.users.statesData)
    const [userData, setUserData] = useState({
        id: Math.floor(Math.random() * 1000000000000),
        userName: '',
        email: '',
        phone: '',
        dob: '',
        stateData: ''
    })

    const [touched, setTouched] = useState({
        userName: false,
        email: false,
        phone: false,
        dob: false,
        stateData: false,
    })

    const onUserData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const onBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    const onClear = () => {
        setUserData({
            userName: '',
            email: '',
            phone: '',
            dob: '',
            stateData: ''
        })
        setTouched({
            userName: false,
            email: false,
            phone: false,
            dob: false,
            stateData: false,
        })
    }
    const onAddUser = (e) => {
        e.preventDefault()
        dispatch(addUser(userData))
        onClear()
    }

    const validate = () => {
        const errors = {}
        // eslint-disable-next-line
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phoneRegex = /^((\\+91-?)|0)?[0-9]{10}$/;

        if (userData.userName === "") {
            errors.userName = "Please enter user name"
        }

        if (userData.phone) {
            if (!phoneRegex.test(userData.phone)) {
                errors.phone = "Please enter valid phone number (10 digits)"
            }
        } else {
            errors.phone = "Please enter phone number"
        }

        if (userData.email) {
            if (!emailRegex.test(userData.email)) {
                errors.email = "Please enter valid email id"
            }
        } else { errors.email = "Please enter email id" }

        if (userData.dob === "") {
            errors.dob = "Please enter Date of Birth"
        }

        if (userData.stateData === "") {
            errors.stateData = "Please select a state"
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0,
        }
    }
    const { errors, isValid } = validate()
    return (
        <div>
            <p className='section-title'>Add User</p>
            <div className='content-container'>
                <form>
                    <div className='form-input'>
                        <label className="input-label" htmlFor="username">Username</label>
                        <div className="input-error-container">
                            <input
                                type="text"
                                className={touched.userName && !!errors.userName ? `error-input input-styles` : `input-styles active-input`}
                                onBlur={onBlur}
                                name='userName'
                                value={userData.userName}
                                onChange={onUserData}
                                id="username"
                                placeholder="username"
                            />
                            {touched.userName && !!errors.userName && <span className="error-msg">{errors.userName}</span>}
                        </div>
                    </div>

                    <div className='form-input'>
                        <label className="input-label" htmlFor="email">Email</label>
                        <div className="input-error-container">
                            <input
                                type="email"
                                className={touched.email && !!errors.email ? `error-input input-styles` : `input-styles active-input`}
                                onBlur={onBlur}
                                name='email'
                                value={userData.email}
                                onChange={onUserData}
                                id="email"
                                placeholder="email" />
                            {touched.email && !!errors.email && <span className="error-msg">{errors.email}</span>}
                        </div>
                    </div>
                    <div className='form-input'>
                        <label className="input-label" htmlFor="phone">Phone</label>
                        <div className="input-error-container">
                            <input
                                type="phone"
                                className={touched.phone && !!errors.phone ? `error-input input-styles` : `input-styles active-input`}
                                onBlur={onBlur}
                                name="phone"
                                value={userData.phone}
                                onChange={onUserData}
                                id="phone"
                                placeholder="phone"
                            />
                            {touched.phone && !!errors.phone && <span className="error-msg">{errors.phone}</span>}
                        </div>
                    </div>
                    <div className='form-input'>
                        <label className="input-label" htmlFor="dob">DOB</label>
                        <div className="input-error-container">
                            <input
                                type="date"
                                className={touched.dob && !!errors.dob ? `error-input input-styles` : `input-styles active-input`}
                                onBlur={onBlur}
                                name="dob"
                                value={userData.dob}
                                onChange={onUserData}
                                id="dob" />
                            {touched.dob && !!errors.dob && <span className="error-msg">{errors.dob}</span>}
                        </div>
                    </div>
                    <div className='form-input'>
                        <label className="input-label" htmlFor="state">State</label>
                        <div className="input-error-container">
                            <select
                                id="state"
                                name="stateData"
                                className={touched.stateData && !!errors.stateData ? `error-input select-styles` : `select-styles active-input`}
                                onBlur={onBlur}
                                value={userData.stateData}
                                onChange={onUserData}
                            >
                                <option value="">Select Provider</option>
                                {statesData.map((state) => {
                                    return (
                                        <option
                                            key={state.code}
                                        >
                                            {state.name}
                                        </option>
                                    )
                                })}
                            </select>
                            {touched.stateData && !!errors.stateData && <span className="error-msg">{errors.stateData}</span>}
                        </div>
                    </div>
                    <button disabled={!isValid} onClick={onAddUser} className="btn-styles">Create User</button>
                </form>
            </div>
        </div>
    )
}
export default AddUser