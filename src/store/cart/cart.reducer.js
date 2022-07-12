import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    loading : false,
    error : null
  };
  
export const cartReducer = (state = CART_INITIAL_STATE, action={}) => {

  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.FETCH_CART_ITEMS_START:
      return {
        ...state,
        loading : true,
        error : null
      };
    case CART_ACTION_TYPES.FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading : false,
        cartItems : payload,
      }
    case CART_ACTION_TYPES.FETCH_CART_ITEMS_ERROR:
      return {
        ...state,
        loading : false,
        error : payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen : payload,
        loading : false,
        error : false,
      };
    default:
      return state;
  }
};
  