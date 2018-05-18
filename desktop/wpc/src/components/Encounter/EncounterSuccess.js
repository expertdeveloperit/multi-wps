import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import success from '../../images/sdf.jpg';
import PersonSearch from '../personSearch/PersonSearch';
import SearchResults from '../personSearch/SearchResults';

class EncounterSuccess extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    	this.showResults=this.showResults.bind(this);
        //contains data to iterate through and form the list
        this.data=[
            {
                'icon':'zmdi-file-plus',
                'title':'New Quick Note',
                'action':'encounter_success'
            },
            {
                'icon':'zmdi zmdi-file-text',
                'title':'New Encounter Form',
                'action':'encounter'

            }
        ]
        this.state={
            search:'',
            results:false,
            searchResults:[]
        }
    }
    handleChange(e){
        var name=e.target.name;
        var value=e.target.value;
        this.setState({[name]:value})
    }

    showResults(data){
		this.setState({searchResults:data,results:true})
	}

    render() {
        
        return (
            <div>
                <div className="container ">
                    <div className="row welcom-section encounter-success " >
                    <div className="columns small-12 wol-come-wrp">
                        <div className="container-2">
                        <h2 className="profile-date-hd"><img src={success} />1 record updated</h2>
                        <p className="profile-date profile-date2">Thank you for te caring for Samuel Jones and the people of San Fransisco!</p>
                        {this.data.map((data,i)=>{
                            return(
                                <NavLink className="buttons" to={`/${data.action}`} key={i}>
                                    <span className="bs1"><i className={"zmdi "+data.icon}></i></span>
                                    <span className="bs2">{data.title}</span>
                                    <span className="bs3"><i className="zmdi zmdi-chevron-right"></i></span>
                                </NavLink>        
                            )
                        })}
                        <div className="search row encounter_success_search align-center">
                            <PersonSearch handleClick={this.showResults}/>
                            {this.state.results && 
                                <SearchResults results={this.state.searchResults}/>
                            }
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>           
            </div>
        );
    }
}

export default EncounterSuccess;
