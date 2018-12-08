import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';


import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import AuthSagas from '../modules/AuthModule/AuthSagas';
import ProductsSagas from '../modules/ProductsModule/ProductsSagas';

const sagaMiddleware = createSagaMiddleware();

const middewares = [
    // SAGA
    sagaMiddleware,
];

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middewares))
    );
    sagaMiddleware.run(AuthSagas);
    sagaMiddleware.run(ProductsSagas);
    return store;
}