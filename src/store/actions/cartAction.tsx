import { productActions } from "../slices/productSlice";
import { Cart } from "../../api/cartApi";
import { useAppSelector, useAppDispatch } from '../hooks';
import { useSelector } from 'react-redux';
import { ProductType } from "../../components/modules/product/productTypes";
//import { ProductApiResponse } from "../../api/responseTypes";
//import { Dispatch } from 'redux';
//const cartProducts = useSelector((state) => state.cart.productsCart);
//console.log("cart action",cartProducts);
type CartItem = {
    id: number | string;
    quantity: number | string;
}
type CartData = {
    userId: number;
    products: CartItem[];
}

export const createProductCart = async (cartProducts: CartData) => {

 

  


    try {
        const productCategoryData = await Cart.createCart(cartProducts);
        console.log(productCategoryData);
        //dispatch(productActions.setCategories(productCategoryData));
    } catch (error) {
        console.log(error);
    }

}