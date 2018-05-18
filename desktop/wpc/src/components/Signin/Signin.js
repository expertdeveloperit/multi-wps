//Universal-cookie- plugin to use cookies in the code
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from "universal-cookie";
import SweetAlert from 'sweetalert-react';

class Signin extends Component {
    constructor(){
        super();
        this.signin = this.signin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            user: "",
            pass: "",
            show: false
        }
    }
    // to set input fields value
    handleChange(e){
        var name = e.target.name,
            value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    // function to signin
    signin(e){
        var user = "test",
            pass = '1234';
        if(this.state.user === user && this.state.pass === pass){
            const cookie = new Cookies();
            cookie.set("logged_in", true, {path: "/"});
            this.props.redirect(true);
            return true;
        }else{
            this.setState({show: true})
            e.preventDefault();            
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row grid-x">
                    <div className="columns small-12 medium-4 large-4 large-offset-4 top_center">
                        <div className="container-2 card_view">
                        
                        <h1>Welcome to the Whole Person Care APP.</h1>
                        <p>The information contained in this app may contain privileged and confidential information, including patient information protected by federal and state privacy laws.</p>

                        <div className="frm text-left">
                            <label>
                            Username
                            <input type="text" name="user" placeholder="Username" value={this.state.user} onChange={this.handleChange}/>
                            </label>
                            <label>
                            Password
                            <input type="Password" name="pass" placeholder="Password" value={this.state.pass} onChange={this.handleChange}/>
                            </label>
                            <NavLink className="button custom-button-2 mrt40" to="/welcome" onClick={this.signin}>Sign In</NavLink>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div> 
                <SweetAlert
                    show={this.state.show}
                    title="Error"
                    text="Invalid Username or Password"
                    onConfirm={() => this.setState({ show: false })}
                />
            </div>
        );
    }
}

export default Signin;
