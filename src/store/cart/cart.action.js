import CartService from '../../services/CartService';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const orderid = JSON.parse(localStorage.getItem('orderId'));

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const fetchCartItemsStart = () =>{
  return createAction(CART_ACTION_TYPES.FETCH_CART_ITEMS_START);
}

export const fetchCartItemsSuccess = (cartItems) => {
  return createAction(CART_ACTION_TYPES.FETCH_CART_ITEMS_SUCCESS,cartItems);
}

export const fetchCartItemsError = (error) => {
  return createAction(CART_ACTION_TYPES.FETCH_CART_ITEMS_ERROR,console.error)
}

export const fetchCartItemsAsync = () =>async(dispatch) => {
  dispatch(fetchCartItemsStart());
  try{
    const cartItems = await CartService.getCart(orderid);
    dispatch(fetchCartItemsSuccess(cartItems.data['items']));
  }catch(error){
    dispatch(fetchCartItemsError(error));
  }
}

export const addToCartItemsAsync = (prodId,quan=1) => async (dispatch) => {
  dispatch(fetchCartItemsStart());
  try{
    const response = await CartService.addToCart(orderid,prodId,quan);
    const cartItems = await CartService.getCart(orderid);
    dispatch(fetchCartItemsSuccess(cartItems.data['items']));
  }catch(error){
    dispatch(fetchCartItemsError());
  }
}
export const updateCartItemsAsync = (prodId,quan) => async (dispatch) => {
  dispatch(fetchCartItemsStart());
  try{
    const response = await CartService.updateInCart(orderid,prodId,quan);
    const cartItems = await CartService.getCart(orderid);
    dispatch(fetchCartItemsSuccess(cartItems.data['items']));
  }catch(error){
    dispatch(fetchCartItemsError());
  }
}
export const deleteCartItemsAsync = (prodId) => async (dispatch) => {
  dispatch(fetchCartItemsStart());
  try{
    const response = await CartService.deleteItemFromCart(orderid,prodId);
    const cartItems = await CartService.getCart(orderid);
    dispatch(fetchCartItemsSuccess(cartItems.data['items']));
  }catch(error){
    dispatch(fetchCartItemsError());
  }
}

export const deleteCartAsync = () => async (dispatch) =>{
  dispatch(fetchCartItemsStart());
  try{
    const response = await CartService.deleteCart(orderid);
    dispatch(fetchCartItemsSuccess([]));
    localStorage.removeItem('orderId');
  }catch(error){
    dispatch(fetchCartItemsError());
  }
}

// /additem/orderId/productId
// updateItem/orderId/productId?quantity=4
// removeItem/orederId/productId
// clearcart/orderId
// /cartsummary/orderId

//Create API =>response orderId => POST
//Add Item TO Cart =. response 201, empty response  => orderId& productId  => POST METHOD
//Update Quantity in Cart=> 201, Empty Response => orderId, productId,qutity => PUT METHOD
//Remove Item from Cart -=> @)!<> Empty epne => orderId, productId => DELETER
//Clear Cart  =. 201 Emty Response => /orderorderId => DELETE
//getCart => array => orderId => GET
