import axios, { AxiosResponse } from 'axios';
import { UserDetails,UserResponse } from './responseTypes';


const instance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

export const User = {
    loginUser: (userDetails: UserDetails): Promise<UserResponse> => requests.post('auth/login', userDetails),
    getUserDetails:(userId:number):Promise<any>=>requests.get(`users/${userId}`)
};