
import axios, { AxiosResponse } from 'axios';
//import { ProductType } from '../components/modules/product/productTypes';
import { CartData,CartResponse } from './responseTypes';


const instance = axios.create({
    baseURL: 'https://dummyjson.com/carts',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Cart = {
    createCart: (items: CartData): Promise<CartResponse> => requests.post('add', items),
};