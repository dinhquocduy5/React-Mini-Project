import {useQuery} from 'react-query'
import axios from 'axios';

function fetchProduct() {
    return axios.get('https://fakestoreapi.com/products?limit=5')
}

export const useProductData = () => {
    useQuery('list-product',fetchProduct)
}

