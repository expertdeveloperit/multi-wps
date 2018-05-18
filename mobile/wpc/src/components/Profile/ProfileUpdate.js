import React, { Component } from 'react';
import Index from '../Common/index';

class ProfileUpdate extends Component {
	constructor(props){
    super(props);
		this.state = {
			fname:'',
			lname:'',
			chn:'',
			team:'',
			role:'',
			location:'',
			error1:'',
			error2:'',
			error3:'',
			error4:'',
			error5:'',
			error6:'',
			submit:false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		if(!this.state.fname){
           this.setState({error1:"Missing First Name"});
		} else if(!this.state.lname){
			 this.setState({error2:"Missing Last Name"});
		} else if(!this.state.chn){
			 this.setState({error3:"Missing CHN"});
		} else if(!this.state.team){
			 this.setState({error4:"Missing Team"});
		} else if(!this.state.role){
			 this.setState({error5:"Missing Role"});
		} else if(!this.state.location){
			 this.setState({error6:"Missing Location"});
		} else {
			this.props.history.push('/profile')
		}
		
	}
	handleChange(e){
		if(this.state.fname!=='' && this.state.lname!=='' && this.state.chn!=='' && this.state.team!=='' && this.state.role!=='' || this.state.location!=='' ){
			this.setState({
	          [e.target.name]:e.target.value,
	            submit:true,
	            error1:'',
				error2:'',
				error3:'',
				error4:'',
				error5:'',
				error6:''
			})

		}else{
			this.setState({
	          [e.target.name]:e.target.value,
	            submit:false,
	            error1:'',
				error2:'',
				error3:'',
				error4:'',
				error5:'',
				error6:''
			})			
		}
	}

   render(){
   	return (
   		<div className="container profile-update ">
   			<Index />
   			<div className="blue ">
   				<div className="container-4 Profile-heading">
   					<div className="row">
   						<h1>Your Profile</h1>
   					</div>
   				</div>
   			</div>
   			<div className="container-2">
   				<div className="row">
		   			<form className="frm" onSubmit={this.handleSubmit}>
				        <label>First name<span>*</span>
				          <input onChange={this.handleChange} name="fname" type="text" placeholder="First name"  />
				          <p className="error">{this.state.error1}</p>
				        </label>
				        <label>Last Name<span>*</span>
				          <input onChange={this.handleChange} name="lname" type="text" placeholder="Last Name"  />
				          <p className="error">{this.state.error2}</p>
				        </label>
				        <label className="chn">CHN<span>*</span>
				          <input onChange={this.handleChange} name="chn" type="text" placeholder="CHN" />
				          <p className="error">{this.state.error3}</p>
				        </label>
				        <fieldset onChange={this.handleChange}   className="large-6 cell radio-btn-section">
						   <p className="error">{this.state.error4}</p>
						    <legend>Team<span>*</span></legend>
						    <div className="md-radio"><input className="rd-input"  type="radio" name="team" value="Street Medicine" id="pokemonRed" /><label htmlFor="pokemonRed">Street Medicine</label></div>
						    <div className="md-radio"><input className="rd-input" type="radio" name="team" value="Shelter Health" id="pokemonBlue" /><label htmlFor="pokemonBlue">Shelter Health</label></div>
						</fieldset>
						<fieldset onChange={this.handleChange} className="large-6 cell">
						<p className="error">{this.state.error5}</p>
						    <legend>Role<span>*</span></legend>
						    <p className="md-radio"><input className="rd-input"  type="radio" name="role" onClick={this.handleChange} value="RN" id="pokemonRed3" /><label htmlFor="pokemonRed3">RN</label></p>
						    <p className="md-radio"><input className="rd-input" type="radio" name="role" onClick={this.handleChange} value="MD/NP" id="pokemonBlue4" />
						    <label htmlFor="pokemonBlue4">MD/NP</label></p>
						    <p className="md-radio"><input className="rd-input" type="radio" name="role" onClick={this.handleChange} value="HW" id="pokemonRed5"  />
						    <label htmlFor="pokemonRed5">HW</label></p>
						    <p className="md-radio"><input className="rd-input" type="radio" name="role" onClick={this.handleChange} value="BH Spec" id="pokemonBlue6" />
						    <label htmlFor="pokemonBlue6">BH Spec</label></p>
						    <p className="md-radio"><input className="rd-input" type="radio" name="role" onClick={this.handleChange} value="PSS" id="pokemonRed7"  />
						     <label htmlFor="pokemonRed7">PSS</label></p>
						    <p className="md-radio"><input className="rd-input" type="radio" name="role" onClick={this.handleChange} value="Other" id="pokemonBlue8" />
						    <label htmlFor="pokemonBlue8">Other</label></p>
						</fieldset>
						<fieldset className="check-these-out" onChange={this.handleChange}>
						<p className="error">{this.state.error6}</p>
						    <legend>Check these out<span>*</span></legend>
						    <div className="form-row">
						    <div className="md-checkbox"><input id="checkbox1" type="checkbox" name="location" value="6th St HR Center" onClick={this.handleChange}/><label htmlFor="checkbox1"></label></div>
								<label htmlFor="checkbox1">6th St HR Center</label></div>
						    <div className="form-row">
						    	<div className="md-checkbox"><input id="checkbox2" type="checkbox" name="location" value="A Woman's Place Drop-in" onClick={this.handleChange}/><label htmlFor="checkbox2"></label></div>
						    <label htmlFor="checkbox2">A Woman's Place Drop-in
							</label></div>
						    <div className="form-row">
						    	<div className="md-checkbox"><input id="checkbox3" type="checkbox" name="location" value="Episcopal or Sanctuary" onClick={this.handleChange}/><label htmlFor="checkbox3"></label></div>
						    <label htmlFor="checkbox3">Episcopal or Sanctuary
						    </label></div>
						    <div className="form-row">
						    <div className="md-checkbox"><input id="checkbox4" type="checkbox" name="location" value="HOSPITAL OR SNF" onClick={this.handleChange}/><label htmlFor="checkbox4"></label></div>
								<label htmlFor="checkbox4">HOSPITAL OR SNF</label></div>
						    <div className="form-row">
						    <div className="md-checkbox"><input id="checkbox5" type="checkbox" name="location" value="Episcopal or Sanctuary" onClick={this.handleChange}/><label htmlFor="checkbox5"></label></div>

						   <label htmlFor="checkbox5">Episcopal or Sanctuary</label></div>
						</fieldset>
						<p className="text-center">
							<button type="submit" className={`button success-button ${this.state.submit===true ? 'bakground_success' : ''}`}>Save Changes</button>
						</p>
					</form>
				</div>
			</div>
		</div>
   	  );
     }
   }

 export default ProfileUpdate;
