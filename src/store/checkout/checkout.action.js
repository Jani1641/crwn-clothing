import { CHECKOUT_ACTION_TYPES } from "./checkout.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import CheckoutService from "../../services/CheckoutService";
import { fetchCartItemsSuccess } from "../cart/cart.action";
import CartService from '../../services/CartService'

export const fetchCheckoutStart = () => 
    createAction(CHECKOUT_ACTION_TYPES.FETCH_CHECKOUT_START);

export const fetchCheckoutError = (payload) => 
    createAction(CHECKOUT_ACTION_TYPES.FETCH_CHECKOUT_ERROR,payload);

export const fetchCheckoutAddress = (payload) => 
    createAction(CHECKOUT_ACTION_TYPES.FETCH_CHECKOUT_ADDRESS,payload);

export const fetchRecentOrders = (payload) => 
    createAction(CHECKOUT_ACTION_TYPES.FETCH_RECENT_ITEMS,payload);

export const fetchAddressAsync = (address,email) => async (dispatch) => {
    dispatch(fetchCheckoutStart());
    try{
        const orderid = JSON.parse(localStorage.getItem('orderId'));
        createAction(CHECKOUT_ACTION_TYPES.FETCH_CHECKOUT_ADDRESS,address);
        await CheckoutService.checkoutCart(orderid,address,email);
        dispatch(fetchCartItemsSuccess([]));
        localStorage.removeItem('orderId')
        CartService.createCart()
        .then((response)=>{
        localStorage.setItem('orderId',JSON.stringify(response.data['id']));
        dispatch(fetchRecentItemsAsync(email));
      })
    }catch(error){
        dispatch(fetchCheckoutError(error));
    }
}

export const fetchRecentItemsAsync = (email) =>async(dispatch) => {
    dispatch(fetchCheckoutStart());
    try{
        if(email == null) dispatch(fetchRecentOrders([]));
        else {
            const recentItems = await CheckoutService.recentFetchItems(email);
            debugger
            dispatch(fetchRecentOrders(recentItems.data));
        }
    }catch(error){
        dispatch(fetchCheckoutError(error));
    }
}
