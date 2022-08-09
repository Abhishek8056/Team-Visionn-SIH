import React from 'react'
import './Landing.css'


const Landing = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className=" scheme col-sm-4">
                        <h1 className='heading'>You are confuse </ h1>

                        <h1 className='heading'>which Government </ h1>

                        <h1 className='heading'>Scheme is </ h1>
                        <h1 className='heading'>benificial for you.</ h1>
                        <br />
                        <br />
                        <button type="button" class="btn eligibility btn-outline-primary">Check Eligibility</button>
                    </div>
                    <div className=" img-section col-sm-8">

                        <img className=" landing-img" src="img/img1.svg" alt="" />
                    </div>
                </div>
                <div className="scheme-box">
                    <div className="scheme-box-heading">
                        <h1>Scheme Suggestion Box</h1>
                    </div>
                    <div class=" scheme-box-row row">
                        <div class="col-sm">
                            
                          
                        </div>
                        <div class="scheme-box-img col-sm">
                            <img src="img/notepad.svg" alt="" />
                        </div>
                        <div class=" scheme-box-submit col-sm">
                            <button type="button" class="btn eligibility btn-outline-primary">Submit</button>
                        </div>
                    </div>

                </div>
                <div className="top-scheme">
                    <div className="top-scheme-heading">
                     <h1>Top Government Scheme</h1>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
