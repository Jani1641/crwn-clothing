import axios from 'axios'

const PRODUCTS_URL = 'http://localhost:8081/list'

class ProductService{

    getProducts =  () => {
        return axios.get(PRODUCTS_URL)
    }

    getProductById =  () => {

    }

    deleteProductById =  () => {

    }


}

export default new ProductService();