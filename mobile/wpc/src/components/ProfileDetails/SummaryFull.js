import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SummaryFull extends Component {

	render(){
		return(
			<div className="hd">
	    		<h3> Follow-up Plan <NavLink to='/profile-details/1?summary'>
	    		<span className="flclose" aria-hidden="true">&times;</span>
	    		</NavLink></h3> 
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
	    		</div>
	    		<div className="update-list-wrp">
	    			<h4><span>2</span> Eu duis ultrices, dignissim at fuga</h4>
	    			<p>Suspendisse nam, posuers nisl vitae tellus, elit ut libero, nobis nunc sed sit...</p>
	    		</div>
	    		<div className="update-list-wrp">
	    			<h4><span>3</span> Eu duis ultrices, dignissim at fuga</h4>
	    			<p>Suspendisse nam, posuers nisl vitae tellus, elit ut libero, nobis nunc sed sit...</p>
	    		</div>
	    		<h3 className="close bottom-close"><NavLink to='/profile-details/1?summary'><span>Close</span></NavLink></h3>
	    	</div>
		)
	}
}

export default SummaryFull;