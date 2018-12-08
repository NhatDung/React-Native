import { combineReducers } from 'redux';
import loginReducer from '../modules/AuthModule/reducers/loginReducer';
import registerReducer from '../modules/AuthModule/reducers/registerReducer';
import productsReducer from '../modules/ProductsModule/reducers/productsReducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  productsReducer,
})

export default rootReducer;