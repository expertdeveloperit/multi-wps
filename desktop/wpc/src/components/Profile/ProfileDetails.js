import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ImageSlider from '../ProfileSlider/Slider';
import Allergies from './Allergies';
import Alerts from './Alerts';
import PersonalInfo from './PersonalInfo';
import History from './History';
import FollowUp from './FollowUp';
import Location_Section from './location_section';
import users from '../../state';
import Card_view from '../Common/card_view';

class ProfileDetails extends Component {
    constructor(props){
      super(props);
      this.state={
        section:'alerts',
        data: users.users,
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
      console.log("this.state.pro", this.state.profileData)
      var info = this.state.profileData;
        return (
          <div>
            <div className="blue">
              <div className="container">
                  <div className="row fixed-top">
                      <div className="top-bar tbbs blue h74" id="responsive-menu">
                      <div className="top-bar-left ">
                          <ul className="dropdown menu blue" data-dropdown-menu>
                          <li className="menu-text white">{info.title}</li>
                          </ul>
                      </div>
                      <div className="top-bar-right white">
                          <NavLink className="home-anc white" to="/"><i className="zmdi zmdi-menu zmdi-hc-2x"></i></NavLink>
                      </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="  large-cell-block-container profile_details">
              <div className="row grid-x">
                  <div className="small-12 medium-6 large-4 column card_view_pad ">
                    <ImageSlider info={this.state.profileData}/>
                  </div>
                  <div className="small-12 medium-6 large-4 column card_view_pad">
                    <div className="whitebgnp">
                      <Allergies info={this.state.profileData} />
                    </div>
                  </div>
                  <div className="small-12 medium-12 large-4 column card_view_pad">
                    <Alerts />
                  </div>
              </div>
            <div className="row grid-x">   
              <div className="small-12 large-4 medium-4 column card_view_pad">
                <PersonalInfo info={this.state.profileData}/>
              </div>
              <div className="small-12 large-8 medium-8 column card_view_pad">

                 <div className="addButtons">
                  <div className="row grid-x">
                      <div className="columns small-12 large-4"><NavLink to={{pathname: '/encounter',  state:{data: this.state.profileData}}} className="sne-anc">+ Start new encounter</NavLink></div>
                      <div className="columns small-12 large-4"><NavLink to={this.props.location.pathname} className="sne-anc">+Add an Alert</NavLink></div>
                      <div className="columns small-12 large-4"><NavLink to={this.props.location.pathname} className="sne-anc">+Add to a list</NavLink></div>
                  </div>
                 </div>
               
                <History />
                <Location_Section />
                <FollowUp />
              </div>
                </div>
              </div>  
          </div>
        );
    }
}

export default ProfileDetails;
