import { ProductType } from '../components/modules/product/productTypes';

export type ProductApiResponse = {
    products: ProductType[];
    total: number;
    skip: number;
    limit: number;
};

export type ProductCategoryType = string[]