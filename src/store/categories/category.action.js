import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import ProductService from '../../services/ProductService'

export const fetchCategoriesStart = () => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,error);


export const fetchCategoriesAsync = ()=>async (dispatch)=>{
  dispatch(fetchCategoriesStart());
  try{
    const productsArray = await ProductService.getProducts();
    const products = productsArray.data;
    const categories = [...new Set(products.map(o => o.category))];
    const categoriesArray= categories.map(cat => {
      return {
        title: cat,
        items: products.filter(o => o.category === cat)
      }
	  })
    dispatch(fetchCategoriesSuccess(categoriesArray));
  }catch(error){
    dispatch(fetchCategoriesFailed(error));
  }
      
}