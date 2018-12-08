import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import LoginHeader from '../../../resources/Login.png';
import { registerAction } from '../actions';

import { connect } from 'react-redux';
const NameInput = (props) => (
    <TextInput
        style={{ height: 45, width: 210, borderBottomWidth: 0.5 }}
        autoCorrect={false}
        onChangeText={(text) => {
            props.onChangeText(text);
        }}
    />
);
const EmailInput = (props) => (
    <TextInput
        style={{ height: 45, width: 210, borderBottomWidth: 0.5 }}
        autoCapitalize={"none"}
        autoCorrect={false}
        keyboardType={'email-address'}
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
const PhoneInput = (props) => (
    <TextInput
        style={{ height: 45, width: 210, borderBottomWidth: 0.5 }}
        autoCorrect={false}
        keyboardType={'phone-pad'}
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
        <Text style={{ color: '#FBFAFD', fontSize: 20 }} >Register </Text>
    </TouchableOpacity>
)
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
        height: '100%',
        width: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 1,
        padding: 20
    }
})
class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            phone: ''
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
                        <Text style={{ fontSize: 14, color: 'black' }}>Full Name</Text>
                        <NameInput onChangeText={(text) => {
                            this.setState({ fullName: text })
                        }} />
                        <View style={{ height: 15 }}></View>
                        <Text style={{ fontSize: 14, color: 'black' }}>Email</Text>
                        <EmailInput onChangeText={(text) => {
                            this.setState({ email: text })
                        }} />
                        <View style={{ height: 15 }}></View>
                        <Text style={{ fontSize: 14, color: 'black' }}>Password</Text>
                        <PasswordlInput onChangeText={(text) => {
                            this.setState({ password: text })
                        }} />
                        <View style={{ height: 15 }}></View>
                        <Text style={{ fontSize: 14, color: 'black' }}>Phone Number</Text>
                        <PhoneInput onChangeText={(text) => {
                            this.setState({ phone: text })
                        }}
                        />
                        <View style={{ height: 15 }}></View>
                        <SharedButton
                            onPress={() => {
                                this.props.registerAction(
                                    this.state.fullName,
                                    this.state.email,
                                    this.state.password,
                                    this.state.phone
                                )
                            }}>
                            <Text style={{ color: '#FBFAFD', fontSize: 20 }} >Login </Text>
                        </SharedButton>
                        <View style={{ height: 15 }}></View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('LoginScreen', {})
                                }}>
                                <Text style={{ fontSize: 14, color: '#54a0ff' }}> Back to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* ---------------------------------------------------------------- */}
                <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, color: 'black' }}> Receive Information from Lazada</Text>
                </View>

            </View>
        );
    }
};
// Nối các states vào props (values) của View Component
// Nối các kết quả nhận được
const mapStateToProps = (state) => {
    return ({
        registerUser: state.registerReducer.loginUser,
        loading: state.registerReducer.loading

    })
};
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
    registerAction: (fullName, email, password, phone) => dispatch(registerAction(fullName, email, password, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

