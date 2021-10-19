import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="bg-banner">
            <div className="container header-content-container">
                <h1 className="py-3" style={{fontWeight:'700'}}>Best food waiting for your belly</h1>
                <div className="search-conatiner">
                    <input type="text" placeholder="Search Here.." />
                    <button className='search-btn'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;