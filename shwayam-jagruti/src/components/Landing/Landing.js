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
                        <br/>
                        <br/>
                        <button type="button" class="btn eligibility btn-outline-primary">Check Eligibility</button>
                    </div>
                    <div className=" img-section col-sm-8">
                    
                        <img  className=" landing-img" src="img/img1.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
