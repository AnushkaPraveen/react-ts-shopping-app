import { Link } from "react-router-dom";
import Classes from './ProductDetails.module.css';
import { ProductType } from "./productTypes";
import { calculateDiscount } from "../../../functions/index";
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { cartActions } from '../../../store/slices/cartSlice';

type ComponentProps = {
    productDetails: ProductType ;
}


const ProductDetails: React.FC<ComponentProps> = ({ productDetails }) => {
    const dispatch = useAppDispatch();
    const discountPrice = calculateDiscount(productDetails?.price, productDetails?.discountPercentage);

    const handleCart = () => {
        dispatch(cartActions.addItemToCart(productDetails));
    }


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
                    <button className={`${Classes.updownbtn}`}>-</button>
                    <span className={Classes.displayCount}>1</span>
                    <button className={`${Classes.updownbtn} me-5`}>+</button>
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