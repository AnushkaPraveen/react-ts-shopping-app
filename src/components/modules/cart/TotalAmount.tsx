import classes from './TotalAmount.module.css';
import CommonClasses from '../../../util/common.module.css'

type ComponentProps = {
    totalAmount: number;
    totalTaxAmount:number;
    handleCheckout:()=>void;
}

const TotalAmount: React.FC<ComponentProps>  = ({totalAmount,totalTaxAmount,handleCheckout}) => {
    return (
        <div className={classes.amountContainer}>
            <div className="row">
                <div className="d-flex justify-content-between">
                    <p>subtotal </p>
                    <p>${totalAmount.toFixed(2)}</p>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                    <p>Sales tax(6.5%)</p>
                    <p>${totalTaxAmount}</p>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                    <p>Total due</p>
                    <p>${totalAmount-totalTaxAmount}</p>
                </div>
                <button className={`${CommonClasses.buttonColor} btn`} onClick={handleCheckout}>Check Out</button>
            </div>
        </div>

    )
}
export default TotalAmount;