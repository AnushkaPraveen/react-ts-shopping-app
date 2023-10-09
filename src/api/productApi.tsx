
import axios, { AxiosResponse } from 'axios';
import { ProductApiResponse,ProductCategoryType } from './responseTypes';

const instance = axios.create({
  baseURL: 'https://dummyjson.com/products',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Product = {
  getProducts: (): Promise<ProductApiResponse> => requests.get(`?limit=100&skip=0`),
  getCategory: (): Promise<ProductCategoryType> => requests.get('categories'),
  getProductListByCategory: (category:string): Promise<ProductApiResponse> => requests.get(`category/${category}`),
  getSearchProduct: (searchTerm:string): Promise<ProductApiResponse> => requests.get(`search?q=${searchTerm}`),
};