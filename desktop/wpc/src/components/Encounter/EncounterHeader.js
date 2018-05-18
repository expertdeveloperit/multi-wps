import React, { Component } from 'react';

class EncounterHeader extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="parent pd">
                <div className="joanna-smith-section">
                    <ul>
                        <li><span className="patient-ims"><img src={require("../../images/team2.jpg")} /></span><span id="name">Joanna Smith</span></li>
                        <li><span>+ Add another provider</span></li>
                        <li><i className="zmdi zmdi-arrow-right"></i>
<span>Reassign</span></li>
                    </ul>
                </div>
            </div>
);
    }
}

export default EncounterHeader;
