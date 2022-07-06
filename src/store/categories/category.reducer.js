import { CATAGORIES_ACTION_TYPES } from "./category.types";

export const CATAGORIES_INITIAL_STATE = {
    categories : []  
}

export const categoriesReducer = (state= CATAGORIES_INITIAL_STATE,action={}) =>{
    const {type,payload} =action;
    
    switch(type){
        case CATAGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state,categories: payload
            }
        default :
            return state;
    }

}