import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//MessagePort{Route,Switch} from  
import './App.css'; 
import Navbar from './Components/Navbar/Navbar.js';
import Landing from './Components/Landing/Landing';
import Login from './Components/main_login_page/Login';

import UserDashboard from './Components/UserDashboard/UserDashboard';

function App() {
  return (
  
    <div className="App">
        <Navbar/>
        <Landing/>
        <Routes>
          <Route path="/" exact component={() => <Landing />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/" exact component={() => <Navbar />} />
          <Route path="/UserDashboard" exact component={() => <UserDashboard />} />
        </Routes>
    </div>

  );
}

export default App;
