import axios from 'axios'

const CHECKOUT_URL  = 'http://localhost:8083/checkout/'

class CheckoutService {

    checkoutCart = (orderId)=>{
        return axios.post(CHECKOUT_URL+orderId+'submit')
    }

}

export default new CheckoutService();