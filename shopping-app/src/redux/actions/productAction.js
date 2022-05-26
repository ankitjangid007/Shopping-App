import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
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
        paylaod: item
    }
}

export const removeFromCart = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        paylaod: id
    }
}