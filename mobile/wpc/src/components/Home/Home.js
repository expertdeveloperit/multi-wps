import React, { Component } from 'react';
import logo from '../../images/logo.jpg';
import { NavLink } from 'react-router-dom';
import Index from '../Common/index';

class Home extends Component {
    render() {
        return (
            <div className="blue home-bg">
                <Index />
                <div className="container">
                    <div className="row">
                        <div className="columns small-12">
                            <div className="container-1 home">
                                <div className="logo-container">
                                    <img src={logo} alt="logo"/>
                                </div>
                                <p>
                                    This is the Whole Person Care App prototype RideAlong created with the San Fransisco Department of Health through the startup in Residence Progarm.
                                </p>
                                <ul>
                                    <li>
                                    it demonstarate :
                                    </li>
                                    <li>
                                    1) How fields are auto-populated.
                                    </li>
                                    <li>
                                    2) How providers can quickly view patinent profiles and update information in their fields.
                                    </li>
                                </ul>
                                <p>
                                    You won't be asked to enter any data, just tap around and see the demo.
                                </p>
                                <p className="last-p">
                                    Question ? <br/>
                                    team@getridealong.com
                                </p>
                                <NavLink className="button custom-button-1" to="/login">View Prototype</NavLink>
                            </div>
                            
                        </div>
                    </div>
                </div>      
            </div>
        );
    }
}

export default Home;
