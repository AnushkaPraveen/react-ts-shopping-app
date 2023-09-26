import CartItem from "../components/modules/cart/CartItem";
import TotalAmount from "../components/modules/cart/TotalAmount";
import Payment from "../components/modules/cart/Payement";
import Classes from './Cart.module.css';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector((state) => state.cart.productsCart);
    const arr = [1, 2, 3];
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-1g-9 col-md-9 col-sm-12 col-9">
                        {cartProducts.map((item, index) => (
                            <div className="col justify-content-center" key={index}>
                                <CartItem cartItem={item}/>
                            </div>
                        ))}
                        <div className="container">
                            <div className={`${Classes.amountContainer} d-flex justify-content-end`}>
                                <TotalAmount />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                        <Payment />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;