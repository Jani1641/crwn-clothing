import axios from 'axios'

const CARTS_URL = 'http://localhost:8082/carts'

class CartService{
    
    createCart = ()=>{
        return axios.post(CARTS_URL,{});
    }

    addToCart = (orderId,product) => {
        return axios.put(CARTS_URL+'/'+orderId+'products',product)
    }

    deleteItemFromCart = (orderId,productId) => {
        return axios.delete(CARTS_URL+"/"+orderId+'/products/'+productId);
    }



    

    updateInCart = (orderId,productId,quantity) => {
        return axios.put(CARTS_URL+'/'+orderId+'/products/'+productId,quantity)
    }

    getCart = (orderId) => {
        return axios.get(CARTS_URL+'/'+orderId);
    }

    deleteCart = (orderId) => {
        return axios.delete(CARTS_URL+"/"+orderId);
    }

}

export default new CartService();