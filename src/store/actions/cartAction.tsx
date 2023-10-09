import { Cart } from "../../api/cartApi";
import { CartData } from "../../api/responseTypes";
import { cartActions } from "../slices/cartSlice";
import { toast } from "react-toastify";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createProductCart = createAsyncThunk(
    'productCart',
    async (cartProducts: CartData, thunkAPI) => {
        try {
            const productCategoryData = await Cart.createCart(cartProducts);
            console.log(productCategoryData);
            toast.success("Your puchase has been confirmed", { position: 'top-center', theme: "colored", autoClose: 3000 });
            thunkAPI.dispatch(cartActions.clearCart());
        } catch (error) {
            toast.error("Your puchase has been failed", { position: 'top-center', theme: "colored", autoClose: 3000 });
            console.log(error);
        }
    }
)