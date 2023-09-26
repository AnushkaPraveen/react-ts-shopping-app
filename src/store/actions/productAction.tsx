import { productActions } from "../slices/productSlice";
import { Product} from "../../api/productApi";
import { ProductApiResponse} from "../../api/responseTypes";
import { Dispatch } from 'redux';



export const fetchProductCategory = () => {
    return async (dispatch: Dispatch) => {
        try {
            const productCategoryData = await Product.getCategory();
            //console.log(productCategoryData);
            dispatch(productActions.setCategories(productCategoryData));
        } catch (error) {
            console.log(error);

        }

    }

}

export const fetchProducts = () => {
    return async (dispatch: Dispatch) => {
        try {
            const productsData: ProductApiResponse= await Product.getProducts();
            //console.log(productsData);
            dispatch(productActions.setProducts(productsData));
        } catch (error) {
            console.log(error);

        }

    }

}


export const fetchProductsByCategory = (category:string) => {
    return async (dispatch: Dispatch) => {
        try {
            const productsData: ProductApiResponse= await Product.getProductListByCategory(category);
            //console.log(productsData);
            dispatch(productActions.setProducts(productsData));
        } catch (error) {
            console.log(error);

        }

    }

}


export const fetchSearchProduct = (searchTerm:string) => {
    return async (dispatch: Dispatch) => {
        try {
            const productsData: ProductApiResponse= await Product.getSearchProduct(searchTerm);
            //console.log(productsData);
            dispatch(productActions.setProducts(productsData));
        } catch (error) {
            console.log(error);

        }

    }

}
