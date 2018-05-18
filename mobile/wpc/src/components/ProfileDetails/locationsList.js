import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LocationsLists extends Component {
    constructor(props){
      super(props);
       
        this.handleClick=this.handleClick.bind(this);

    }

    handleClick(data){
    }
    render() {
        return (
            <div className="container-6 locationslist">
              <strong>Frequent Locations</strong>
              {this.props.data.map((data,i) => {
                    return (
                        <NavLink className="lists-items nonfilter no_border" to="#" key={i} onClick={this.handleClick.bind(this, data)}>
                        <span className="li1">
                            <span>
                              <i className={`zmdi ${data.icon}`}></i>
                            </span>
                        </span>  
                        <span className="li2">
                            {data.list_title}
                            <span>{data.sub_titles}</span>
                            <span className="viewOn">VIEW ON MAP</span>
                        </span>
                        </NavLink>    
                    )        
              })}  
            </div>
        );
    }
}


export default LocationsLists;

