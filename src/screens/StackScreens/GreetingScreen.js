import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import HeaderImage from '../../resources/Header.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Styles = StyleSheet.create({
  loginButton: {
    height: 48,
    width: 250,
    backgroundColor: '#B55786',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerButton: {
    height: 48,
    width: 250,
    backgroundColor: '#FBFAFD',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebookButton: {
    width: 120,
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 5
  },
  googleButton: {
    width: 120,
    marginLeft: 5,
    flexDirection: 'row',
    borderRadius: 4
  }
});
export default class GreetingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1E274D' }}>
        {/* ---------------------------------------------------------------- */}
        <View style={{ flex: 6, }}>
          <Image source={HeaderImage}
            style={{
              width: 410, height: 400,
              borderBottomLeftRadius: 200,
              borderBottomRightRadius: 200
            }}>
          </Image>
        </View>
        <View style={{ height: 35 }}></View>
        {/* ---------------------------------------------------------------- */}
        <View style={{ flex: 4, alignItems: 'center' }}>
          <TouchableOpacity style={Styles.loginButton}
            onPress={() => {
              this.props.navigation.navigate('LoginScreen', {});
            }}>
            <Text style={{ color: '#FBFAFD', fontSize: 20 }} >Login </Text>
          </TouchableOpacity>
          <View style={{ height: 20 }}></View>
          <TouchableOpacity style={Styles.registerButton}
            onPress={() => {
              this.props.navigation.navigate('RegisterScreen', {})
            }}>
            <Text style={{ color: '#B55786', fontSize: 20 }}>Register </Text>
          </TouchableOpacity>
          <View style={{ height: 20 }}></View>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}> Or, login using</Text>
          <View style={{ height: 20 }}></View>
          {/* ---------------------------------------------------------------- */}
          <View style={{ height: 48, flexDirection: 'row' }}>
            <TouchableOpacity style={Styles.facebookButton}>
              <Icon name={'facebook'} size={32} color={'white'} />
              <Text style={{ color: 'white', fontSize: 16 }}>Facebook </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.googleButton}>
              <View style={{
                backgroundColor: 'white',
                width: 48,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon name={'google'} size={32} color={'red'} />
              </View>
              <View style={{
                width: 72,
                backgroundColor: '#4285f4',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Google </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
