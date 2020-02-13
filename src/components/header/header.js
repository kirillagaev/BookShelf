import React from 'react';
import logo from './logo.png';

function header() {
    return(
        <div className="header">
            <img className="logo" src={logo} alt='logo' />
        </div>
    )
}

export default header;