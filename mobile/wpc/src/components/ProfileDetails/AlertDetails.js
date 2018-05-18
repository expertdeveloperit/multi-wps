import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AlertDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alerts: [
            {
                'id': 1,
                'title':'Suicide threat',
                'action':'alert-details',
                'date':'4/17/2018',
                'type':"Safety",
                'client':"Gonzalez, Mirabel S",
                'note':"Lorem ipsum dolor sit amet, ac pretium leo rutrum. Sed viverra ac ante quis dignissim."
            },
            {
                'id': 2,
                'title':'SF Hot request: Check on log wound',
                'action':'alert-details',
                'date':'4/17/2018',
                'type':"outreach",
                'client':"Michel, Jordan S",
                'note':"Lorem ipsum dolor sit amet, ac pretium leo rutrum. Sed viverra ac ante quis dignissim."
            },
            {
                'id': 3,
                'title':'Missed follow-up for wound care',
                'action':'alert-details',
                'date':'4/17/2018',
                'type':"follow-up ",
                'client':"John Wick",
                'note':"Lorem ipsum dolor sit amet, ac pretium leo rutrum. Sed viverra ac ante quis dignissim."
            }
         ],
			alertData:''
		};

	}
	componentDidMount(){
      var id = this.props.match.params.id;
      this.state.alerts.map((alert) => {
          if(id === JSON.stringify(alert.id)){
            this.setState({
              alertData: alert
            })
          }
          return true;
      });
    }
    render() {
        return (
            <div className='reveal1'>
                <div className="container-2 profile-details ">
    	            <div>
    	             <h2 className="text-left top-heading">Resolve Alert</h2>
    	            </div>
    	            <h2>{ this.state.alertData.title }</h2>
    	            <div className="container-5">
    	               <label>client</label>
    	               <h2>{ this.state.alertData.client }</h2>
    	               <label>Resolve By</label>
    	               <h2>{"You"}</h2>
    	               <label>Resolution Date</label>
    	               <h2>{ this.state.alertData.date }</h2>
    	               <label className="note">Note</label>
    	               <p className="note-box">{ this.state.alertData.note }</p>
    	            </div>
    	            <div className="">
    	            	<p>"Clicking" Submit wil remove the alert from the profile and will add to partially
    	            	 autofilled encounter form to your list of encounter forms to complete.
    	                </p>
    	            </div>
                </div>
                <div className="action">
                    <NavLink to={`/profile-details/${this.props.match.params.id}`} className="text-right cancel" >Cancel</NavLink>
                    <NavLink to={`/profile-details/${this.props.match.params.id}?alert`}>
                        <div className="text-right button submit" id={this.state.id}>Submit</div>
                    </NavLink>
                </div>
                    <NavLink to={`/profile-details/${this.props.match.params.id}`}>
                       <button className="close-button" type="button">
                        <span aria-hidden="true">&times;</span>
                      </button> 
                    </NavLink>
            </div>
        );
    }
}

export default AlertDetails;

