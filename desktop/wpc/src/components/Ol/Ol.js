import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Index from '../Common/index';
import users from '../../state';
class Ol extends Component {
    constructor(props){
        super(props);
        this.handleCheck=this.handleCheck.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={ 
            total_items:5,
            assigned_check:false,
            search:'',
            match: false,
            searchResult: '',
            data: users.users
        }

    }
    handleCheck(e){
            this.setState({
                assigned_check: !this.state.assigned_check,
            })
    }

    handleSearch(e){
        e.preventDefault();
        this.setState({
          data: this.state.searchResult,
          match: false
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

    handleClick(data, e){
        if(data.action === "profile-details"){
            this.props.redirect
            return true;
        }else{
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="gray wrapper">
                <div className="container ol text-left  Alerts-section">
                    <div className="row grid-x">
                        <div className="columns small-12 large-12 medium-12">
                            <div className="container-2 pb0">
                                <h2 className="margin_less font_big"><strong>Outreach List</strong></h2>
                                <p>{this.state.total_items} total</p>                                
                                <div className="md-checkbox">
                                    <input id="i3" type="checkbox" defaultChecked={this.state.assigned_check} name="assigned_check" onClick={this.handleCheck} />
                                    <label htmlFor="i3"></label>
                                  </div>
                               <label htmlFor="checkbox12">Assigned to me</label>
                            </div>
                            <div className="container-3 ol-list">
                                {this.state.data.map((data,i) => {
                                    if(this.state.assigned_check){
                                        if(data.assigned === 1){
                                            return (
                                                <NavLink className="lists-items nonfilter" to={`/${data.action}/${data.id}`} key={i} onClick={this.handleClick.bind(this, data)}>
                                                <span className="li1">
                                                    <span>
                                                        <img src={require('../../images/'+data.icon)} alt={data.title} />
                                                    </span>
                                                </span>  
                                                <span className="li2">
                                                    {data.title}
                                                    <span>Last seen: {data.last_seen}</span>
                                                </span>
                                                <span className="li3 today">{data.day}</span>
                                                </NavLink>    
                                            )        
                                        }
                                    }else{
                                        return(
                                            <NavLink className="lists-items nonfilter" to={`/${data.action}/${data.id}`} key={i} onClick={this.handleClick.bind(this, data)}>
                                            <span className="li1">
                                                <span>
                                                    <img src={require('../../images/'+data.icon)} alt={data.title} />
                                                </span>
                                            </span>  
                                            <span className="li2">
                                                {data.title}
                                                <span>Last seen: {data.last_seen}</span>
                                            </span>
                                            <span className="li3 today">{data.day}</span>
                                            </NavLink>    
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ol-search " >
                    <div className="search   encounter_success-home align-center">
                        <p>Person search</p>
                        <input type="search" 
                                name="search"
                                className="animated-search-form" 
                                placeholder="Please Enter Email" 
                                value={this.state.search}
                                onChange={this.handleChange.bind(this)} 
                        />
                        <span onClick={this.handleSearch}><i className="zmdi zmdi-search"></i></span>
                        {this.state.match 
                            ? <div className="searchResult">
                                <ul>
                                    {this.state.searchResult.map((data, i) => 
                                        <li onClick={()=>
                                                {this.setState({data: [data], search: data.title, match: false})}} 
                                            key={i}
                                        >
                                            {data.title}
                                        </li>
                                    )}
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

export default Ol;
