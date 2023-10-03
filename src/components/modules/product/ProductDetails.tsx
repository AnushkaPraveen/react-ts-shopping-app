import { Link } from "react-router-dom";
import Counter from "./counter";
import { useState } from "react";
import Classes from './ProductDetails.module.css';
import { ProductType } from "./productTypes";
import { calculateDiscount } from "../../../functions/index";
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { cartActions } from '../../../store/slices/cartSlice';

type ComponentProps = {
    productDetails: ProductType;
}


const ProductDetails: React.FC<ComponentProps> = ({ productDetails }) => {
    const [countValue, setCountValue] = useState<number>(1);
    const dispatch = useAppDispatch();
    const discountPrice = calculateDiscount(productDetails?.price, productDetails?.discountPercentage);

    const handleCart = () => {
        const tempProductDetails = { ...productDetails, cartQuantity: countValue };
        dispatch(cartActions.addItemToCart(tempProductDetails));
    }

    const handleIncreaseQuantitiy = (newCount: number) => {
        setCountValue(newCount);
        //dispatch(cartActions.incrementQuantity(cartItem.id));
    };
    const handleDecreaseQuantitiy = (newCount: number) => {
        setCountValue(newCount);
        //dispatch(cartActions.decrementQuantity(cartItem.id));
    };



    return (
        <>
            <div>
                <p className='m-0'>Brand: {productDetails?.brand}</p>
                <p className='m-0'>Model:</p>
                <p className='m-0'>Avaliability: Only {productDetails?.stock} in Stock</p>
                <h5 className='mt-2'>{productDetails?.title}</h5>
                <p>{productDetails?.description}</p>
                <p className='m-0'>USD(incl.of all taxes):</p>
                <div className="d-flex">
                    <h5 className="me-2">${discountPrice}</h5>
                    <h6 className={Classes.productPrePrice}>${productDetails?.price}</h6>
                </div>
                <div className="d-flex align-items-center">
                    <Counter count={countValue} increaseQuantity={handleIncreaseQuantitiy} decreaseQuantity={handleDecreaseQuantitiy} />
                    {/* <button className={`${Classes.updownbtn}`}>-</button>
                    <span className={Classes.displayCount}>1</span>
                    <button className={`${Classes.updownbtn} me-5`}>+</button> */}
                    <Link to='/cart'>
                        <button className={`${Classes.buyNowbtn} btn me-4`} onClick={handleCart}>Buy Now</button>
                    </Link>

                    <button className={`${Classes.addCartbtn} btn`} onClick={handleCart}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;