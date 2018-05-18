import React, { Component } from 'react';
import data from '../../state';

class EncounterDetails extends Component {
    constructor(props){
        super(props);
        this.handleClickRadio = this.handleClickRadio.bind(this);
        var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!

		var yyyy = today.getFullYear();
		if(dd<10){
		    dd='0'+dd;
		} 
		if(mm<10){
		    mm='0'+mm;
		} 
        today = dd+'/'+mm+'/'+yyyy;
        
        this.state = {
            current_date: today,
            locationData: data.locationData,
            location: ''
        }
    }

    changeColor(data, e){
        e.preventDefault();
        this.setState({data})
    }

    handleClickRadio(name,value,e){

        this.setState({[name]:value});
          
      }

    render() {
        return (
            <div className="inner-patient-info">
              <div className="container-2 accordion">
                    <div className="row">
                        <h5>Date and Location of service</h5>
                        <div className="row collapse date" id="dpMonths" data-date-format="dd/mm/yyyy" data-start-view="year" data-min-view="year">
                            <label>Date of service<span className="red">*</span></label>
                            <div className="date-input">
                                <input size="16" type="text" value={this.state.current_date} readOnly />
                                <div className="date-icon">	
                                <span className="prefix"><i className="zmdi zmdi-calendar-alt"></i></span>
                            </div>	
                            </div>
                            <label>Service loction<span className="red">*</span></label>
                            <p className="paragraph2">This list is filtered according to your profile.Your
                                con Select a site for the full list <a href="">here</a></p>
                                
                            <ul className="Outreach-list" >
                                {this.state.locationData.map((data, i) => {
                                    return <li key={i} onClick={this.changeColor.bind(this, data)} className={this.state.data === data ? "serviceLocation active" : "serviceLocation"}>{data.title}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="encounter-details">
                        <h5>Encounter Details</h5>
                        <div className="grid-container">
	                      <form>
	                        <h3>Direct/Indirect<span className="red">*</span></h3>
	                        <div className="button-group round toggle direct direct-Indirect">
	                          <span><input type="radio" id="r1" name="rgroup" />
	                          <label className={`button ${this.state.direct==='r1' && 'active'}`} onClick={this.handleClickRadio.bind(this,'direct','r1')} htmlFor="r1">Client</label></span>
	                          <span><input type="radio" id="r2" name="rgroup" />
	                          <label className={`button ${this.state.direct==='r2' && 'active'}`} onClick={this.handleClickRadio.bind(this,'direct','r2')} htmlFor="r2">Family/Friend</label></span>
	                          <span><input type="radio" id="r3" name="rgroup" />
	                          <label className={`button ${this.state.direct==='r3' && 'active'}`} onClick={this.handleClickRadio.bind(this,'direct','r3')} htmlFor="r3">Other</label></span>
	                        </div>
	                         <p className="error">{this.state.error1}</p>
	                        <h3>Mode<span className="red">*</span></h3>
	                        <div className="button-group round toggle direct mode">
	                          <span><input type="radio" id="m1" name="rgroup1" />
	                          <label className={`button ${this.state.mode==='m1' && 'active'}`} onClick={this.handleClickRadio.bind(this,'mode','m1')} htmlFor="m1">Face-to-Face</label></span>
	                          <span><input type="radio" id="m2" name="rgroup1" />
	                          <label className={`button ${this.state.mode==='m2' && 'active'}`} onClick={this.handleClickRadio.bind(this,'mode','m2')} htmlFor="m2">Phone</label></span>
	                          <span><input type="radio" id="m3" name="rgroup1" />
	                          <label className={`button ${this.state.mode==='m3' && 'active'}`} onClick={this.handleClickRadio.bind(this,'mode','m3')} htmlFor="m3">Electronic</label></span>
	                        </div>
	                         <p className="error">{this.state.error2}</p>
	                         <h3>Duration<span className="red">*</span></h3>
	                        <div className="button-group round toggle direct duration">
	                          <span><input type="radio" id="d1" name="rgroup2" />
	                          <label className={`button ${this.state.duration==='d1' && 'active'}`} onClick={this.handleClickRadio.bind(this,'duration','d1')} htmlFor="d1">Brief</label></span>
	                          <span><input type="radio" id="d2" name="rgroup2" />
	                          <label className={`button ${this.state.duration==='d2' && 'active'}`} onClick={this.handleClickRadio.bind(this,'duration','d2')} htmlFor="d2">Moderate</label></span>
	                          <span><input type="radio" id="d3" name="rgroup2" />
	                          <label className={`button ${this.state.duration==='d3' && 'active'}`} onClick={this.handleClickRadio.bind(this,'duration','d3')} htmlFor="d3">Extended</label></span>
	                        </div>
	                         <p className="error">{this.state.error3}</p>
	                        <fieldset onChange={this.formChange} >
		                        <legend className="service-provided mb10">Service Provided <span className="red">*</span></legend>
		                        <div className="services-prov-list">
		                        	<div className="md-checkbox">
	                        			<input id="checkbox1" type="checkbox" name="location" value="Outreach Engement" />
	                        			<label htmlFor="checkbox1">
	                        				1 Outreach / Engement <i className="zmdi zmdi-alert-circle"></i>
	                        				<a href="" className="aap">+ Add another provider</a>
	                        			</label>
	                        		</div>
		                       </div>
		                        <div className="services-prov-list">
			                        <div className="md-checkbox">
			                        	<input id="checkbox2" type="checkbox"name="location" value="care Plan Development" />
			                        	<label htmlFor="checkbox2">
			                        		2 care Plan Development <i className="zmdi zmdi-alert-circle"></i>
			                        		<a href="#" className="aap">+ Add another provider</a>
			                        	</label>
			                        </div>
								</div>
		                        <div className="services-prov-list">
			                        <div className="md-checkbox">
			                        	<input id="checkbox3" type="checkbox" name="location" value="care team coridinator" />
			                        	<label htmlFor="checkbox3">
			                        		3 Care team coridinator <i className="zmdi zmdi-alert-circle"></i>
			                        		<a href="" className="aap">+ Add another provider</a>
			                        	</label>
			                        </div>
								</div>
		                        <div className="services-prov-list">

	                        		<div className="md-checkbox">
	                        			<input id="checkbox4" type="checkbox" name="location" value="reffreal to resources" />
	                        			<label htmlFor="checkbox4">
	                        				4 Referral to resources <i className="zmdi zmdi-alert-circle"></i>
	                        				<a href="" className="aap">+ Add another provider</a>
	                        			</label>
	                        		</div>
								</div>
		                        <div className="services-prov-list">
			                        <div className="md-checkbox">
			                        	<input id="checkbox5" type="checkbox" name="location" value="direct linkage for accessing service" />
			                        	<label htmlFor="checkbox5">
			                        		5 direct linkage for accessing service <i className="zmdi zmdi-alert-circle"></i>
			                        		<a href="" className="aap">+ Add another provider</a>
			                        	</label>
			                        </div>
								</div>
								<div className="services-prov-list">
			                        <div className="md-checkbox">
			                        	<input id="checkbox6" type="checkbox" name="location" value="Direct Provision Of Support Services and Support Groups" />
			                        	<label htmlFor="checkbox6">
			                        		6 Direct Provision Of Support Services and Support Groups <i className="zmdi zmdi-alert-circle"></i>
			                        		<a href="" className="aap">+ Add another provider</a>
			                        	</label>
			                        </div>
								</div>
								<div className="services-prov-list">
		                        	<div className="md-checkbox">
			                        	<input id="checkbox7" type="checkbox" name="location" value="Medi-Cal Enrollment Support" />
			                        		<label htmlFor="checkbox7">
			                        			7 Medi-Cal Enrollment Support <i className="zmdi zmdi-alert-circle"></i>
			                        			<a href="" className="aap">+ Add another provider</a>
			                        		</label>
		                        	</div>
								</div>
		                    	<p className="error">{this.state.error4}</p>
		                    </fieldset>
	                      </form>
                          <div className="save-exist">
                            <ul className="save-bottom">
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

export default EncounterDetails;
