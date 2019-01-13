import * as ActionTypes from '../actions/types';

const defautState = {
    products: [],
    loading: false,
    product: null,
    cartItems: [],
    total: 0,
};
updateTotal = (items) => {
    return items.reduce((total, item) => (total + ((item.product.price * item.quantity) * (100 - item.product.discount) / 100)), 0);
}
const productsReducer = (state = defautState, action) => {
    switch (action.type) {
        //PRODUCTS
        case ActionTypes.GETPRODUCTS_PENDING:
            return {
                ...state,
                loading: true,
                products: []
            };
        case ActionTypes.GETPRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products
            };
        case ActionTypes.GETPRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                products: []
            };
        case ActionTypes.GETPRODUCT_PENDING:
            return {
                ...state,
                loading: true,
                product: null
            };
        case ActionTypes.GETPRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.product
            };
        case ActionTypes.GETPRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                product: null
            };

        //SHOPPING CART
        case ActionTypes.ADDTOCART_SUCCESS:
            var found = [...state.cartItems].find(item => item.product._id === action.id);
            if (found) {
                found.quantity++;
                var total = updateTotal([...state.cartItems]);
                return {
                    ...state,
                    cartItems: [...state.cartItems],
                    total: total
                }
            }
            var cartItems = [...state.cartItems, { product: action.product, quantity: action.quantity }];
            var total = updateTotal(cartItems);
            return {
                ...state,
                cartItems: cartItems,
                total: total
            };

        case ActionTypes.REMOVEFROMCART_SUCCESS:
            var cartItems = [...state.cartItems].filter(e => e.product._id != action.id);
            var total = updateTotal(cartItems);
            return {
                ...state,
                cartItems: cartItems,
                total: total
            };

        default:
            return state;
    }
}
export default productsReducer;  