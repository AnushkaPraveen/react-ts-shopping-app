import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductApiResponse } from '../../api/responseTypes';

type ProductState = {
    categories: string[];
    products: ProductApiResponse|null;
}

const initialState: ProductState = {
    categories: [],
    products: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
        setProducts: (state, action: PayloadAction<ProductApiResponse>) => {
            state.products = action.payload;

        }
    }

});
export const productActions = productSlice.actions;

export default productSlice;