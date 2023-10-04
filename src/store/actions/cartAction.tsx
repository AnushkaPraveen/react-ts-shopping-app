import { Cart } from "../../api/cartApi";
import { CartData } from "../../api/responseTypes";

export const createProductCart = async (cartProducts: CartData) => {
    try {
        const productCategoryData = await Cart.createCart(cartProducts);
        console.log(productCategoryData);
        //dispatch(productActions.setCategories(productCategoryData));
    } catch (error) {
        console.log(error);
    }
}