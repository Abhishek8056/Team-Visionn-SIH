import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Components/main_login_page/Login';

ReactDOM.render(

  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </Router>,

 document.getElementById("root")
);



