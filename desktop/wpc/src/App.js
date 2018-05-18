import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import Home from './components/Home/Home';
import Header from './components/Common'
import ImageSlider from './components/ProfileSlider/Slider'
import ProfileDetails from './components/Profile/ProfileDetails';
import Location from './components/Profile/location';
import Encounter from './components/Encounter/Encounter';
import View_proto from './components/Home/View_proto';
import Signin from './components/Signin/Signin';
import Welcome from './components/Welcome/Welcome';
import Ol from './components/Ol/Ol';
import 'sweetalert/dist/sweetalert.css';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      info: ''
    }
  }

  redirect(e){
    this.setState({
      redirect: true
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {!this.state.redirect ? <Header /> : ""}
            <Switch>
              <Route exact path="/" component={View_proto} />
              <Route exact path="/login" component={Signin} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/slider" component={ImageSlider} />
              <Route exact path="/ol" component={Ol} />
              <Route exact path="/search" component={Home} />
              <Route path="/profile-details/:id"  render={(props)=>(
                <ProfileDetails redirect = {this.redirect.bind(this)} {...props}/>
              )} />
              <Route path="/encounter"  render={(props)=>(
                <Encounter {...props} info={this.state.info}/>
              )} />
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
