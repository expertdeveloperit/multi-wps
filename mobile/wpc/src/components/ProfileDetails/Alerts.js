import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Alerts extends Component {

 constructor(props){
    super(props);
    this.state = { 
        alerts: [
            {
                'id': 1,
                'title':'Suicide threat',
                'action':'alert-details',
                'date':'4/17/2018',
                'type':"Safety"
            },
            {
                'id': 2,
                'title':'SF Hot request: Check on log wound',
                'action':'alert-details',
                'date':'4/17/2018',
                'type':"outreach"
            },
            {
                'id': 3,
                'title':'Missed follow-up for wound care',
                'action':'alert-details',
                'date':'4/17/2018',
                'type':"follow-up "
            }
         ],
         modal:false,
         id:''
    };
    this.submitModal = this.submitModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleClick(id){
  this.setState({modal:true,id});
  }

  componentWillMount(){
    if(this.props.search !== ''){
      if(this.props.search === '?alert'){
        var alerts = this.state.alerts.filter((data) => { return JSON.stringify(data.id) !== this.props.id})
        this.setState({
          alerts
        })
        console.log("alerts", alerts);
      }
    }
  }

  
  submitModal(e){
    var alerts = this.state.alerts.filter((data) => {return JSON.stringify(data.id) !== e.target.id})
    console.log("alert", alerts);
    this.setState({
      alerts
    });
    this.closeModal();
  }

  closeModal(){
    this.setState({modal:false});
  }
  render() {

      var alert = this.state.alerts.map((data,i) => {
              return(
                  <NavLink key={i} className="lists-items" to={`/alert-details/${data.id}`}>
                   <span className="li2 p10 notbold">
                    <strong>{data.title}</strong>
                   <span>
                   <strong className="red">{data.type}</strong> 
                   <span className="dot"><i className="zmdi zmdi-circle"></i></span>
                   {data.date}
                   </span>
                  </span>
                  <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
                 </NavLink>
              );
      });

      return (
        <div className="container-6">
            <div className="Alerts-section">
                <div className="c-heading">
                <i className="zmdi zmdi-alert-circle"></i> <span>Alerts</span>
                </div>

            { alert }

            <NavLink to='/profile' className="lists-items-anc" >
             SEE ALL ALERTS
            </NavLink>
            </div>
            <div className="Alerts-section">
              <div className="sec">
                <h3>Allergies</h3>
                <p>Eggs, lateex</p>
              </div>
              <div className="sec">
                <h3>Medications</h3>
                <p>XYZ<span>Prescribed 4/10/2018</span></p>
                <p>ABC<span>Prescribed 4/10/2018</span></p>
              </div>
              <div className="sec">
                <h3>Diagnoses</h3>
                <p><i className="zmdi zmdi-circle"></i>HIV (B20)</p>
                <p><i className="zmdi zmdi-circle"></i>Opiate use disorder (F11.24)</p>
                <p><i className="zmdi zmdi-chevron-down chevron-down-bottom"></i></p>
              </div>
            </div>    
         </div>
      );
  }
}

export default Alerts;
