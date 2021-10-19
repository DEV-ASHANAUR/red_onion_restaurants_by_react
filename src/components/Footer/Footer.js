import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container py-3'>
                <div className="row pt-4">
                    <div className="col-md-6 pb-3 text-center text-md-start text-lg-start">
                        <img src={logo} alt="" style={{width:'144px'}} />
                    </div>
                    <div className="col-md-3 pb-3 custom-list-item text-center text-md-start text-lg-start">
                        <li><a href="/">About online food</a></li>
                        <li><a href="/">Read out blog</a></li>
                        <li><a href="/">Sign up to deliver</a></li>
                        <li><a href="/">Add your restaurant</a></li>
                    </div>
                    <div className="col-md-3 pb3 custom-list-item text-center text-md-start text-lg-start">
                        <li><a href="/">Get help</a></li>
                        <li><a href="/">Read FAQs</a></li>
                        <li><a href="/">View all Cities</a></li>
                        <li><a href="/">Restaurant near me</a></li>
                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col-md-6 text-center text-md-start text-sm-center text-xs-center'>
                        <p className='text-white'>copyright &copy; 2021 online food</p>
                    </div>
                    <div className='col-md-6 last-fot-area justify-content-center justify-content-sm-center'>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of use</a></li>
                        <li><a href="/">Pricing</a></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;