
import axios, { AxiosResponse } from 'axios';

type UserResponse = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}

type UserDetails={
    username:string;
    password:string;
}

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

export const Cart = {
    loginUser: (userDetails: UserDetails): Promise<UserResponse> => requests.post('auth/login', userDetails),
};