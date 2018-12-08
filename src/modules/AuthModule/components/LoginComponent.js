import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginHeader from '../../../resources/Login.png'
import { loginAction } from '../actions';

import { connect } from 'react-redux';

const EmailInput = (props) => (
    <TextInput
        style={{ height: 45, width: 210, borderBottomWidth: 0.5 }}
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={(text) => {
            props.onChangeText(text);
        }}
    />
);
const PasswordlInput = (props) => (
    <TextInput
        style={{ height: 45, width: 210, borderBottomWidth: 0.5 }}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(text) => {
            props.onChangeText(text);
        }}
    />
);
const SharedButton = (props) => (
    <TouchableOpacity
        onPress={() => {
            props.onPress();
        }}
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 210,
            backgroundColor: '#B55786',
            borderRadius: 6,
        }}>
        <Text style={{ color: '#FBFAFD', fontSize: 20 }} >Login </Text>
    </TouchableOpacity>
);
const Styles = StyleSheet.create({
    container: {
        height: 180,
        backgroundColor: '#52DAFA',
        width: '100%', alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomEndRadius: 180,
        borderBottomStartRadius: 180
    },
    centerStyle: {
        height: 300,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 1,
        padding: 20
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
        backgroundColor: '#4285f4',
        marginLeft: 5, flexDirection: 'row',
        borderRadius: 2,
        borderWidth: 1.5,
        borderColor: '#4285f4'
    }
});

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={Styles.container}>
                    <Image source={LoginHeader} style={{ height: 170, width: 170 }} />
                </View>
                <View style={{ height: 10 }}></View>
                {/* ---------------------------------------------------------------- */}
                <View style={{ flex: 1, }}>
                    <View style={Styles.centerStyle}>
                        <View style={{ height: 5 }}></View>
                        <Text style={{ fontSize: 14, color: 'black' }}>Email/Phone Number</Text>
                        <EmailInput onChangeText={(text) => {
                            this.setState({ email: text })
                        }} />
                        <View style={{ height: 15 }}></View>
                        <Text style={{ fontSize: 14, color: 'black' }}>Password</Text>
                        <PasswordlInput onChangeText={(text) => {
                            this.setState({ password: text })
                        }} />
                        <View style={{ height: 15 }}></View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 14, color: '#54a0ff' }}> Fogot your password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <SharedButton
                            onPress={() => {
                                this.props.loginAction(this.state.email, this.state.password)
                            }}>
                            <Text style={{ color: '#FBFAFD', fontSize: 20 }} >Login</Text>
                        </SharedButton>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('RegisterScreen', {})
                            }}
                        >
                            <Text style={{ fontSize: 14, color: '#54a0ff' }}>Register now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ---------------------------------------------------------------- */}
                <View style={{ height: 110, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 14 }}>Or, login using</Text>
                    <View style={{ height: 15 }}></View>
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

// Nối các states vào props (values) của View Component
// Nối các kết quả nhận được
const mapStateToProps = (state) => {
    return ({
        loginUser: state.loginReducer.loginUser,
        loading: state.loginReducer.loading

    })
};
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
    loginAction: (email, password) => dispatch(loginAction(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
