import React, { Component } from 'react';
import img from '../../images/profile-pictures.jpg';
import profile from '../../images/profile-pictures.jpg';
import { NavLink } from 'react-router-dom';
import Index from '../Common/index';
import history from '../../state';

class Search extends Component {
	constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      match:false,
      search: '',
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
      history: history.history,
      showHistory: false,
      searchResult: ''
    };
  }
  handleClick(e){
    if(this.state.match){
        this.setState({
          data: this.state.searchResult,
          match: false
        })
    }
  }

  handleChange(e){
    if(e.target.value == ''){
        this.setState({search: e.target.value, match:false, showHistory: false})
    }else{
        this.setState({search: e.target.value, match:true, showHistory: false})
        var updatedList = this.state.data;
        updatedList = updatedList.filter((item) => {
          return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({searchResult: updatedList});
    }
  }

  render() {
    return (
    	<div className="container-3 search-box no-margin">
        <Index />
        <h2 className="text-left">Paitent Search</h2>
        <div className="search row small-12 medium-8 large-6 columns align-center">
         <input type="search" 
            value={this.state.search} 
            name="search" 
            className="animated-search-form" 
            onChange={this.handleChange} 
            onClick={() => {this.setState({showHistory: true})}}
        />

        <span onClick={this.handleClick}><i className="zmdi zmdi-search"></i></span>
         {this.state.match 
            ? <div className="searchResult">
                <ul>
                    {this.state.searchResult.length > 0 
                    ? this.state.searchResult.map((data, i) => 
                        <li onClick={()=>{this.setState({data: [data], match:false, search: data.title})}} key={i}>
                        <span className="search-list-icon"><i className="zmdi zmdi-search"></i></span>
                        {data.title}<span>{data.last_seen}</span>
                        </li>
                     )
                    : <li>No Results Found</li>
                    }
                </ul>
              </div> 
            : ""
          }
          {this.state.showHistory 
            ? <div className="searchResult history">
                <ul>
                  {this.state.history.map((data, i) => <li onClick={()=>{this.setState({data: [data], match:false, search: data.title})}} key={i}><span className="search-list-icon"><i className="zmdi zmdi-search"></i></span>{data.title}<span>{data.last_seen}</span></li>)}
                </ul>
              </div> 
            : ""
          }

        </div>
        <h2>Recent Searches</h2>
        <div className="recentSearches">
          {this.state.data.map((data,i) => {
            return(
              <NavLink className="lists-items nonfilter" to={`/${data.action}/${data.id}`} key={i} >
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
                    <span>Last seen: {data.last_seen}</span>
                </span>
                <span className="li3">{data.day}</span>
              </NavLink>    
            )
          })}
            
        </div>
      </div>
    )
  }
}

export default Search ;