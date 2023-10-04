import { ProductType } from '../components/modules/product/productTypes';

export type ProductApiResponse = {
    products: ProductType[];
    total: number;
    skip: number;
    limit: number;
};

export type ProductCategoryType = string[]

export type CartItem = {
    id: number | string;
    quantity: number | string;
}
export type CartData = {
    userId: number;
    products: CartItem[];
}
export type ProductItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
}

export type CartResponse = {
    id: number;
    products: ProductItem[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}


export type UserResponse = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}

export type UserDetails = {
    username: string;
    password: string;
}

export type UserState = {
    user: UserResponse | null;
}
