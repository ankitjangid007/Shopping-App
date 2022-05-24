import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, setWishlistReducer } from "./productReducer";


const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    wishlist: setWishlistReducer,
})

export default reducers