import React, { Component } from 'react';
import pin_account from '../../images/pin-account.svg'
const google = window.google;
var Popup,popup;
class MapComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      center:{
        lat:37.7749,
        lng:-122.4194,
      },
      text:'Kreyser Avrora',
      markers:false,
      markers_data:[]
    }
  }
  
  componentWillMount() {
    this.setState({markers_data:this.props.markers_data})
  }
  map(){ 
      var center= this.state.center;
        return new google.maps.Map(document.getElementById(this.props.mapid), {
          center: center,
          zoom: 15
        });
     
  }

  getCurrentLocation(){

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
          this.setState({markers:true})  
        }
  }

  componentDidMount(){
      
      this._map = this.map();
      if(this.props.markers_data){
        var center=false;
        this.props.markers_data.map((positions,i)=>{
          if((this.props.markers_data.length - 1) === i){
            center=true;
          }
          this.getLatLong(positions.title,positions.radius,center,positions.map_title,positions.date)

        })
    }
  }
  setMarker(center,radius){
     var image = {
          url: pin_account,
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
      if(this.props.markers){

      var marker = new google.maps.Marker({
          position: center,
          icon:image,
          map: this._map
        });
      }else{

      var marker = new google.maps.Marker({
          position: center,
          icon:image,
          map: this._map
        });
      }
  marker.setMap(this._map);
  }
  setPopup(center,radius,title,date){
    var contentString='Last Encounter: '
    +title+
    '<br/>'+date;
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
      var marker = new google.maps.Marker({
        position: center,
        map: this._map,
      });
          infowindow.open(this._map, marker);
  }

 
 setMarker_circle(center,radius){
    var cityCircle = new google.maps.Circle({
      strokeColor: '#d780e8',
      strokeOpacity: 0.8,
      strokeWeight: 6,
      fillColor: '#d780e8',
      fillOpacity: 0.35,
      map: this._map,
      position: center,
      center: center,
      title: 'Hello World!',
      radius: radius * 10
    });
  }

  componentWillReceiveProps(props,nextProps){
    if(!props.center && this.props.markers_data.length>0  ){
      
      if(( nextProps.markers===true || props.markers===true) && this.props.markers_data[0].lat!=='' && this.props.markers_data[0].lng!==''){
        var lat=this.props.markers_data[0].lat;
        var lng=this.props.markers_data[0].lng;
        this.state.center.lat=lat
        this.state.center.lng=lng
        this.setState({lat:lat,lng:lng})
        this._map=this.map();
        this.setMarker({lat:lat,lng:lng},'')

      }
    }
  }
  getLatLong(title,radius,center,map_title,date){
     var latlng,address,markers;
        var i=i;
        navigator.geolocation.getCurrentPosition(
          position => {
            var url='https://maps.googleapis.com/maps/api/geocode/json?address='+title+'&key=AIzaSyBF6v9Rr6pybH_EVsghVG08ZG3m1C3Cyfg';
            fetch(url)
            .then((response)=>{ return response.json(); })
            .then((response)=>{
                latlng=response.results[0].geometry.location;
                address=response.results[0].formatted_address;
                markers={lat: latlng.lat, lng: latlng.lng,text1:address}
                if(center === true){
                  this.state.center.lat=latlng.lat
                  this.state.center.lng=latlng.lng
                  this.setState({center:this.state.center}) 
                  this.setPopup({lat: latlng.lat, lng: latlng.lng},radius,map_title,date)
                }else{
                  this.setMarker_circle({lat: latlng.lat, lng: latlng.lng},radius)
                }
            })
          },
          error => console.log(error)
        );
        
  }

  componentWillUnMount(){
    window.google;
  }

    render() {  
        return (
          <div>
         
            <div className="locationMaps" style={{ height: '50vh', width: '100%' }} id={this.props.mapid}>
             
            </div> 
         
          </div>
        );
    }
}

const Marker = ({ text }) => <div><i  className="icons_map zmdi zmdi-pin-account zmdi-hc-3x"></i>{text}</div>;
export default MapComponent;

