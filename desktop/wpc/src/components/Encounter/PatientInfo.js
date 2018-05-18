import React, { Component } from 'react';

class PatientInfo extends Component {
    render() {
        return (
            <div className="parent pd">
			        <div class="patient-inner-section">
                        <div className="main-patient-info">
                            <div className="inner-patient-info">
                                <h2 className="heading">Patient Information</h2>
                                <p>Pre-filled based on the patient's profile.Please review the information to confirm it's correct.</p>

                                <div className="name-and-demo">
                                    <h2 className="heading2">Name and demographics</h2>
                                    <form>
                                        <input className="name1" type="text" name="FirstName" value={this.props.info.title} readOnly /><br/>
                                        <input className="dob" type="text" name="DOB" value={this.props.info.dob} readOnly/><br/>
                                    </form>
                                    
                                </div>

                                <div className="ident">
                                    <h2 className="heading2">Identification numbers</h2>
                                    <span>MRN</span>
                                    <form>
                                        <input className="dob1" type="text" name="MRN" value={this.props.info.mrn} readOnly/><br/>
                                    </form>
                                </div>

                                <div className="ident">
                                    <h2 className="heading2">Patient contact information</h2>
                                    <span>Phone number</span>
                                    <form>
                                        <input className="dob1" type="text" name="cell" value={this.props.info.phone} readOnly /><br/>
                                    </form>
                                </div>
                                <div className="save-exist">
                                    <ul>
                                        <li >REASSIGN</li>
                                        <li className="save-exist-btn" onClick={this.props.nextCount}>CONTINUE</li>
                                        <li className="save-continue" >SAVE AND EXIT</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default PatientInfo;
