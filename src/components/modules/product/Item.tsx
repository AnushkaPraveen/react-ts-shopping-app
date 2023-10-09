import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import classes from './Item.module.css';
import { ProductType } from "./productTypes";
import { cartActions } from '../../../store/slices/cartSlice';
import { toast } from "react-toastify";

type ComponentProps = {
    product: ProductType;
}

const Item: React.FC<ComponentProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.cart.productsCart);
    //console.log(products);


    const handleCart = () => {
        const tempProductDetails = { ...product, cartQuantity: 1 };
        dispatch(cartActions.addItemToCart(tempProductDetails));
        toast.success("Product has been added to the cart",{position:'top-center',theme: "colored",autoClose:1000});
    }

    return (
        <>
            <div className='mx-2 my-5'>
                <Link to={`/services/${product.id}`}>
                    <span className="badge bg-secondary position-absolute mt-3 ms-3">New</span>
                    <img src={product.thumbnail} className={classes.productItemImage} />
                </Link>

                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <div >
                        <span className={classes.productName}>{product.title}</span><br />
                        <span className={classes.productPrice}>${product.price}</span>
                        <span className={classes.productSalePrice}>$20</span>
                    </div>
                    <button className={`${classes.productCartButton} btn`} onClick={handleCart}><i className="bi bi-cart"></i></button>
                </div>
            </div>
        </>
    )

}
export default Item;