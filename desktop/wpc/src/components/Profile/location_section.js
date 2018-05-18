import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Location from './location';
import data from '../../state';

class Location_Section extends Component {
    render() {
        return (
            <div className="followUp whitebgnp">
                <div className="summary-section p0">
                <div className="row grid-x">
				  <div className="columns small-12 large-6">
				  	<div className="hd p15 pb0">
	            		<h3 className="head2"> Frequent Locations<span></span></h3>
						{data.data.map((data, i) => {
							return(
								<div className="followData" key={i}>
									
									<div className="update-list-wrp">
										<h4 className="pd-tl2"><span className="zmdi zmdi-pin"></span>{data.list_title}</h4>
										<p className="pd-p">{data.sub_titles}</p>
										<p className="pd-p"><span className="read-more">VIEW ON MAP</span></p>
									</div>
								</div>
							)
						})}
	            	</div>
				  </div>
				  <div className="columns small-12 large-6">
				  	<Location/>
				  </div>
				</div>
	            	
	            	
	            </div>  
            </div>
        );
    }
}

export default Location_Section;
