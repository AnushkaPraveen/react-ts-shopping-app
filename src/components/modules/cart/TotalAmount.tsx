import classes from './TotalAmount.module.css';
import CommonClasses from '../../../util/common.module.css'
const TotalAmount = () => {
    return (
        <div className={classes.amountContainer}>
            <div className="row">
                <div className="d-flex justify-content-between">
                    <p>subtotal</p>
                    <p>$129.00</p>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                    <p>Sales tax(6.5%)</p>
                    <p>$4.00</p>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                    <p>Total due</p>
                    <p>$129.00</p>
                </div>
                <button className={`${CommonClasses.buttonColor} btn`}>Check Out</button>
            </div>
        </div>

    )
}
export default TotalAmount;