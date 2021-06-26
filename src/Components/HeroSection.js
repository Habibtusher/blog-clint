import React from 'react';
import './HeroSection.css';
import what from "../images/what.png"
const HeroSection = () => {
    return (
        <div className="heroBackground">
            <div className="container">
                <div className="row d-flex align-items-center ">
                    <div className="col-md-6 mt-4 ">
                        <h1>Welcome</h1>
                        <h1>To</h1>
                        <h1>Turnip Blog</h1>
                    </div>
                    <div className="col-md-6 mt-5">
                        <img style={{borderRadius:"10px", marginTop:"30px"}} src={what} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;