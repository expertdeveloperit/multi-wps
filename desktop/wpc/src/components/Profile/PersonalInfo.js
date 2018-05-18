import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo';
class PersonalInfo extends Component {
    render() {
        return (
            <div className="personalInfo text-left">
                <div className="summary-section whitebgnp p0">
                    <ProfileInfo info={this.props.info}/>
                </div>
                <div className="summary-section whitebgnp">
            		<div className="patint-bg">
            			<h3>Personal Information <span><i className="zmdi zmdi-edit"></i> Edit</span></h3>
            			<p><span><i className="zmdi zmdi-favorite"></i></span> Has a dog named Otis</p>
            			<p><span><i className="zmdi zmdi-favorite"></i></span> Like to talk about the Giants</p>
            			<p><span className="red"><i className="zmdi zmdi-thumb-down"></i></span> doesn't like talking about hre family</p>
            		</div>
            		<div className="patint-bg homeless bb0">
            			<p><span><i className="zmdi zmdi-favorite"></i></span> Homeless, unsheltered</p>
            			<p><span><i className="zmdi zmdi-favorite"></i></span> HUMS 1%</p>
            		</div>
            	</div>
            	<div className="summary-section whitebgnp">
            		<div className="footer">
            			<h5><span><i className="zmdi zmdi-accounts-list-alt"></i></span> Johanna Smith</h5>
            			<p className="fpt">Primarey Caer Provide</p>
            			<p className="fpt">SF General</p>
            			<div className="phone-no">
            				<p>S(415) 555- 1111 ext. 103 <i className="zmdi zmdi-phone"></i><span>Desk <i className="zmdi zmdi-circle"></i> Primary</span></p>
            				<p>S(415) 555- 1111 ext. 103 <i className="zmdi zmdi-phone"></i><span>Cell</span></p>
            				<p>johanna.smith@Desc.org <i className="zmdi zmdi-email"></i> <span>Work Email</span></p>
            			</div>
            		</div>
            	</div>
            </div>
        );
    }
}

export default PersonalInfo;
