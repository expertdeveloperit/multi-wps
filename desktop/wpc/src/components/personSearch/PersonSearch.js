import React, { Component } from 'react';
import users from '../../state.js'
class PersonSearch extends Component{
	constructor(props){
		super(props)
		 this.state={
	      match:false,
	      search: '',
      	searchResult: '',
      	data:users.users
	  }
   	this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}
  handleClick(e){
		e.preventDefault();
		console.log("e", this.state.match)
    if(this.state.match){
        this.setState({
          data: this.state.searchResult,
          match: false
        })
    }
  }

  	handleChange(e){
  		if(e.target.value == ''){
			this.setState({search: e.target.value, match: false})
		}else{
			this.setState({search: e.target.value, match:true})
			var updatedList = this.state.data;
			updatedList = updatedList.filter((item) => {
				return item.lname.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
			});
			this.setState({searchResult: updatedList});
		}
  	}
	render(){
		return(
			<div className="wrapper prn-srh">
				<h2>Person search</h2>
				<div className="container-sd  person-search">
					
					<div className="person-input">
					  	<p>
					    	<label>Name</label>
								<div className="position_rel">
									<input type="search" value={this.state.search} name="search" onChange={this.handleChange} className="=search-form"  />
									{this.state.match 
												&&	 <div className="searchResult">
														<ul>
															{this.state.searchResult.map((data, i) => <li onClick={()=>{this.setState({data: [data], match:false, search: data.title})}} key={i}><span className="search-list-icon"><i className="zmdi zmdi-search"></i></span>{data.title}<span>{data.last_seen}</span></li>)}
														</ul>
													</div> 
												
											}
								</div>
					    	
					  	</p>
					    <p className="dob-p">
					    	<label>DOB</label>
					    	<input type="search"  name="dob" className="search-form bod"  />
					    </p>
					    <p>
					    	<label></label>
								{this.state.match && 
										(<span>SEARCH BY PHYSICALS<i className="zmdi zmdi-chevron-down"></i></span>) }
					   	</p>
					</div>
					<div className=" person-btn">
					    <button className="search-bnt" onClick={this.props.handleClick.bind(this, this.state.searchResult)}>Search</button>
					</div>
				</div>
			</div>
		)
	}
}

export default PersonSearch;