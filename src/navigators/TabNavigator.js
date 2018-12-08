import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import index from '../screens/TabScreens/ProductsStack/index';
import RssScreen from '../screens/TabScreens/RssScreen';
import CartScreen from '../screens/TabScreens/CartScreen';
import ChatScreen from '../screens/TabScreens/ChatScreen';
import AccountScreen from '../screens/TabScreens/AccountScreen';
import FaIcon from 'react-native-vector-icons/FontAwesome';


const RouteConfig = {
    index: {
        screen: index,
        navigationOptions: () => ({
            title: 'Home',
            tabBarIcon: () => (<FaIcon name='home' size={30} />)
        })
    },
    RssScreen: {
        screen: RssScreen
    },
    ChatScreen: {
        screen: ChatScreen
    },
    CartScreen: {
        screen: CartScreen
    },
    AccountScreen: {
        screen: AccountScreen
    }
}
const BottomTabNavigatorConfig = {
    tabBarOptions: {
        // showLabel: false,
        activeBackgroundColor: 'orange',
        inactiveBackgroundColor: 'white',
        style: { height: 48, opacity: 0.75 }
    }
}
export default createBottomTabNavigator(RouteConfig, BottomTabNavigatorConfig);