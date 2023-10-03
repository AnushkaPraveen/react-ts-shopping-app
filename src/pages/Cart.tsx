import CartItem from "../components/modules/cart/CartItem";
import TotalAmount from "../components/modules/cart/TotalAmount";
import { useEffect } from "react";
import Payment from "../components/modules/cart/Payement";
import Classes from './Cart.module.css';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { cartActions } from "../store/slices/cartSlice";

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector((state) => state.cart.productsCart);
    const cartTotalAmount = useAppSelector((state) => state.cart.cartTotalAmount);
    const cartTotalTaxAmount = useAppSelector((state) => state.cart.totalTaxAmount);
    const checkout = useAppSelector((state) => state.cart.checkOut);
    //console.log("total", cartTotalAmount, "tax", cartTotalTaxAmount);


    useEffect(() => {
        dispatch(cartActions.getToatlAmount());
        dispatch(cartActions.getTotalTax());
    }, [cartProducts]);

    const handleCheckout = () => {
        dispatch(cartActions.checkoutCart(true));
    }

    const removeItem = (itemId: number) => {
        dispatch(cartActions.removeItemFromCart(itemId))
    }
    //console.log(cartProducts);
    
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-1g-9 col-md-9 col-sm-12 col-9">
                        {cartProducts.length > 0 ? cartProducts.map((item, index) => (
                            <div className="col justify-content-center" key={index}>
                                <CartItem cartItem={item} removeItemFromCart={removeItem} />
                            </div>
                        )) : <div className="col justify-content-center"><h3 className="text-center">No Items yet</h3></div>}
                        <div className="container">
                            {cartProducts.length > 0 && (<div className={`${Classes.amountContainer} d-flex justify-content-end`}>
                                <TotalAmount totalAmount={cartTotalAmount} totalTaxAmount={cartTotalTaxAmount} handleCheckout={handleCheckout} />
                            </div>)}
                        </div>
                    </div>
                    {checkout && <div className="col-lg-3 d-flex justify-content-center mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                        <Payment />
                    </div>}
                </div>
            </div>
        </>
    )
}
export default Cart;