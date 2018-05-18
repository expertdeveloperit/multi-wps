import React, { Component } from 'react';
import profile from '../../images/profile-pictures.jpg';
import { NavLink } from 'react-router-dom';
import Index from '../Common/index';

class Drafts extends Component {
	constructor(props){
    super(props);
    this.state = { 
    	assigned_check:false,
      match:false,
      search:'',
    	drafts: [
           {
                'icon':profile,
	            'id': 1,
	            'title':'Gonzalez, Mirabel S',                
	            'action':'profile-details',
                'date':' 6/22/2018', 
                'image':1,               
                'assigned':1,                                                            
            },
            {
                'icon':'zmdi-accounts',
                'id':2,
                'title':'Alvarez, Angela L',
                'action':'profile-details',
                'date':' 6/22/2018', 
                'image':0,               
                'assigned':0,                                                            
            }
    	],
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
        }
      ],
      searchResult: ''
    }
    this.handleCheck=this.handleCheck.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
    }
     handleClick(){
    this.setState({
      data: this.state.search,
      match: false
    })
  }
  handleCheck(e){
            this.setState({
                assigned_check: !this.state.assigned_check,
            })
    }
   handleChange(e){
    this.setState({search: e.target.value, match:true})
    var updatedList = this.state.data;
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({searchResult: updatedList});
  }
    render() {
    	var draftData = this.state.drafts.map((data,i) => {
    		 if(this.state.assigned_check){
                 if(data.assigned === 1){
    		 return(
                 <NavLink to={`/${data.action}/${data.id}`} className="lists-items nonfilter" key={i} >
                <span className="li1">
                    <span>
                        {data.image === 0 ?
                            <i className="zmdi zmdi-account">
                        </i>
                        :<img src={data.icon} alt={data.title} />}
                    </span>
                </span>  
                <span className="li2">
                    {data.title}
                    <span>Draft Created: {data.date}</span>
                </span>
                <span className="li3">{data.day}</span>
              </NavLink>
               );
               }
              }  else {
              	return(
              		<NavLink to={`/${data.action}/${data.id}`} className="lists-items nonfilter" key={i} >
                <span className="li1">
                    <span>
                        {data.image === 0 ?
                            <i className="zmdi zmdi-account">
                        </i>
                        :<img src={data.icon} alt={data.title} />}
                    </span>
                </span>  
                <span className="li2">
                    {data.title}
                    <span>Draft Created: {data.date}</span>
                </span>
                <span className="li3">{data.day}</span>
              </NavLink>
              );
              }
    		
    	})
        return (
          <div>
              <Index/>
            <div className="container-2 saved-drafts-wrp">
               <h2 className="text-left">Saved Encounter Drafts</h2>
               <div className="text-left"><p>{ this.state.drafts.length } Total</p></div>
                <div>
                <div className="md-checkbox"><input id="i3" type="checkbox" defaultChecked={this.state.assigned_check} name="assigned_check" onClick={this.handleCheck} /><label htmlFor="i3"></label></div>
                
                <span htmlFor="checkbox12">Assigned to me</span>
                </div>
               { draftData }
               <div className="search row small-12 medium-8 large-6 columns align-center">
                 <input type="search" value={this.state.search} name="search" className="animated-search-form" onChange={this.handleChange} />

                <span onClick={this.handleClick}><i className="zmdi zmdi-search"></i></span>
                 {this.state.match 
                    ? <div className="searchResult">
                        <ul>
                          {this.state.searchResult.map((data, i) => <li onClick={()=>{this.setState({data: [data], search: data.title})}} key={i}>{data.title}</li>)}
                        </ul>
                      </div> 
                    : ""
                  }

                </div>
                </div>
            </div>
        );
    }
}

export default Drafts;

