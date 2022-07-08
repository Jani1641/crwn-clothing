import axios from 'axios'

const PRODUCTS_URL = 'http://localhost:8081/list'

class ProductService{

    getProducts =  () => {
        return axios.get(PRODUCTS_URL);
    }

    getProductById =  (id) => {
        return axios.get(PRODUCTS_URL+"/"+id);
    }

    deleteProductById = (id) => {
        return axios.delete(PRODUCTS_URL+"/"+id);
    }

    addProduct = (product) => {
        return axios.post(PRODUCTS_URL,product);
    }

}

export default new ProductService();