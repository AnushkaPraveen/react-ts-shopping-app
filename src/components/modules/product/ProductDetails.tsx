import Classes from './ProductDetails.module.css';
import { ProductType } from "./productTypes";
import { calculateDiscount } from "../../../functions/index";

type ComponentProps = {
    productDetails: ProductType | undefined;
}


const ProductDetails: React.FC<ComponentProps> = ({ productDetails }) => {
    const discountPrice = calculateDiscount(productDetails?.price, productDetails?.discountPercentage);

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
                    <button className={`${Classes.buyNowbtn} btn me-4`}>Buy Now</button>
                    <button className={`${Classes.addCartbtn} btn`}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;