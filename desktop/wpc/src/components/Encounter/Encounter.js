import React, { Component } from 'react';
import PatientInfo from './PatientInfo';
import EncounterHeader from './EncounterHeader';
import EncounterSteps from './EncounterSteps';
import EncounterDetails from './EncounterDetails';
import Diagnosis from './Diagnosis';
import users from '../../state';
import EncounterSuccess from './EncounterSuccess';

class Encounter extends Component {
    constructor(props){
        super(props);
        this.nextCount = this.nextCount.bind(this);
        this.state = {
            count: 1,
            profileData: ''
        }
    }

    componentWillMount(){
        if(this.props.location.state.data){
            this.setState({profileData: this.props.location.state.data})
        }
    }

    nextCount(e){
        if(this.state.count < 4){
            var count = ++this.state.count;
            this.setState({
                count
            })
        }else{
            return false;
        }
        
    }

    stepShow(){
        
        if(this.state.count === 1){
            return(
                <PatientInfo nextCount={this.nextCount} info={this.state.profileData}/>
            )
        }else if(this.state.count === 2){
            return(<EncounterDetails nextCount={this.nextCount} info={this.state.profileData}/>)
        }else if(this.state.count === 3){
            return(<Diagnosis info={this.state.profileData} nextCount={this.nextCount}/>)
        }else if(this.state.count === 4){
            return(<EncounterSuccess info={this.state.profileData}/>)
        }
    }

    render() {
        
        var steps = this.stepShow();
        return (
            <div className="wrapper sd">
                <section className="starting-section">
                    <div className="parent">
                        <EncounterHeader />
                        <div className="main-patient">
                            <div className="patient-inner-section">
                                <EncounterSteps count={this.state.count}/>
                                <div className="main-patient-info">
                                <div className="main-patient">
                                    <div className="patient-inner-section">
                                        {steps}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Encounter;
