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
            <img className=" landing-img" src="img/img1.svg" alt="" />
          </div>
        </div>
        <div className="scheme-box">
          <div className="scheme-box-heading">
            <h1>Scheme Suggestion Box</h1>
          </div>
          <div className=" scheme-box-row row">
            <div className="col-sm">
              <div className="row">
                <div className="dropdown row scheme-selection-item">
                  <button
                    className="Scheme-state btn btn-light dropdown-toggle"
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
                      <a class="dropdown-item" href="/">
                        Andhra Pradesh
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Arunachal Pradesh
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Assam
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Bihar
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Chhattisgarh
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Goa
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Gujarat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Haryana
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Himachal Pradesh
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Jharkhand
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Karnataka
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Kerala
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Madhya Pradesh
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Maharashtra
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Manipur
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Meghalaya
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Mizoram
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Nagaland
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Odisha
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Punjab
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Rajasthan
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Sikkim
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Tamil Nadu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Telangana
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Tripura
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Uttarakhand
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Uttar Pradesh
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        West Bengal
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row scheme-selection-item-2">
                    <div className="input-group mb-3">
                       <input type="text" class="form-control" placeholder="Enter Your Gender" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="row scheme-selection-item-3">
                    <div className="input-group mb-3">
                       <input type="text" class="form-control" placeholder="Enter Occuption" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>
              </div>
            </div>
            <div className="scheme-box-img col-sm">
              <img src="img/notepad.svg" alt="" />
            </div>
            <div className=" scheme-box-submit col-sm">
              <button
                type="button"
                className="btn eligibility btn-outline-primary"
              >
                Submit
              </button>
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
                  Pradhan Mantri Annadata Aay SanraksHan Abhiyan (PM AASHA) is a
                  scheme that aims at ensuring fair price for farmers and their
                  produce. By strengthening the procurement process, the
                  PM-AASHA scheme will improve the income of the farmers to a
                  greater extent..
                </p>
              </div>
            </div>
            <div className=" card-top col-sm">
              <div className="card-body">
                <h5 className="card-title">
                  Pradhan Mantri Awaas Yojana (Gramin){" "}
                </h5>
                <p className="card-text">
                  To provide pucca house to all who are houseless and living in
                  dilapidated houses in rural areas. The overall target is to
                  construct 2.95 crore pucca houses with basic amenities by
                  March, 2024.
                </p>
              </div>
            </div>
            <div className=" card-top col-sm">
              <div className="card-body">
                <h5 className="card-title">
                  National Rurban Mission (NRuM) Vision
                </h5>
                <p className="card-text">
                  The Mission aims at development of 300 Rurban clusters, in the
                  next five years. These clusters would be strengthened with the
                  required amenities, for which it is proposed that resources be
                  mobilized through convergence of various schemes of the
                  Government, over and above which a Critical Gap Funding (CGF)
                  would be provided under this Mission, for focused development
                  of these clusters.
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
                  <a href="/">
                    <b>Contact Us</b>
                  </a>
                </p>
                <p>
                  <a href="/">
                    <b>About Us</b>
                  </a>
                </p>
                <p>
                  <a href="/">
                    <b>Help</b>
                  </a>
                </p>
              </div>

              <div className="footer-link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="/">
                    <b>Center Schemes</b>
                  </a>
                </p>
                <p>
                  <a href="/">
                    <b>State Schemes</b>
                  </a>
                </p>
                <p>
                  <a href="/">
                    <b>Feedback</b>
                  </a>
                </p>
              </div>

              <div className="footer-link col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="/">
                    <b>Sitemap</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <hr className="hr-line-footer"></hr>
          <div className="footer-link footer-copyright text-center py-3">
           
            <a href="/">
              <b>© 2022 Copyright : Shwayam-Jagruti</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
