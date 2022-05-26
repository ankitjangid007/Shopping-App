import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: []
}


const productReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ActionTypes.SET_PRODUCTS:
        return {
            ...state,
            products: payload
        }
    default: 
        return state
  }
}

const selectedProductReducer = (state={}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state, 
                ...payload
            }
            
        case ActionTypes.REMOVE_SELECTED_PRODUCT: 
            return {}

        default:
            return state
    }
}


const setWishlistReducer = (state={items: []}, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_TO_WISHLIST:
            let itemExists = state.items.some(element => {
                if(element.id === payload.id) {
                    return true
                }
                return false
            })
            let cartItems = state.items
            let newItem = cartItems.slice()

            if(itemExists) {
                newItem = newItem.filter(item => item !== payload);
            }
            else {
                newItem.push(payload);
            }

            return {
                ...state,
                items: newItem
            }
        
        case ActionTypes.REMOVE_FROM_WISHLIST: 
            return {
                ...state,
                items: state.items.filter(item => item.id !== payload)
            }

        default:
            return state
    }
}

const setCartItemReducer = (state={cartItem: []}, {type, payload}) => {
    console.log(payload)
    switch(type) {
        case ActionTypes.ADD_TO_CART : 
            return {
                ...state,
                cartItem : [...state.cartItem, payload]
            }
        default: return state
    }
}

export { productReducer, selectedProductReducer, setWishlistReducer, setCartItemReducer }