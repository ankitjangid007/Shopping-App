import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, setWishlistReducer, setCartItemReducer } from "./productReducer";


const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    wishlist: setWishlistReducer,
    cart: setCartItemReducer,
})

export default reducers