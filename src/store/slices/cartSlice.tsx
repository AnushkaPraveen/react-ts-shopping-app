import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../components/modules/product/productTypes';

type CartState = {
    productsCart: ProductType[],
    cartTotalAmount: number,
    totalTaxAmount: number,
    checkOut: boolean
}
const initialState: CartState = {
    productsCart: [],
    cartTotalAmount: 0,
    totalTaxAmount: 0,
    checkOut: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<ProductType>) => {
            const itemIndex = state.productsCart.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.productsCart[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.productsCart.push(tempProduct);
            }

        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.productsCart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.productsCart.splice(itemIndex, 1);
            }
        },
        getToatlAmount: (state) => {
            let { total, quantity } = state.productsCart.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            //state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        getTotalTax: (state) => {
            const tax = (state.cartTotalAmount * 6.5) / 100;
            state.totalTaxAmount = parseFloat(tax.toFixed(2));
        },
        checkoutCart: (state, action) => {
            state.checkOut = action.payload;
        },
        clearCart: (state, action) => {
            state.productsCart = [];
            state.cartTotalAmount = 0;
            state.totalTaxAmount = 0;
        }
    }

});
export const cartActions = cartSlice.actions;

export default cartSlice;