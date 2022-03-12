import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} className="img-fluid" width="144"  alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item pt-3 px-4">
                        <NavLink to="/" className='position-relative'>
                            <span class="material-icons">
                                shopping_cart
                            </span>
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>5</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link log-in-btn" aria-current="page" to='/login'>Log In</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/signup"><button className="btn-sign-up">Sign Up</button></NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;