import React, { Component } from 'react';
import PersonSearch from '../personSearch/PersonSearch';
import SearchResults from '../personSearch/SearchResults';
import MapComponent from '../map/mapComponent';
import data from '../../state.js'
class Location extends Component{
	constructor(props){
	super(props);
	this.state={results:false,markers:false,center:{lat:'',lng:''},markers_data:[]}
	this.currentLocation=this.currentLocation.bind(this);
	}
	currentLocation(){
		  navigator.geolocation.getCurrentPosition(
            position => {
              var url='https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&key=AIzaSyBF6v9Rr6pybH_EVsghVG08ZG3m1C3Cyfg';
              fetch(url)
              .then((response)=>{ return response.json(); })
              .then((response)=>{
                var center={lat:position.coords.latitude,lng:position.coords.longitude};
                  this.setState({center:center})
              })
            },
            error => console.log(error)
          );
        if(this.props.markers){
        	this.state.center
          this.setState({markers:true})  
        }
	}
	componentDidMount(){
        var latlng,address;
		  data.data.map((data,i)=>{
            var i=i;
            navigator.geolocation.getCurrentPosition(
              position => {
                var url='https://maps.googleapis.com/maps/api/geocode/json?address='+data.title+'&key=AIzaSyBF6v9Rr6pybH_EVsghVG08ZG3m1C3Cyfg';
                fetch(url)
                .then((response)=>{ return response.json(); })
                .then((response)=>{
                    latlng=response.results[0].geometry.location;
                    address=response.results[0].formatted_address;
                    var markers={lat: latlng.lat, lng: latlng.lng,text1:address}
                    this.state.markers_data.push(markers);
                    if((data.length - 1) === i){
                    	this.state.center.lat=latlng.lat
                    	this.state.center.lng=latlng.lng
                        this.setState({center:this.state.center}) 
                    }
                })
              },
              error => console.log(error)
            );
        },()=>{
        	console.log('test')
        })
    	this.setState({markers_data:this.state.markers_data})
	}
	render(){
		return(
			<div>
				<MapComponent currentLocation={this.currentLocation} mapid="map" radius={true} center={this.state.center} markers={this.state.markers} markers_data={data}/>	
				
			</div>
		)
	}
}

export default Location;