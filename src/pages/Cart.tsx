import { useNavigate } from 'react-router-dom';
import CartItem from "../components/modules/cart/CartItem";
import TotalAmount from "../components/modules/cart/TotalAmount";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Payment from "../components/modules/cart/Payement";
import Classes from './Cart.module.css';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { cartActions } from "../store/slices/cartSlice";
import { ProductType } from "../components/modules/product/productTypes";

const Cart = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cartProducts = useAppSelector((state) => state.cart.productsCart);
    const cartTotalAmount = useAppSelector((state) => state.cart.cartTotalAmount);
    const cartTotalTaxAmount = useAppSelector((state) => state.cart.totalTaxAmount);
    const checkout = useAppSelector((state) => state.cart.checkOut);
    const user = JSON.parse(localStorage.getItem('user') as string);
    //const cartProducts:ProductType[] = JSON.parse(localStorage.getItem('cartItems') as string);
    //const cartTotalAmount:number = JSON.parse(localStorage.getItem('totalAmount') as string);
    //const cartTotalTaxAmount:number = JSON.parse(localStorage.getItem('totalTax') as string);
    console.log(cartProducts);
    

    useEffect(() => {
        dispatch(cartActions.getToatlAmount());
        dispatch(cartActions.getTotalTax());
    }, [cartProducts]);

    const handleCheckout = () => {
        if (user) {
            dispatch(cartActions.checkoutCart(true));
            console.log("with user");
        } else {
            dispatch(cartActions.checkoutCart(false));
            navigate("/login");
            console.log("without user");
        }
    }

    const removeItem = (itemId: number) => {
        dispatch(cartActions.removeItemFromCart(itemId))
        toast.success("Product removed from cart", { position: 'top-center', theme: "colored", });
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-1g-9 col-md-9 col-sm-12 col-9">
                        {cartProducts.length > 0 ? cartProducts.map((item, index) => (
                            <div className="col justify-content-center" key={index}>
                                <CartItem cartItem={item} removeItemFromCart={removeItem} />
                            </div>
                        )) : <div className="col text-center"><h3 className="text-center">No Items yet</h3></div>}
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