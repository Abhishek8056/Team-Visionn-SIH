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

                        <h1 className='heading'> Scheme is </ h1>
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
                    <div class=" top-scheme-row row">
                        <div class=" card-top col-sm">
                            <div class="card-body">
                                <h5 class="card-title">Pradhan Mantri Annadata Aay SanraksHan Abhiyan (PM AASHA)</h5>
                                <p class="card-text">Pradhan Mantri Annadata Aay SanraksHan Abhiyan (PM AASHA) is a scheme that aims at ensuring fair price for farmers and their produce.

                                    By strengthening the procurement process, the PM-AASHA scheme will improve the income of the farmers to a greater extent..</p>
                            </div>
                        </div>
                        <div class=" card-top col-sm">
                            <div class="card-body">
                                <h5 class="card-title">Pradhan Mantri Awaas Yojana (Gramin) </h5>
                                <p class="card-text">To provide pucca house to all who are houseless and living in dilapidated houses in rural areas. The overall target is to construct 2.95 crore pucca houses with basic amenities by March, 2024.</p>
                            </div>
                        </div>
                        <div class=" card-top col-sm">
                            <div class="card-body">
                                <h5 class="card-title">National Rurban Mission (NRuM) Vision</h5>
                                <p class="card-text">The Mission aims at development of 300 Rurban clusters, in the next five years. These clusters would be strengthened with the required amenities, for which it is proposed that resources be mobilized through convergence of various schemes of the Government, over and above which a Critical Gap Funding (CGF) would be provided under this Mission, for focused development of these clusters.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
