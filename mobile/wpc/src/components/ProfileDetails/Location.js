import React, { Component } from 'react';
import MapComponent from './map';
import LocationsLists from './locationsList';
import {NavLink} from 'react-router-dom'
class Location extends Component{
    constructor(props){
    super(props);
    this.state={results:false,markers:false,center:{lat:'',lng:''},markers_data:[]}
    this.currentLocation=this.currentLocation.bind(this);
    this.data=[
        {
            'icon':'zmdi-pin',
            'title':'8th St and Mission St,San Fransisco',
            'list_title':'8th St and Mission St.',
            'map_title':'8th St and Mission St,San Fransisco',
            'country':'San Fransisco',
            'date':'14/10/2018',
            'sub_titles':'12 encounters',
            'radius':12,
            'action':'',
            'image':0,
            'day':'Today',
            'assigned':0
        },
        {
            'icon':'zmdi-pin',
            'title':'9th St and Market St,San Fransisco',
            'list_title':'8th St and Mission St',
            'map_title':'9th St',
            'country':'San Fransisco',
            'sub_titles':'7 encounters',
            'date':'14/10/2018',
            'radius':7,                
            'action':'',
            'image':1,
            'day':'Today',
            'assigned':1                
        },
        {
            'icon':'zmdi-pin',
            'title':'Open Access Clinic(50 Ivy),San Fransisco',
            'list_title':'8th St and Mission St',
            'map_title':'OAC',
            'country':'San Fransisco',
            'sub_titles':'4 encounters',
            'date':'14/10/2018',
            'radius':4,                
            'action':'',
            'image':0,
            'day':'Today',
            'assigned':0                                            
        },

        
    ]
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
        var latlng,address,title_comp;
          this.data.map((data,i)=>{
            title_comp=data.title+','+data.country;
            var i=i;
            navigator.geolocation.getCurrentPosition(
              position => {
                var url='https://maps.googleapis.com/maps/api/geocode/json?address='+title_comp+'&key=AIzaSyBF6v9Rr6pybH_EVsghVG08ZG3m1C3Cyfg';
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
        })
        this.setState({markers_data:this.state.markers_data})
    }
    render(){
        return(
             <div className="container-3 location">
                <LocationsLists data={this.data}/>
                <MapComponent mapid="map2" currentLocation={this.currentLocation} radius={true} center={this.state.center} markers={this.state.markers} markers_data={this.data}/>
                
                 <div className="sne">
                    <NavLink to='/encounter' className="sne-anc">+ Log Encounter at Current Location</NavLink>
                </div>
            </div>
        )
    }
}

export default Location;