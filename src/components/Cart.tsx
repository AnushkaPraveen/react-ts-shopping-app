import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";
import Classes from './Cart.module.css';

const Cart = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <div className="container">
                {arr.map((num, index) => (
                    <div className="col justify-content-center" key={index}>
                        <CartItem />
                    </div>
                ))}
            </div>
            <div className="continer">
                <div className={`${Classes.amountContainer} d-flex justify-content-end`}>
                <TotalAmount/>
                </div>
            
            </div>
            
            
        </>
    )
}
export default Cart;