// import { Avatar } from '@material-ui/core';
import React from 'react';
import logo from '../../asset/img/font.png'
import './Header.css'
// >>>>>>>>>>>>>>>>>>>>>>>>>>> main component 
const Header = () => {
//>>>>>>>>>>>>>>>> Return
    return (
        <div className="header">
            <div className="app_header">
                <img
                src={logo}
                className="app_header_logo"
                alt="logo"
                /> 
                {/* <Avatar alt="Remy Sharp" src={logo} className="post_avatar" /> */}
            </div>        
        </div>
    );
};

export default Header;