import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BuyListComponent from '../../modules/ProductsModule/components/BuyListComponent';
export default class CartScreen extends Component {
    static navigationOptions = {
        title: 'Cart',
        tabBarIcon: <Icon name='cart' size={30} />
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <BuyListComponent />
        );
    }
}
