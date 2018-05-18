import React, { Component } from 'react';
import PageTransition from 'react-router-page-transition';

class Children extends Component {
    render() {
        return (
            <PageTransition>
                {this.props.children}
            </PageTransition>
        );
    }
}

export default Children;
