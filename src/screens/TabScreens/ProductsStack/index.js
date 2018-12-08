import { createStackNavigator } from 'react-navigation';
import ProductsScreen from './ProductsScreen';
import ProductsDetailScreen from './ProductsDetailScreen';

const RouteConfig = {
    ProductsScreen: {
        screen: ProductsScreen
    },
    ProductsDetailScreen: {
        screen: ProductsDetailScreen
    },
}
const StackNavigatorConfig = {
    headerMode: 'none'
}
export default createStackNavigator(RouteConfig, StackNavigatorConfig);