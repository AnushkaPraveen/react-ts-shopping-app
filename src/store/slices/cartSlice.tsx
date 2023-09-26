import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../components/modules/product/productTypes';

type CartState = {
    categories: string[];
    productsCart: ProductType[]
}
const initialState: CartState = {
    categories: [],
    productsCart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<ProductType>) => {
            state.productsCart.push(action.payload);
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.productsCart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.productsCart.splice(itemIndex, 1);
            }
        },
    }

});
export const cartActions = cartSlice.actions;

export default cartSlice;