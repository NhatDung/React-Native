import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class AccountScreen extends Component {
    static navigationOptions = {
        title: 'Account',
        tabBarIcon: <Icon name='account' size={30} />
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text> NewsFeed </Text>
            </View>
        );
    }
}
