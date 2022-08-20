import React from 'react'
import './Login.css'
import admin from './admin.svg';
import user from './user.svg'
import department from './department.png'

const Login = () => {
    return (
        <>
            <div className=" outerbox container">
                <div class="card-group">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Admin</h5>
                            <img src={admin} class="card-img-top" alt="..." />
                            </div>
                             <link to="/Dashboard/UserDetails">
                             <button
                                type="button"
                                className="btn login btn-outline-primary"
                            >
                                Login
                            </button>
                             </link>
                            
                           <div>


                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">User</h5>
                            <img src={user} class="card-img-top" alt="..." />
                            </div>
                            <button
                                type="button"
                                className="btn login btn-outline-primary"
                            >
                                Login
                            </button>
                           <div>


                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Department </h5>
                            <img src={department} class=" thierdpng card-img-top" alt="..." />
                           </div>
                            <button
                                type="button"
                                className="btn login btn-outline-primary"
                            >
                                Login
                            </button>
                           <div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login