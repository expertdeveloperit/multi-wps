import React, { Component } from 'react';
import PersonSearch from '../personSearch/PersonSearch';
import SearchResults from '../personSearch/SearchResults';

class Home extends Component{
	constructor(props){
	super(props);
	this.state={results:false,searchResults:[]}
	this.showResults=this.showResults.bind(this);
	}
	showResults(data){
		this.setState({searchResults:data,results:true})
	}
	render(){
		return(
			<div>
				<PersonSearch handleClick={this.showResults}/>
				{this.state.results && 
					<SearchResults results={this.state.searchResults}/>
				}
			</div>
		)
	}
}

export default Home;