import React, { Component } from 'react';
import LoginComponent from '../../modules/AuthModule/components/LoginComponent';

export default class LoginScreen extends Component {
    render() {
        return (
            <LoginComponent navigation={this.props.navigation} />
        );
    }
}
