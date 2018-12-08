import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class RssScreen extends Component {
    static navigationOptions = {
        title: 'Rss',
        tabBarIcon: <Icon name='rss' size={30} />
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            // HEADER
            <View style={{ flex: 1 }}>

            </View >
        );
    }
}
