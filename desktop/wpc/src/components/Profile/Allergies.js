import React, { Component } from 'react';

class Allergies extends Component {
    render() {
        return (
            <div>
                <div className="Alerts-section ">
                  <div className="sec">
                    <h3>Allergies</h3>
                    <p>Eggs, lateex</p>
                  </div>
                  <div className="sec">
                    <h3>Medications</h3>
                    <p>XYZ<span>Prescribed 4/10/2018</span></p>
                    <p>ABC<span>Prescribed 4/10/2018</span></p>
                  </div>
                  <div className="sec bb0">
                    <h3>Diagnoses</h3>
                    <p>HIV (B20)</p>
                    <p>Opiate use disorder (F11.24)</p>
                  </div>
                </div> 
            </div>
        );
    }
}

export default Allergies;
