import React, { Component } from 'react';


class Card_view extends Component {
    constructor(props){
        super(props);

    }
    render() {
            return(
               <div className="card_view">
                    {this.props.children}
               </div>
        );
    }
}

export default Card_view;
