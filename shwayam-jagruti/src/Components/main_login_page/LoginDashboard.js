import React from 'react'
import { Link } from 'react-router-dom';
import './Login2.css'
import admin from './admin.svg';
import user from './user.svg'
import department from './department.png'
import Navbar from '../Navbar/Navbar';


const rafce = () => {
    return (
        <>
            <Navbar />
            <div className=" outerbox container">
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Admin</h5>
                            <img src={admin} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-login-btn">
                            <Link type="button" className="btn eligibility login-btn btn-link" to="/UserDashboard">Login</Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User</h5>
                            <img src={user} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-login-btn">
                        <Link type="button" className="btn eligibility login-btn btn-link" to="/Login">Login</Link>

                        </div>

                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Department </h5>
                            <img src={department} className=" thierdpng card-img-top" alt="..." />
                        </div>
                        <div className="card-login-btn">
                        <Link type="button" className="btn eligibility login-btn btn-link" to="/">Login</Link>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default rafce