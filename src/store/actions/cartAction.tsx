import { Cart } from "../../api/cartApi";
import { CartData } from "../../api/responseTypes";
import { toast } from "react-toastify";

export const createProductCart = async (cartProducts: CartData) => {
    try {
        const productCategoryData = await Cart.createCart(cartProducts);
        console.log(productCategoryData);
        toast.success("Your puchase has been confirmed",{position:'top-center',theme: "colored",autoClose:3000});
        //dispatch(productActions.setCategories(productCategoryData));
    } catch (error) {
        toast.error("Your puchase has been failed",{position:'top-center',theme: "colored",autoClose:3000});
        console.log(error);
    }
}