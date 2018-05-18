import React, { Component } from 'react';
import FollowUp from '../Profile/FollowUp';
import data from '../../state'
import SetAlert from './SetAlert';
import followUps_details from '../../state';
import followUps from '../../state';

class Diagnosis extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
            search: ["ADHD F90.0"],
            match: false,
            searchResult: '',
            diagnosesData: data.diagnosesData
        }
    }

    handleChange(e){
    	if(e.target.value === ''){
        this.setState({[e.target.name]:e.target.value, match:false})
	    }else{
	        this.setState({
    			[e.target.name]:e.target.value,
    			match: true
	    	});
	    	if(e.target.name === "diagnosis"){
	    		var updatedList = this.state.diagnosesData;
		    	updatedList = updatedList.filter((item) => {
		      		return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
		    	});
		    	this.setState({searchResult: updatedList});
	    	}
	    }
    	
    }

    render() {
        return (
            <div>
               
                <div className="followUp ">
                <div className="summary-section history_section_pad whitebgnp text-left">
                <h5>Diagnoses and Next Steps</h5>
                <div className="diagnoseSearch">
                    <h3>Diagnoses</h3>
                    <p>Add one or more Diagnoses.As you add dignoses.
                        your dignoses list will autometicallt show below.</p>
                        <label className="address-input">
                        <input className="ads-search" type="text" value={this.state.diagnosis} name="diagnosis" onChange={this.handleChange} />
                        <span className="sent-icon ads-search-icon"><i className="zmdi zmdi-search"></i></span>
                        {this.state.match 
                            ? <div className="searchResult">
                                <ul>
                                    {this.state.searchResult.length > 0
                                    ? this.state.searchResult.map((data, i) => 
                                        <li 
                                            onClick={()=>{
                                                this.setState({
                                                    search: this.state.search.concat(data.title), 
                                                    match: false}
                                                )}
                                            } 
                                            key={i}
                                        >
                                            {data.title}<span>+</span>
                                        </li>
                                    )
                                    : (
                                        <li>
                                            No Results Found.
                                        </li>
                                        )
                                    }
                                </ul>
                                </div> 
                            : ""
                            }
                        </label>
                        <a href="" className="aap">View the list of diagnosis</a>
                        <p className="mt20">Commonly Slected</p>
                        <p className="border-btn">Help a Vaccines Z23</p>
                        <p className="border-btn">Wound Care(Disorders of soft Tissue) (M79.9)</p>
                        {this.state.search.map((data, i) => {
                        return <p className="border-btn commonly-slected " key={i}>{data}<span>X</span></p>
                        })}
                </div>
	            	<div className="hd text-left">
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
                    <SetAlert />
                <div className="save-exist">
                    <ul className="save-bottom">
                        <li className="save-exist-btn" onClick={this.props.nextCount}>CONTINUE</li>
                        <li className="save-continue" >SAVE FOR LATER</li>
                    </ul>
                   
                </div>
	            </div>  
            </div>
               
            </div>
        );
    }
}

export default Diagnosis;
