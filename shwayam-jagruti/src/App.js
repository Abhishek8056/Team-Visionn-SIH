import React from 'react';
import { Router, Route, Switch } from "react-router";
//import { createBrowserHistory } from "history";
import './App.css'; 
import Navbar from './Components/Navbar/Navbar.js';
import Landing from './Components/Landing/Landing.js'
import { Redirect } from "react-router-dom";

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
        <Router history={history}>
          <Switch>
            <PrivateRoute path="/Dashboard/UserDetails" component={UserDetails} />
            <PublicRoute
              restricted={true}
              component={Signup}
              path="/Signup"
              exact
            />
            <PublicRoute restricted={true} component={Login} path="/" exact />
            <PrivateRoute
              component={ChangePassword}
              path="/Dashboard/ChangePassword"
              exact
            />
            <PrivateRoute component={Dashboard} path="/Dashboard" exact />
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
