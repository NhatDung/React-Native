import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatComponent from '../../modules/ChatModule/ChatComponent';
export default class ChatScreens extends Component {
    static navigationOptions = {
        title: 'Message',
        tabBarIcon: <Icon name='message' size={30} />
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ChatComponent />
        );
    }
}
