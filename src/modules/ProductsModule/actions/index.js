import * as ActionTypes from './types';

export const getProducts = () => ({
    type: ActionTypes.PRODUCTS,

});
export const getProduct = (id) => ({
    type: ActionTypes.PRODUCT,
    id: id

});
export const addToCart = (product, quantity) => ({
    type: ActionTypes.ADDTOCART,
    product: product,
    quantity: quantity
});
export const removeFromCart = (id) => ({
    type: ActionTypes.REMOVEFROMCART,
    id: id
});
export const order = (id) => ({
    type: ActionTypes.ORDER,
    id: id
});