import React, { Component } from 'react';
import RegisterComponent from '../../modules/AuthModule/components/RegisterComponent';


export default class componentName extends Component {
    render() {
        return (
            <RegisterComponent navigation={this.props.navigation} />
        );
    }
}
