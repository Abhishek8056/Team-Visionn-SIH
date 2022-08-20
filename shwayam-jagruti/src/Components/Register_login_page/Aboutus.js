import React from "react";
import './Aboutus.css'
class Aboutus extends React.Component {
  render() {
   
    return (
      <div>
          <div className="row">
            <div className="col-md-12">
              <h1 className="H1" > Welcome! to Dashboard</h1>
              <div className="line"></div>
            </div>
            <div className="row">
              <div className="col-md-4 aboutus">
                <div className="card">
                  <img
                    className="card-img-top commonImgage"
                    src="http://www.salsacentro.com/wp-content/uploads/2019/02/about-us-title-image.png"
                    alt="Cardcap"
                  ></img>
                  <div className="card-body commonCard">
                    <h5 className="card-title">
                      <b>About Us</b>
                    </h5>
                    <p className="card-text">
                    ###########################
                      @@@@@@@@@@@@@@@@@@@@@@@@
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4  aboutus">
                <div className="card ">
                  <img
                    className="card-img-top commonImgage"
                    src="http://euromath.org/assets/images/2019/contact-us1.jpg"
                    alt="Card cap"
                  ></img>
                  <div className="card-body commonCard">
                    <h5 className="card-title">
                      <b>Contact Us</b>
                    </h5>
                    <p className="card-text">
                    ###########################
                      @@@@@@@@@@@@@@@@@@@@@@@@
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 aboutus">
                <div className="card">
                  <img
                    className="card-img-top commonImgage"
                    src="https://www.howandwhat.net/wp-content/uploads/2017/08/Service.jpg"
                    alt="Card cap"
                  ></img>
                  <div className="card-body commonCard">
                    <h5 className="card-title">
                      <b>Services</b>
                    </h5>
                    <p className="card-text">
                      ###########################
                      @@@@@@@@@@@@@@@@@@@@@@@@
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    
    );
  }
}
export default Aboutus;
