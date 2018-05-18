import React, { Component } from 'react';

class SetAlert extends Component {
    constructor(props){
        super(props);
        this.state = {
            rgroup:''
        }
    }

    handleClickRadio(name,value,e){

        this.setState({[name]:value});
        
    }

    render() {
        return (
            <div>
                <h3>Set an alert (optional)</h3>
                <p>Alert type</p>
                <div className="button-group round toggle direct direct-Indirect">
                    <span><input type="radio" id="r1" name="rgroup" />
                    <label className={`button ${this.state.direct==='r1' && 'active'}`} onClick={this.handleClickRadio.bind(this,'direct','r1')} htmlFor="r1">Clinical</label></span>
                    <span><input type="radio" id="r2" name="rgroup" />
                    <label className={`button ${this.state.direct==='r2' && 'active'}`} onClick={this.handleClickRadio.bind(this,'direct','r2')} htmlFor="r2">Follow-up</label></span>
                    <span><input type="radio" id="r3" name="rgroup" />
                    <label className={`button ${this.state.direct==='r3' && 'active'}`} onClick={this.handleClickRadio.bind(this,'direct','r3')} htmlFor="r3">Immunization</label></span>
                    <span><input type="radio" id="r4" name="rgroup" />
                    <label className={`button ${this.state.direct==='r4' && 'active'}`} onClick={this.handleClickRadio.bind(this,'direct','r4')} htmlFor="r4">Outreact</label></span>
                    <span><input type="radio" id="r3" name="rgroup" />
                    <label className={`button ${this.state.direct==='r5' && 'active'}`} onClick={this.handleClickRadio.bind(this,'direct','r5')} htmlFor="r5">Safety</label></span>
                </div>
                <div className="note">
                    <p>Note</p>
                    <label htmlFor="note">
                        <input type="text" className="noteInput" value="" name="note"/>
                    </label>
                </div>
                <div className="expirationDate">
                    <p>Expirarion Date(optional)</p>
                    <label className="date-section" htmlFor="note">
                        <input type="text" className="noteInput" value="" name="note"/>
                        
                        <i className="zmdi zmdi-calendar-alt"></i>
                    </label>
                </div>
                <div className="services-prov-list">
                    <div className="md-checkbox">
                        <input id="checkbox5" type="checkbox" name="location" value="direct linkage for accessing service" />
                        <label htmlFor="checkbox5">
                            Notify your team via email
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default SetAlert;
