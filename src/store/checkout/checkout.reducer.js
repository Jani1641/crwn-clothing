import { CHECKOUT_ACTION_TYPES } from "./checkout.types";

export const CHECKOUT_INITIAL_STATE = {
    address:'',
    isLoading : false,
    error : null,
    checkoutItems : [],
}

export const checkoutReducer = (
    state=CHECKOUT_INITIAL_STATE,
    action={}
    ) => {
        const {type,payload} = action;
        switch(type){
            case CHECKOUT_ACTION_TYPES.FETCH_CHECKOUT_START:
                return {
                    ...state,
                    isLoading:true,
                    error : null,
                }
            case CHECKOUT_ACTION_TYPES.FETCH_CHECKOUT_ERROR:
                return{
                    ...state,
                    isLoading:false,
                    error : payload
                }
            case CHECKOUT_ACTION_TYPES.FETCH_CHECKOUT_ADDRESS:
                return{
                    ...state,
                    isLoading:false,
                    address : payload,
                }
            case CHECKOUT_ACTION_TYPES.FETCH_RECENT_ITEMS:
                return{
                    ...state,
                    isLoading:false,
                    checkoutItems:payload,
                    error:null,
                }
            default:
                return state;

        }
}