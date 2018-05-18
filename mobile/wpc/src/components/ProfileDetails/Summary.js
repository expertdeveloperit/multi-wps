import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Summary extends Component {
    render() {
        return (
            <div className="container-6">
	            <div className="summary-section ">
	            	<div className="hd">
	            		<h3> Follow-up Plan<span><NavLink to="/summaryfull">VIEW FULL</NavLink></span></h3>
	            		<ul className="update-list">
	            			<li>
	            				<strong> Last update</strong>
	            				<span>13-10-2016</span>
	            			</li>
	            			<li>
	            				Last update by
	            				<span>13-10-2016</span>
	            			</li>
	            		</ul>
	            		<div className="update-list-wrp">
	            			<h4><span>1</span> Eu duis ultrices, dignissim at fuga</h4>
	            			<p>Suspendisse nam, posuers nisl vitae tellus, elit ut libero, nobis nunc sed sit...</p>
	            			<span className="read-more">READ MORE <i className="zmdi zmdi-chevron-down"></i></span>
	            		</div>
	            		<div className="update-list-wrp">
	            			<h4><span>2</span> Eu duis ultrices, dignissim at fuga</h4>
	            			<p>Suspendisse nam, posuers nisl vitae tellus, elit ut libero, nobis nunc sed sit...</p>
	            			<span className="read-more">READ MORE <i className="zmdi zmdi-chevron-down"></i></span>
	            		</div>
	            		<div className="update-list-wrp">
	            			<h4><span>3</span> Eu duis ultrices, dignissim at fuga</h4>
	            			<p>Suspendisse nam, posuers nisl vitae tellus, elit ut libero, nobis nunc sed sit...</p>
	            			<span className="read-more">READ MORE <i className="zmdi zmdi-chevron-down"></i></span>
	            		</div>
	            	</div>

	            </div>
	            <div className="summary-section ">
            		<div className="patint-bg">
            			<h3>Patint Background</h3>
            			<p><span><i className="zmdi zmdi-favorite"></i></span> Has a dog named Otis</p>
            			<p><span><i className="zmdi zmdi-favorite"></i></span> Like to talk about the Giants</p>
            			<p><span className="red"><i className="zmdi zmdi-thumb-down"></i></span> doesn't like talking about hre family</p>
            		</div>
            		<div className="patint-bg homeless">
            			<p><span><i className="zmdi zmdi-alert-octagon"></i></span> Homeless, unsheltered</p>
            			<p><span><i className="zmdi zmdi-flag"></i></span> HUMS 1%</p>
            		</div>
            	</div>
            	<div className="summary-section ">
            		<div className="footer">
            			<h5><span><i className="zmdi zmdi-accounts-list-alt"></i></span> Johanna Smith</h5>
            			<p>Primarey Caer Provide</p>
            			<p>SF General</p>
            			<div className="phone-no">
            				<p>(415) 555- 1111 ext. 103 <i className="zmdi zmdi-phone"></i><span>Desk <i className="zmdi zmdi-circle"></i> Primary</span></p>
            				<p>(415) 555- 1111 ext. 103 <i className="zmdi zmdi-phone"></i><span>Cell</span></p>
            				<p>johanna.smith@Desc.org <i className="zmdi zmdi-email"></i> <span>Work Email</span></p>
            			</div>
            		</div>
            	</div>
            	<div className="footer-bottom">
            		<div className="sne"><a className="sne-anc" aria-current="false" href="/encounter">+ Start new encounter</a>
            				<a className="sne-anc-bac" href="#">BACK TO TOP</a>
            			</div>
            	</div>
            </div>
        );
    }
}

export default Summary;

