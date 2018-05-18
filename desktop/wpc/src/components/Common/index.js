import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="container" id="header">
                <div className="row">
                    <div className="top-bar tbbs" id="responsive-menu">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">WPC App</li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                      <NavLink to='/profile'> <i className="zmdi zmdi-menu zmdi-hc-2x"></i></NavLink>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
