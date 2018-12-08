import * as ActionTypes from '../actions/types';

const defautState = {
  loginUser: false,
  loading: false,
  user: null
};
const loginReducer = (state = defautState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        loginUser: false,
        user: null
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginUser: true,
        user: action.user
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loginUser: false,
        user: null
      };
    default:
      return state;
  }
}
export default loginReducer;  