import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
            <div className="container-6">
               <div className="history-section ">
               		<h1>Engagement with Medocal care</h1>
               		<div className="History-list">
               			<div className="Hst-li-wra">
               				<span className="date">04-10-2018</span>
               				<h3>Street Medicine - OAC <i className="zmdi zmdi-circle"></i> <span>AL Doe</span> </h3>
               				<p><span className="Hst-tab">Wound care</span></p>
               				<a className="sne-anc-bac" href="#">VIWE PROGRESS NOTE <i className="zmdi zmdi-chevron-right"></i></a>
               			</div>
               			<div className="Hst-li-wra">
               				<span className="date">04-10-2018</span>
               				<h3 className="gray">Street Medicine - OAC <i className="zmdi zmdi-circle"></i> <span>AL Doe</span> </h3>
               				<p><span className="Hst-tab">Wound care</span></p>
               				<a className="sne-anc-bac" href="#">VIWE PROGRESS NOTE <i className="zmdi zmdi-chevron-right"></i></a>
               			</div>
               			<div className="Hst-li-wra">
               				<span className="date">04-10-2018</span>
               				<h3>Street Medicine - OAC <i className="zmdi zmdi-circle"></i> <span>AL Doe</span> </h3>
               				<p><span className="Hst-tab">Wound care</span></p>
               				<a className="sne-anc-bac" href="#">VIWE PROGRESS NOTE <i className="zmdi zmdi-chevron-right"></i></a>
               				<a className="sne-anc-bac sne-anc-bac-bot " href="#">VIWE OLDER ENCOUNTERS <i className="zmdi zmdi-chevron-down"></i></a>
               			</div>
               		</div>
               </div>
            </div>
        );
    }
}

export default History;

