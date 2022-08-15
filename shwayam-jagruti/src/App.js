import React from 'react'
//MessagePort{Route,Switch} from  
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Login from './components/main_login_page/Login';
import User_dashbord from './components/User_dashbord/User_dashboard';

function App() {
  return (
    <>
  <Navbar/>
  <Landing/>
  <Login/>
  <User_dashbord/>
    </>
  );
}

export default App;
