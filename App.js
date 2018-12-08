import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/configs/configureStore';
import SwitchNavigator from './src/navigators/SwitchNavigator';
import NavigationService from './src/navigators/NavigationService';
import TabNavigator from './src/navigators/TabNavigator';

const store = configureStore();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <SwitchNavigator ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
        </SafeAreaView>
      </Provider>
    );
  }
}