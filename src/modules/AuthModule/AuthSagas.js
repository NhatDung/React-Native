import * as ActionTypes from './actions/types';
import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import NavigationService from '../../navigators/NavigationService';


function* LOGIN(action) {
    try {
        if (action.email.length === 0 || action.password.length === 0) {
            Alert.alert('Notice', 'Email and password can not empty');
            yield put({ type: ActionTypes.LOGIN_ERROR });
        }
        yield put({ type: ActionTypes.LOGIN_PENDING });
        const payload = yield axios.post('http://localhost:3000/users/login',
            { email: action.email, password: action.password });
        if (payload.data.success === true) {
            yield put({ type: ActionTypes.LOGIN_SUCCESS, user: payload.data.result });
            Alert.alert('Notice', 'Login success!');
            NavigationService.navigate('index')
        } else {
            yield put({ type: ActionTypes.LOGIN_ERROR });
            Alert.alert('Notice', 'NOT OK');
        }

    } catch (e) {
        yield put({ type: ActionTypes.LOGIN_ERROR, message: 'Login failed' });
    }
};

function* REGISTER(action) {
    try {
        if (action.fullName.length === 0 || action.email.length === 0
            || action.password.length === 0 || action.phone.length === 0) {
            Alert.alert('Notice', 'You must enter your full info');
            yield put({ type: ActionTypes.REGISTER_ERROR });
        }
        yield put({ type: ActionTypes.REGISTER_PENDING });
        const payload = yield axios.post('http://localhost:3000/users/register',
            {
                fullName: action.fullName,
                email: action.email,
                password: action.password,
                phone: action.phone
            });
        if (payload.data.success === true) {
            yield put({ type: ActionTypes.REGISTER_SUCCESS, user: payload.data });
            Alert.alert('Notice', 'OK');
        } else {
            yield put({ type: ActionTypes.REGISTER_ERROR });
            Alert.alert('Notice', 'NOT OK, email exist');
        }

    } catch (e) {
        yield put({ type: ActionTypes.REGISTER_ERROR, message: 'Register failed' });
    }
}

function* AuthSagas() {
    yield takeEvery(ActionTypes.LOGIN, LOGIN);
    yield takeEvery(ActionTypes.REGISTER, REGISTER);
}

export default AuthSagas;