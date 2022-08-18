import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" scheme col-sm-4">
            <h1 className="heading">You are confuse </h1>

            <h1 className="heading">which Government </h1>

            <h1 className="heading"> Scheme is </h1>
            <h1 className="heading">benificial for you.</h1>
            <br />
            <br />
            <button
              type="button"
              className="btn eligibility btn-outline-primary"
            >
              Check Eligibility
            </button>
          </div>
          <div className=" img-section col-sm-8">
            <img className=" landing-img" src="img/img2.svg" alt="" />
          </div>
        </div>
        <div className="scheme-box">
          <div className="scheme-box-heading">
            <h1>Scheme Suggestion Box</h1>
          </div>
          <div className=" scheme-box-row row">
            <div className="col-sm selection-box">
              <div className="row">
                <div className="dropdown row scheme-selection-item">
                  <button
                    className="Scheme-state btn btn-light dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Enter State
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link class="dropdown-item" to="/">
                        Andhra Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Arunachal Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Assam
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Bihar
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Chhattisgarh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Goa
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Gujarat
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Haryana
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Himachal Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Jharkhand
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Karnataka
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Kerala
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Madhya Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Maharashtra
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Manipur
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Meghalaya
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Mizoram
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Nagaland
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Odisha
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Punjab
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Rajasthan
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Sikkim
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Tamil Nadu
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Telangana
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Tripura
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Uttarakhand
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Uttar Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        West Bengal
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="row scheme-selection-item-2">
                  <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter Your Gender" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                </div>
                <div className="row scheme-selection-item-3">
                  <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter Occuption" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                </div>
                <div className=" scheme-box-submit">
              <button
                type="button"
                className="btn eligibility btn-outline-primary"
              >
                Submit
              </button>
            </div>
              </div>
            </div>
            <div className="scheme-box-img col-sm">
              <img src="img/notepad2.svg" alt="" />
            </div>
            
          </div>
        </div>
        <div className="top-scheme">
          <div className="top-scheme-heading">
            <h1>Top Government Scheme</h1>
          </div>
          <div className=" top-scheme-row row">
            <div className=" card-top col-sm">
              <div className="card-body">
                <h5 className="card-title">
                  Pradhan Mantri Annadata Aay SanraksHan Abhiyan (PM AASHA)
                </h5>
                <p className="card-text">
                  The Government has taken another giant leap towards boosting pro-farmer 
                  initiatives. With the recent approval of the umbrella scheme Pradhan Mantri
                   Annadata Aay SanraksHan Abhiyan (PM-AASHA), that is aimed towards ensuring
                   remunerative prices to farmers for their produce, the government has taken 
                   an unprecedented step.

                  
                </p>
              </div>
            </div>
            <div className=" card-top col-sm">
              <div className="card-body">
                <h5 className="card-title">
                  Pradhan Mantri Awaas Yojana (Gramin){" "}
                </h5>
                <p className="card-text">
                Pradhan Mantri Awas Yojana – Urban (PMAY-U), a flagship Mission of Government
                of India being implemented by Ministry of Housing and Urban Affairs (MoHUA),
                was launched on 25th June 2015. The Mission addresses urban housing shortage
                  among the EWS/LIG and MIG categories including the slum dwellers by ensurind 
                  a pucca house to all eligible urban households by the year 2022.
                </p>
              </div>
            </div>
            <div className=" card-top col-sm">
              <div className="card-body">
                <h5 className="card-title">
                  National Rurban Mission (NRuM) Vision
                </h5>
                <p className="card-text">
                  The Mission aims at development of 300 Rurban clusters, in thenext five years.
                  These clusters would be strengthened with therequired amenities, for which it is
                  proposed that resources be mobilized through convergence of various schemes of the
                  Government, over and above which a Critical Gap Funding (CGF)would be provided under
                  this Mission, for focused development of these clusters.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer-pre">
          <span></span>
        </div>
        <div className="Footer-Section">
          <div className="Footer-item container text-center text-md-left">
            <div className="row">
              <div className="footer-link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="/">
                    <b>Contact Us</b>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <b>About Us</b>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <b>Help</b>
                  </Link>
                </p>
              </div>

              <div className="footer-link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="/">
                    <b>Center Schemes</b>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <b>State Schemes</b>
                  </Link>
                </p>
                <p>
                  <Link to="/">
                    <b>Feedback</b>
                  </Link>
                </p>
              </div>

              <div className="footer-link col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="/">
                    <b>Sitemap</b>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <hr className="hr-line-footer"></hr>
          <div className="footer-link footer-copyright text-center py-3">

            <Link to="/">
              <b>© 2022 Copyright : Shwayam-Jagruti</b>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
