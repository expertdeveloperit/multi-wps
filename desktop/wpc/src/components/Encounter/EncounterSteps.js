import React, { Component } from 'react';

class EncounterSteps extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render() {
        console.log(this.props)
        return (
            <div className="parent pd">
                    <div className="patient-inner-section">
                        <ul className="top-list">
                            <li><span className="blue"><i class="zmdi zmdi-edit"></i></span>Patient information</li>
                            <li><span className="li-center"><span className={this.props.count===2 || this.props.count===3 ? 'blue' :''}>{this.props.count===2 || this.props.count===3 ? (<i class="zmdi zmdi-edit"></i>) : '2'}</span>Encounter details</span></li>
                            <li><span className={this.props.count===3 ? 'blue' :''}>{this.props.count===3 ? (<i class="zmdi zmdi-edit"></i>) : '3'}</span>Diagnoses & next steps</li>
                        </ul>
                    </div>
                </div>
              );
    }
}

export default EncounterSteps;
