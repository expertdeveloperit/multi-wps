import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import users from '../../state';

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            id: ''
        }

    }

    render() {
        console.log("sg", this.props)
        if(this.props.from === 'alert'){
            return(
                <div className="modal-container">
                <div className="container-2 profile-details modalAlert modal text-left">
                    <div>
                        <h2 className="text-left top-heading tl">Resolve Alert<span className="close" onClick={this.props.closeModal}>X</span></h2>
                    </div>
                    <h2>{ this.props.info.title }</h2>
                    <div className="modalbody">
                    <div className="container-5">
                        <label>client</label>
                           <h2>{ this.props.info.client }</h2>
                        <label>Resolve By</label>
                            <h2>{"You"}</h2>
                          <label>Resolution Date</label>
                        <h2>{ this.props.info.date }</h2>
                        <label className="note">Note</label>
                        <p className="note-box">Lorem ipsum dolor sit amet, ac pretium leo rutrum. Sed viverra ac ante quis dignissim.</p>
                    </div>
                    <div className="">
                        <p>"Clicking" Submit wil remove the alert from the profile and will add to partially
                        autofilled encounter form to your list of encounter forms to complete.
                        </p>
                     </div>
                     <div className="text-right">
                        <button  onClick={this.props.closeModal}>Cancel</button>
                        <button className="button submit" onClick={this.props.submitModal(this.props.info.id)}>Submit</button>
                     </div>
                     </div>
                </div>
                <div className="movelap"></div>
                </div>
            )
        }else{
            return(
                <div className="modal-container ">
                    <div className="hd modalAlert modal text-left">
                        <h3 className="tl"> Follow-up Plan <span className="close" onClick={this.props.closeModal}>X</span></h3> 
                        <div className="modalbody">
                        <ul className="update-list">
                            <li>
                                <strong> Last update</strong>
                                <span>13-10-2016</span>
                            </li>
                            <li>
                                Last update by
                                <span>13-10-2016</span>
                            </li>
                        </ul>
                        <div className="update-list-wrp">
                            <h4><span>1</span> Eu duis ultrices, dignissim at fuga</h4>
                            <p>Suspendisse nam, posuers nisl vitae tellus, elit ut libero, nobis nunc sed sit...</p>
                        </div>
                        <div className="update-list-wrp">
                            <h4><span>2</span> Eu duis ultrices, dignissim at fuga</h4>
                            <p>Suspendisse nam, posuers nisl vitae tellus, elit ut libero, nobis nunc sed sit...</p>
                        </div>
                        <div className="update-list-wrp">
                            <h4><span>3</span> Eu duis ultrices, dignissim at fuga</h4>
                            <p>Suspendisse nam, posuers nisl vitae tellus, elit ut libero, nobis nunc sed sit...</p>
                        </div>
                        <h3 className="closefl"><span onClick={this.props.closeModal}>Close</span></h3>
                        </div>
                    </div>
                    <div className="movelap"></div>
                </div>
            )
        }
    }
        
}

export default Modal;
