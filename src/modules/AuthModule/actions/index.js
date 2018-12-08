import * as ActionTypes from './types';

export const loginAction = (email, password) => ({
    type: ActionTypes.LOGIN,
    email: email,
    password: password
});

export const registerAction = (fullName, email, password, phone) => ({
    type: ActionTypes.REGISTER,
    fullName: fullName,
    email: email,
    password: password,
    phone: phone
});