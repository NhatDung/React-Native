import * as ActionTypes from './actions/types';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { Alert } from 'react-native';

function* PRODUCTS(action) {
    try {
        yield put({ type: ActionTypes.GETPRODUCTS_PENDING });
        const payload = yield axios.get('http://localhost:3000/products/');
        yield put({ type: ActionTypes.GETPRODUCTS_SUCCESS, products: payload.data });
    } catch (e) {
        yield put({ type: ActionTypes.GETPRODUCTS_ERROR });
    }
};
function* PRODUCT(action) {
    try {
        yield put({ type: ActionTypes.GETPRODUCT_PENDING });
        const id = action.id;
        const payload = yield axios.get('http://localhost:3000/products/' + id);
        yield put({ type: ActionTypes.GETPRODUCT_SUCCESS, product: payload.data });
    } catch (e) {
        yield put({ type: ActionTypes.GETPRODUCT_ERROR });
    }
};

function* ADDTOCART(action) {
    try {
        yield put({
            type: ActionTypes.ADDTOCART_SUCCESS,
            // Gui tham so qua reducer de xu ly tiep
            product: action.product, quantity: action.quantity, id: action.product._id
        });
        Alert.alert('Message', 'Added to Cart')
    } catch (e) {
    }
};
function* REMOVEFROMCART(action) {
    try {
        yield put({
            type: ActionTypes.REMOVEFROMCART_SUCCESS,
            id: action.id
            // Gui tham so qua reducer de xu ly tiep

        });
    } catch (e) {
    }
};

function* ORDER(action) {
    try {
        yield put({
            type: ActionTypes.ORDER_SUCCESS,
            id: action.id
            // Gui tham so qua reducer de xu ly tiep

        });
    } catch (e) {
    }
};
function* ProductsSagas() {
    yield takeEvery(ActionTypes.PRODUCTS, PRODUCTS);
    yield takeEvery(ActionTypes.PRODUCT, PRODUCT);
    yield takeEvery(ActionTypes.ADDTOCART, ADDTOCART);
    yield takeEvery(ActionTypes.REMOVEFROMCART, REMOVEFROMCART);
}

export default ProductsSagas;