import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SearchResults extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		console.log(this.props.results)
	}
	render(){
		let total_alerts;
		return(
			<div>
				<div className="wrapper">
					<h2 className="results-clear">Results for ”mirabel gonzalez” <span>clear</span></h2>
					<div className="container-sd  search-results-list">
						
						{this.props.results.map((data,i)=>{
							total_alerts=data.alert.length - 2

							return(
								<NavLink to={`/profile-details/${data.id}`}>
									<div className="results-list-row-ds" key={i}>
										<span className="images-section">
											<img src={require('../../images/1.jpg')} alt="img"/>
										
										</span>
										<span className="text-section">
											<h3>{data.lname}, {data.fname}</h3>
											<span >{data.dob}</span>
											<p>{data.type} - {data.height} - {data.weight}</p>
											<ul>
												{data.alert.map((alert,i)=>{
													if(i<2){
														return(
																<li className={alert.high===1 ? 'yellow' :'gray-d'}>{alert.title}</li>
															)
													}
													}
												)}
												{total_alerts > 0 &&
													<li>{total_alerts} more alerts</li>
												}
											</ul>
										</span>
									</div>
								</NavLink>
							)
						})}

						
					</div>
				</div>
			</div>
		)
	}
}

export default SearchResults;