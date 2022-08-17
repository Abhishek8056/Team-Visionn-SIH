import React from "react";
import "./User_dashboard.css";
import { Link } from 'react-router-dom';

const User_dashboard = () => {
    return(
        <>
        <div class="wrapper">
       
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Dummy Heading</p>
                <li class="active">
                    <Link to="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</Link>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="/">Home 1</Link>
                        </li>
                        <li>
                            <Link to="/">Home 2</Link>
                        </li>
                        <li>
                            <Link to="/">Home 3</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/">About</Link>
                    <Link to="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</Link>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link to="/">Page 1</Link>
                        </li>
                        <li>
                            <Link to="/">Page 2</Link>
                        </li>
                        <li>
                            <Link to="/">Page 3</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/">Portfolio</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <Link to="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</Link>
                </li>
                <li>
                    <Link to="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</Link>
                </li>
            </ul>
        </nav>

       
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Page</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Page</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Page</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Page</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <h2>Collapsible Sidebar Using Bootstrap 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>

        </>
    );
};

export default User_dashboard;