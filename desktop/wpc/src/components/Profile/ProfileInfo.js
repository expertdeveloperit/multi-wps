import React, { Component } from 'react';

class ProfileInfo extends Component {
    
    render() {
        console.log("sdg", this.props.info)
        return (
            <div>
               <div className="Alerts-section ">
                  <div className="sec1">
          					<p className="mb0 ptitle">{this.props.info.title}</p>
          					<p>{this.props.info.dob}</p>
                  </div>
                            <div className="sec1">
                              <p className="mb0 gray555">Aliases</p>
                              <p className="">{this.props.info.aliases}</p>
                            </div>
                            <div className="sec1">
                    					<p>{this.props.info.sex}</p>
                            </div>
                    				<div className="sec1">
                    					<p>HF - {this.props.info.hf}</p>
                            </div>
                    				<div className="sec1">
                    				  <p className="mb0 gray555">MRN</p>
                    					<p>{this.props.info.mrn}</p>
                    					<p className="mb0 gray555">SSN</p>
                    					<p>{this.props.info.ssn}</p>
                            </div>
                  				  <div className="psec1 footer">
                  				  	<div className="phone-no">
                  						<p>{this.props.info.phone} <i className="zmdi zmdi-phone"></i></p>
                  					</div>
          					        <p className="cell-text">Cell</p>
                  </div>
                </div> 
            </div>
        );
    }
}

export default ProfileInfo;
