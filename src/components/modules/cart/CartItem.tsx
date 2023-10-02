import classes from './CartItem.module.css';
import { ProductType } from "../product/productTypes";

type ComponentProps = {
    cartItem: ProductType;
    removeItemFromCart:(itemId:number)=>void;
}

const CartItem: React.FC<ComponentProps> = ({ cartItem,removeItemFromCart }) => {
    const priceOfItems = cartItem.price * cartItem.cartQuantity;
    return (
        <div className='row my-2'>
            <div className='col d-flex justify-content-end align-items-center'>
                <img src={cartItem.thumbnail} className={classes.productImage} />
            </div>
            <div className='col d-flex justify-content-start '>
                <div className='row'>
                    <div className='col'>
                        <p className='mb-0'>{cartItem.title}</p>
                        <div className='d-flex align-items-center'>
                            <p>qty</p>
                            <select className="form-select form-select-sm ms-2">
                                <option selected value={cartItem.cartQuantity}>{cartItem.cartQuantity}</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <i className=" ms-4 bi bi-trash" onClick={()=>removeItemFromCart(cartItem.id)}></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='col d-flex justify-content-center align-items-center'>
                <div>
                    <p className='mb-1'>${priceOfItems.toFixed(2)}</p>
                    {cartItem.cartQuantity > 1 && <p className={classes.eachItemPrice}>${cartItem.price.toFixed(2)} each</p>}
                </div>
                
            </div>
        </div>
    )
}
export default CartItem;