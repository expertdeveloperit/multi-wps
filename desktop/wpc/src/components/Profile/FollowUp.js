import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import followUps from '../../state';
import followUps_details from '../../state';
import Modal from './Modal';

class FollowUp extends Component {
	constructor(props){
		super(props);
		this.state = {
			modal: false
		}
	}

	modalOpen(e){
        this.setState({modal: true});
        var element = document.getElementById("body");
        element.classList.add("overlaphide");
    }

    closeModal(e){
        this.setState({modal: false});
        var element = document.getElementById("body");
        element.classList.remove("overlaphide");
    }
       
    render() {
		console.log("follo", followUps.followUps)
        return (
            <div className="followUp ">
                <div className="summary-section history_section_pad whitebgnp">
	            	<div className="hd text-left">
	            		<h3> Follow-up Plan<span onClick={this.modalOpen.bind(this)}><i className="zmdi zmdi-edit"></i> Edit</span></h3>
						<ul className="update-list date">
							<li>
								<strong> Last updated</strong>
								<span>{followUps_details.followUps_details.last_updated}</span>
							</li>
							<li>
								Last update by
								<span>{followUps_details.followUps_details.updated_by}</span>
							</li>
						</ul>
						{followUps.followUps.map((data, i) => {
							return(
								<div className="followData" key={i}>
									<div className="update-list-wrp">
										<h4><span>{data.series}</span>{data.title}</h4>
										<p>{data.data}</p>
									</div>
								</div>
							)
						})}
	            	</div>
	            </div>  
	            {this.state.modal ? (<Modal from="diagnosis" closeModal={this.closeModal.bind(this)}/>)  : ""}
            </div>
        );
    }
}

export default FollowUp;
