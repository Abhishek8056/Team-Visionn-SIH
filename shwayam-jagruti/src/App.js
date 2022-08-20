import React from 'react';
import './App.css'; 
import Navbar from './Components/Navbar/Navbar.js';
import Landing from './Components/Landing/Landing.js'

import Signup from "./Components/Register_login_page/Signup";
import Login from "./Components/Register_login_page/Login";
import Dashboard from "./Components/Register_login_page/Dashboard";
import PrivateRoute from "./Components/Register_login_page/PrivateRoute";
import PublicRoute from "./Components/Register_login_page/PublicRoute";
import ChangePassword from "./Components/Register_login_page/ChangePassword";
import UserDetails from "./Components/Register_login_page/UserDetails";

function App() {
  return (
  
    <div className="App">
        <Navbar/>
        <Landing/>
    </div>
  );
}

export default App;
