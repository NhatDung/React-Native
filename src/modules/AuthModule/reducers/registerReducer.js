import * as ActionTypes from '../actions/types';

const defautState = {
    registerUser: false,
    loading: false
};
const registerReducer = (state = defautState, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_PENDING:
            return {
                ...state,
                loading: true,
                registerUser: false
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                registerUser: true
            };
        case ActionTypes.REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                registerUser: false
            };
        default:
            return state;
    }
}
export default registerReducer;  