import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import ProfileUpdate from './components/Profile/ProfileUpdate';
import Profile from './components/Profile/Profile';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import AlertDetails from './components/ProfileDetails/AlertDetails';
import Encounter from './components/ProfileDetails/Encounter';
import Drafts from './components/ProfileDetails/Drafts';
import Ol from './components/Ol/Ol';
import Search from './components/Search/Search';
import SummaryFull from './components/ProfileDetails/SummaryFull';
import EncounterSuccess from './components/ProfileDetails/EncounterSuccess';
import Cookies from 'universal-cookie';
import { spring, AnimatedSwitch } from 'react-router-transition';
import 'sweetalert/dist/sweetalert.css';
import './index.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      token:false,
      redirect: false
    }
  }

  redirect(e){
    console.log("redirect")
    this.setState({
      redirect: true
    })
  }

  // we need to map the `scale` prop we define below
// to the transform style property
 mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
 bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}


  render() {
    // child matches will...
var bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: this.bounce(0),
    scale: this.bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: this.bounce(1),
    scale: this.bounce(1),
  },
};

    var cookie = new Cookies();
    var token = cookie.get('logged_in');
    return (
        <BrowserRouter>
          <div className="App">
            <Switch>
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={this.mapStyles}
              className="switch-wrapper"
            >
              <Route exact path="/" component={Home} />
              <Route path="/login"   render={()=>(
                token ? (
                  <Redirect to="/profile"/>
                ) : (
                  <Signin />
                )
              )} />
              <Route path="/profile"   render={(props)=>(
                token ? (
                  <Profile {...props}/>
                ) : (
                  <Redirect to="/login"/>
                )
              )} />
              <Route path="/profile-details/:id"  render={(props)=>(
                token ? (
                  <ProfileDetails redirect = {() => this.setState({redirect: true})} {...props}/>
                ) : (
                  <Redirect to="/login" />
                )
              )} />
              <Route path="/ol"   render={()=>(
                token ? (
                  <Ol/>
                ) : (
                  <Redirect to="/login"/>
                )
              )} />
              <Route path="/profile-update" render={(props)=>(
                token ? (
                  <ProfileUpdate {...props}/>
                ) : (
                  <Redirect to="/login"/>
                )
              )} />
              <Route path='/search' render={()=>( <Search />)} />
              <Route path='/summaryfull' render={()=>( <SummaryFull />)} />
              <Route path='/alert-details/:id' render={(props)=>( <AlertDetails {...props}/>)} />
              <Route path='/encounter' render={()=>( <Encounter />)} />
              <Route path="/drafts" render={(props)=>(
                token ? (
                  <Drafts {...props}/>
                ) : (
                  <Redirect to="/login"/>
                )
              )} />
              <Route path='/encounter_success' render={()=>( <EncounterSuccess />)} />
              </AnimatedSwitch>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
