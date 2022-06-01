import StoreApi from '../../apis/StoreApi'
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        const response = await StoreApi.get("/products" );
        
        dispatch({type: ActionTypes.FETCH_PRODUCT, payload: response.data})
    }
}

export const fetchProduct = (id) => {
    return async (dispatch, getState) => {
        const response = await StoreApi.get(`/products/${id}`);
        
        dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data})
    }
}

export const removeSelectedProduct = () =>  {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const AddProductToWishlist = (product) => {
    return {
        type: ActionTypes.ADD_TO_WISHLIST,
        payload: product
    }
}

export const removeWishlistedItem = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_WISHLIST,
        payload: id
    }
}

export const addProductToCart = (item) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: item
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id
    }
}