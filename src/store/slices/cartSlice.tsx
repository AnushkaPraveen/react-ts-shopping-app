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
                //const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.productsCart.push(action.payload);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.productsCart));
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.productsCart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.productsCart.splice(itemIndex, 1);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.productsCart));
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const itemIndex = state.productsCart.findIndex(item => item.id === action.payload);
            console.log(itemIndex);
            if (itemIndex >= 0) {
                state.productsCart[itemIndex].cartQuantity += 1;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.productsCart));
            //console.log(state.productsCart);
            
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const itemIndex = state.productsCart.findIndex(item => item.id === action.payload);
            console.log(itemIndex);
            if (itemIndex >= 0 && state.productsCart[itemIndex].cartQuantity > 1) {
                state.productsCart[itemIndex].cartQuantity -= 1;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.productsCart));
        },
        setQuantity:(state,action)=>{
            const itemIndex = state.productsCart.findIndex(item => item.id === action.payload);
            console.log(itemIndex);
            
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
            localStorage.setItem("totalAmount", JSON.stringify(state.cartTotalAmount));
        },
        getTotalTax: (state) => {
            const tax = (state.cartTotalAmount * 6.5) / 100;
            state.totalTaxAmount = parseFloat(tax.toFixed(2));
            localStorage.setItem("totalTax", JSON.stringify(state.totalTaxAmount));
        },
        checkoutCart: (state, action) => {
            state.checkOut = action.payload;
        },
        clearCart: (state) => {
            state.productsCart = [];
            state.cartTotalAmount = 0;
            state.totalTaxAmount = 0;
            localStorage.removeItem("cartItems");
        }
    }

});
export const cartActions = cartSlice.actions;

export default cartSlice;