import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";
import Payment from "./Payement";
import Classes from './Cart.module.css';

const Cart = () => {
    const arr = [1, 2, 3];
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-1g-9 col-md-9 col-sm-12 col-9">
                        {arr.map((num, index) => (
                            <div className="col justify-content-center" key={index}>
                                <CartItem />
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