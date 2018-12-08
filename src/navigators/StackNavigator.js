import { createStackNavigator } from 'react-navigation';
import GreetingScreen from '../screens/StackScreens/GreetingScreen';
import LoginScreen from '../screens/StackScreens/LoginScreen';
import RegisterScreen from '../screens/StackScreens/RegisterScreen';

const RouteConfig = {
    GreetingScreen: {
        screen: GreetingScreen
    },
    LoginScreen: {
        screen: LoginScreen
    },
    RegisterScreen: {
        screen: RegisterScreen
    }
}
const StackNavigatorConfig = {
    headerMode: 'none'
}
export default createStackNavigator(RouteConfig, StackNavigatorConfig);
// const StackNavigator = createStackNavigator(
//     {
//         GreetingScreen: GreetingScreen,
//         LoginScreen: LoginScreen,
//         RegisterScreen: RegisterScreen
//     }
// );
// export default StackNavigator;