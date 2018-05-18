import React, { Component } from 'react';
import MapComponent from './map';
import {NavLink} from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import Index from '../Common/index';
import 'react-accessible-accordion/dist/minimal-example.css';
import 'react-accessible-accordion/dist/fancy-example.css';

class Encounter extends Component {

	constructor(props){
      super(props);
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
      this.state={
      	section:'services',
      	location_services:'ls4',
      	direct:'r1',
        mode:'m1',
        duration:'d1',
        address:'',
        diagnosis: '',
        lat:'',
        lng:'',
        location:'',
        markers_data:[],
        markers:true,
        current_date:today,
        zoom:13,
        locationData: [
            {
                id:0,
                title : "Open access -50 lvy",
            },
            {
                id: 1,
                title : "HOSPITAL / SNF",
            },
            {
                id: 2,
                title : "6th St HR Center",
            },
            {
                id: 3,
                title : "Outreach",
            },

        ],
        diagnosesData: [
        	{
        		id: 0,
        		title: "Abdominal Pain R10.84"
        	},
        	{
        		id: 1,
        		title: "Absecess (unspecified) L02.91"
        	},
        	{
        		id: 3,
        		title: "ADHD F90.0"
        	},
        ],
        data: '',
        match: false,
        searchResult: '',
        search: ["ADHD F90.0"]
      }
	  this.handleClickRadio=this.handleClickRadio.bind(this);
      this.handleClick=this.handleClick.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleLocation=this.handleLocation.bind(this);
      this.formChange=this.formChange.bind(this);
    }

    handleClick(section){
    	switch(section){
		    case 'encounter':
	    		if(this.state.address !== ''){
		    		this.setState({section:section})
		    	}
		    	break;
		    case 'diagnoses':
	    		if(this.state.location !== ''){
		    		this.setState({section:section})
		    	}
		    	break;	
		    default :
		    return true;
    	}
    }

