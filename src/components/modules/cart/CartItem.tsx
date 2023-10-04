import { useState } from "react";
import classes from './CartItem.module.css';
import { ProductType } from "../product/productTypes";
import Counter from '../product/counter';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { cartActions } from '../../../store/slices/cartSlice';

type ComponentProps = {
    cartItem: ProductType;
    removeItemFromCart:(itemId:number)=>void;
}

const CartItem: React.FC<ComponentProps> = ({ cartItem,removeItemFromCart }) => {
    const [countValue, setCountValue] = useState<number>(cartItem.cartQuantity);
    const dispatch = useAppDispatch();
    const priceOfItems = cartItem.price * cartItem.cartQuantity;

    // Callback function to update countValue
    const handleIncreaseQuantitiy = (newCount:number) => {
        setCountValue(newCount);
        dispatch(cartActions.incrementQuantity(cartItem.id));
    };
    const handleDecreaseQuantitiy = (newCount:number) => {
        setCountValue(newCount);
        dispatch(cartActions.decrementQuantity(cartItem.id));
    };


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
                            <p className='me-2'>qty</p>
                            <Counter count={countValue} increaseQuantity={handleIncreaseQuantitiy} decreaseQuantity={handleDecreaseQuantitiy}/>
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