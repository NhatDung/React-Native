import { createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
const RouteConfig = {
    StackScreen: {
        screen: StackNavigator
    },
    TabScreen: {
        screen: TabNavigator
    }
}
const SwitchNavigatorConfig = {
}
export default createSwitchNavigator(RouteConfig, SwitchNavigatorConfig);