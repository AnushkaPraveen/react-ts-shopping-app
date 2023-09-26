import { Link } from "react-router-dom";
import classes from './Item.module.css';
import { ProductType } from "./productTypes";

type ComponentProps = {
    product: ProductType;
}

const Item: React.FC<ComponentProps> = ({ product }) => {

    return (
        <>
            <div className='mx-2 my-5'>
                <Link to={`/services/${product.id}`}>
                <span className="badge bg-secondary position-absolute mt-3 ms-3">New</span>
                <img src={product.thumbnail} className={classes.productItemImage}/>
                </Link>
                
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <div >
                        <span className={classes.productName}>{product.title}</span><br />
                        <span className={classes.productPrice}>${product.price}</span>
                        <span className={classes.productSalePrice}>$20</span>
                    </div>
                    <button className={`${classes.productCartButton} btn`}><i className="bi bi-cart"></i></button>
                </div>
            </div>
        </>
    )

}
export default Item;