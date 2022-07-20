import axios from 'axios'

const CHECKOUT_URL  = 'http://localhost:8083/checkout/'

class CheckoutService {

    checkoutCart = (orderId,address,email)=>{
        return axios.post(`${CHECKOUT_URL}${orderId}/submit`,{address:`${address}`,email:`${email}`});
    }

    recentFetchItems = (email)=>{
        return axios.get(`${CHECKOUT_URL}${email}`);
    }

}

export default new CheckoutService();