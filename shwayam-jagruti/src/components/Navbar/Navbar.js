import React from 'react'
import './Navbar.css';



const Navbar = () => {
  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SWAYAM JAGRUTI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link language dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Hindi</a></li>
                  <li><a className="dropdown-item" href="#">Punjabi</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
          
              <li>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-none">A-</button>
                  <button type="button" class="btn btn-outline-none">A</button>
                  <button type="button" class="btn btn-outline-none">A+</button>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Register</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar