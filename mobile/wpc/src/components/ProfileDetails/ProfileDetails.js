import React, { Component } from 'react';
import profile from '../../images/profile-pictures.jpg';
import Alerts from './Alerts';
import Summary from './Summary';
import Location from './Location';
import History from './History';
import { NavLink } from 'react-router-dom';

class ProfileDetails extends Component {
    constructor(props){
      super(props);
      this.state={
        section:'alerts',
        data: [
          {
            'icon':'zmdi-accounts',
            'id': 0,
            'title':'Alvarez, Angela L',
            'last_seen':' 4/17/2018',
            'action':'profile-details',
            'image':0,
            'day':'Today',
            'assigned':0,
            'dob': '03/28-1984',
            'sex': 'Female',
            'phone': '444-555-3333'
          },
          {
            'icon':profile,
            'id': 1,
            'title':'Gonzalez, Mirabel S',
            'last_seen':' 4/10/2018',                
            'action':'profile-details',
            'image':1,
            'day':'Today',
            'assigned':1,
            'dob': '04/28-1984',
            'sex': 'Female',
            'phone': '444-555-4444'                
          },
          {
            'icon':'zmdi-accounts',
            'id': 2,
            'title':' Nardi, Carmen A',
            'last_seen':' 1/12/2018',                
            'action':'profile-details',
            'image':0,
            'day':'Today',
            'assigned':0,
            'dob': '05/28-1984',
            'sex': 'Male',
            'phone': '444-555-5555'                                             
          },
          {
            'icon':'zmdi-accounts',
            'id': 3,
            'title':' Putnam, Ray S',
            'last_seen':' 6/22/2018',                
            'action':'profile-details',
            'image':0,
            'day':'Today',
            'assigned':0,
            'dob': '06/28-1984',
            'sex': 'Male',
            'phone': '444-555-6666'                                                            
          },
          {
            'icon':'zmdi-accounts',
            'id': 4,
            'title':' White, Candance B',
            'last_seen':' 4/17/2018',                
            'action':'profile-details',
            'image':0,
            'day':'2d',
            'assigned':0,
            'dob': '07/28-1984',
            'sex': 'Female',
            'phone': '444-555-7777'
            
          }
        ],
        profileData: ''
      }
      this.handleClick=this.handleClick.bind(this);
    }

    componentWillMount(){
      var id = this.props.match.params.id;
      var profileData = this.state.data.map((user) => {
          if(id === JSON.stringify(user.id)){
            this.setState({
              profileData: user
            })
          }
        
      })
    }

    handleClick(section){
      this.setState({section:section})
    }

    componentDidMount(){
      if(this.props.location.search === '?summary'){
        this.setState({
          section: 'summary'
        })
      }
    }

    render() {
      var info = this.state.profileData;
        return (
            <div className="blue">
                <div className="container">
                    <div className="row fixed-top profile-header">
                        <div className="top-bar tbbs blue " id="responsive-menu">
                        <div className="top-bar-left ">
                            <ul className="dropdown menu blue" data-dropdown-menu>
                            <li className="menu-text white">{info.title}</li>
                            </ul>
                        </div>
                        <div className="top-bar-right white">
                            <NavLink className="home-anc white" to="/profile"><i className="zmdi zmdi-menu zmdi-hc-2x"></i></NavLink>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                    <div className="columns small-12">
                        <div className="container-4 ">
                        <div className="pr-box">
                            <div className="pr-box-left">
                            {info.image === 0 
                              ? <i className="zmdi zmdi-account"></i> 
                              : <img src={profile} alt="profile" />

                            }
                            <i className="zmdi zmdi-camera"></i>
                            </div>
                            <div className="pr-box-right">
                            <p>Date of Birth
                                <strong>{info.dob}</strong>
                            </p>
                            <p>Sex at Birth
                                <strong>{info.sex}</strong>
                            </p>
                            <p>Phone
                                <strong>{info.phone} <i className="zmdi zmdi-phone"></i></strong>
                            </p>
                            </div>
                        </div>
                        <div className="sne">
                            <NavLink to='/encounter' className="sne-anc">+ Start new encounter</NavLink>
                        </div>
                        </div>
                        <div className="container-5">
                        <ul className="tabs" data-tabs id="example-tabs">
                          <li className={`tabs-title ${this.state.section==='alerts' ? 'is-active' : ''}` } onClick={this.handleClick.bind(this,'alerts')}><a>Alerts</a></li>
                          <li className={`tabs-title ${this.state.section==='summary' ? 'is-active' : ''}` } onClick={this.handleClick.bind(this,'summary')}><a data-tabs-target="panel2" href="#panel2">Summary</a></li>
                          <li className={`tabs-title ${this.state.section==='location' ? 'is-active' : ''}` } onClick={this.handleClick.bind(this,'location')}><a data-tabs-target="panel3" href="#panel3">Location</a></li>
                          <li className={`tabs-title ${this.state.section==='history' ? 'is-active' : ''}` } onClick={this.handleClick.bind(this,'history')}><a data-tabs-target="panel4" href="#panel4">History</a></li>
                        </ul>
                        <div className="tabs-content" data-tabs-content="example-tabs">
                      <div className="tabs-panel is-active" id="panel1">
                        {this.state.section==='alerts' &&
                          <Alerts search={this.props.location.search} id={this.props.match.params.id}/>
                        }
                        {this.state.section==='summary' &&
                          <Summary />
                        }
                        {this.state.section==='location' &&
                          <Location />

                        }
                          {this.state.section==='history' &&
                            <History />
                          }
                      </div>
                      <div className="tabs-panel" id="panel3">
                      </div>
                      <div className="tabs-panel" id="panel4">
                      </div>
                    </div>
    
                    </div>
                  </div>
                </div>      
             </div>
            </div>
     
        );
    }
}

export default ProfileDetails;
