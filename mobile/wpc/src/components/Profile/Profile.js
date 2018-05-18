import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from "universal-cookie";
import Index from '../Common/index';
import ol from '../../state';
class Profile extends Component {
    constructor(props){
        super(props);
        this.handleAction = this.handleAction.bind(this);
        //contains data to iterate through and form the list
        this.data=ol.ol
    }
    // function to handle redirections
    handleAction(data,e){
        if(data.action === 'ol' || data.action === 'search'){
            return true;
        }else if(data.action==='login'){
            var cookie= new Cookies();
            cookie.remove('logged_in');
            window.location.href = "/login"
            return true;
            
        }else{
            e.preventDefault();
            return false;
        }
        
    }
    render() {
        
        return (
            <div>
                <Index />
                <div className="container ">
                    <div className="row welcom-section" >
                    <div className="columns small-12 wol-come-wrp">
                        <div className="container-2">
                        
                        <h1>Welcome Jane !</h1>
                        <NavLink to='profile-update'>
                        <p className="col-small">update profile information</p>
                        </NavLink>

                        <p className="profile-date">Today's date : 10-05-2018</p>
                        {this.data.map((data,i)=>{
                            return(
                                <NavLink className="buttons" to={`/${data.action}`} key={i} onClick={this.handleAction.bind(this,data)}>
                                    <span className="bs1"><i className={"zmdi "+data.icon}></i></span>
                                    <span className="bs2">{data.title}</span>
                                    <span className="bs3"><i className="zmdi zmdi-chevron-right"></i></span>
                                </NavLink>        
                            )
                        })}
                        
                        </div>
                        
                    </div>
                    </div>
                </div>           
            </div>
        );
    }
}

export default Profile;