   formChange(e){
		this.setState({
          [e.target.name]:e.target.value,
		})
	}
    handleClickRadio(name,value,e){

      this.setState({[name]:value});
    	
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
    handleLocation(){
   		navigator.geolocation.getCurrentPosition(
	      position => {
	        var url='https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&key=AIzaSyBF6v9Rr6pybH_EVsghVG08ZG3m1C3Cyfg';
	        var lat=position.coords.latitude;
	        var lng=position.coords.longitude;
	        fetch(url)
	        .then((response)=>{ return response.json(); })
	        .then((response)=>{
	        	var text1=response.results[0].formatted_address;
	        	this.state.markers_data.push({lat: position.coords.latitude, lng: position.coords.longitude,address:text1});
	          	this.setState({markers:true,lat:lat,lng:lng,address:text1,markers_data:this.state.markers_data})
	        })
	      },
	      error => console.log(error)
	    );
    }

    changeColor(data, e){
        e.preventDefault();
        this.setState({data})
    }
   
    render() {
        return (
            <div className="container encounter">
            	<Index />
               	<div className="container-2 save-deaft">
               		<div className="row">
               			<NavLink to='/drafts'><h1>SAVE DRAFT</h1></NavLink>
               		</div>
               	</div>
                <Accordion accordion>
		        <AccordionItem  expanded={this.state.section==='services'}>
		            <AccordionItemTitle onClick={this.handleClick.bind(this,'')}>
		                <h3 onClick={this.handleClick.bind(this,'services')}>
		                	<span>
			                	{this.state.section!=='services' 
			                		? <i className="zmdi zmdi-edit"></i> 
			                		: '1'
			                	}
		                	</span>
		                	Location and Date of Service
		                </h3>
		                {this.state.section !== 'services' 
		                	? (<span className="accordion-span">59 9th St <p>3-15-2018</p><span className="up-down-icon"><i className="zmdi zmdi-chevron-down"></i></span></span>)
		                	: (<span className="up-down-icon"><i className="zmdi zmdi-chevron-up"></i></span>)
		                }
		                
		                
		            </AccordionItemTitle>
		            <AccordionItemBody>
		                <div className="container-2 accordion">
		               		<div className="row">
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
									<label className="address-input">Address
								        <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
								        <span className="sent-icon" onClick={this.handleLocation}><i className="zmdi zmdi-navigation"></i></span>
								    </label>
								</div>
			               	</div>
		               </div>
		                <div className="margin_bot encounterMap">
		                	<MapComponent mapid="map1" zoom={this.state.zoom} markers={this.state.markers} markers_data={this.state.markers_data} lat={this.state.lat} lng={this.state.lng}/>
		                	<span className="currentLocation" onClick={this.handleLocation}>
                				<i className="zmdi zmdi-navigation"></i>		
                			</span>
		               	</div>
		               	<div className="row encounter_btn">
		               		<div className="width_fifty"><NavLink to='/drafts'><h1 className="blue_btn">SAVE DRAFT</h1></NavLink></div>
		               		<div className="width_fifty"><span className={`btn ${this.state.address !=='' ? '' : 'gray-d'}`} onClick={this.handleClick.bind(this,'encounter')}>Continue</span></div>
		               	</div>
		            </AccordionItemBody>
		        </AccordionItem>
		        <AccordionItem expanded={this.state.section ===''} >
		            <AccordionItemTitle onClick={this.handleClick.bind(this,'')}>
		                <h3><span><i className="zmdi zmdi-edit"></i></span>Patient Information</h3>
		                <span className="accordion-span">Gonzalex, Mirable S<span className="dot"><i className="zmdi zmdi-circle"></i></span><span className="font-wit">08-28-1995</span></span>
		           		<span className="up-down-icon"><i className="zmdi zmdi-chevron-down"></i></span>
		            </AccordionItemTitle>
		            <AccordionItemBody>
		                <p>Body content</p>
		            </AccordionItemBody>
		        </AccordionItem>
		        <AccordionItem expanded={this.state.section ==='encounter'}>
		            <AccordionItemTitle onClick={this.handleClick.bind(this,'')}>
		                <h3>
		                	<span 
		                		className={
		                			this.state.section!=='diagnoses' && this.state.section!=='encounter' 
		                			?'gray-d' :'' 
		                		}
		                	>
		                		{this.state.section==='diagnoses' 
		                			? <i className="zmdi zmdi-edit"></i> 
		                			: '3'
		                		}
		                	</span>
		                	Encounter Details
		                </h3>
		                {this.state.section !== 'encounter' 
		                	? (
		                		<span className="accordion-span encounter">
		                		Brief<span className="dot"><i className="zmdi zmdi-circle"></i></span>Face-to-Face<span className="dot"><i className="zmdi zmdi-circle"></i></span><p>3 services</p>
		                		<span className="up-down-icon"><i className="zmdi zmdi-chevron-down"></i></span></span>
		                	  )
		                	: (<span className="up-down-icon"><i className="zmdi zmdi-chevron-up"></i></span>)
		                }
		            </AccordionItemTitle>
		        	<AccordionItemBody>
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
	                    </div>
	                 <div className="row encounter_btn">
		                <div className="width_fifty"><NavLink to='/drafts'><h1 className="blue_btn">SAVE DRAFT</h1></NavLink></div>
		                <div className="width_fifty"><h1 className={`btn ${this.state.location !== '' ? '' : 'gray-d'}`}onClick={this.handleClick.bind(this,'diagnoses')}>Continue</h1></div>
		            </div>
                    </AccordionItemBody>
		        </AccordionItem>
		        <AccordionItem  expanded={this.state.section ==='diagnoses'} >
		            <AccordionItemTitle onClick={this.handleClick.bind(this,'diagnoses')}>
		                <h3> <span className={this.state.section!=='diagnoses' ?'gray-d' :''}>4</span>Diagnoses and Next Steps</h3>
		                <span className="up-down-icon"><i className="zmdi zmdi-chevron-down"></i></span>
		            </AccordionItemTitle>
		           	<AccordionItemBody>
		            	<div className="diagnoses">
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
		                  	<div className="set-an-alert">
		                  	<h2 className="mt20">Set an Alert</h2>
		                  	  <a href="#">+Add an Alert</a>
		                  </div>
						</div>	
		            </AccordionItemBody>
		        </AccordionItem>
                </Accordion>
	            	<div className="container-2 save-deaft">
               		<div className="row">
               		{this.state.section === 'diagnoses' &&
               				<p className="text-center">
               					<NavLink aria-current="false" to="/encounter_success">
               						<button type="submit" className={this.state.diagnoses!=='' ? "button save-deaft-btn success-button blue" : 'button save-deaft-btn success-button'}>Submit Encounter</button>
               					</NavLink>
           					</p>
           				 }
               			<NavLink to='/drafts'><h1>SAVE DRAFT</h1></NavLink>
               		</div>
               	</div>

            </div>
        );
    }
}

export default Encounter;

