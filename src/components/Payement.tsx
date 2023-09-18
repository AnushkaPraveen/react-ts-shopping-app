import Classes from './Payment.module.css';
import CommonClasses from '../util/common.module.css';

const Payment = () => {
    return (
        <div className={Classes.paymentContainer}>
            <p className='d-flex justify-content-center h5'>Pay with Card</p>
            <hr />
            <div className="row">
                <label className='mb-2'>Country or region</label><br />
                <div className="col">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="1234 1234 1234 1234"
                        />
                        <span className="input-group-text">
                            <i className="bi bi-credit-card-fill"></i>
                        </span>
                    </div>

                    <div className="d-flex mb-3">
                        <input type="text" className="form-control" placeholder="MM/YY" />
                        <input type="text" className="form-control" placeholder="CVC" />
                    </div>
                    <div className="mb-4">
                        <label className='mb-2'>Name on card</label><br />
                        <input type="text" className="form-control" />
                    </div>
                    <input type="text" className="form-control mb-3" placeholder="Delivery address" />
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            Use Current Address
                        </label>
                    </div>
                    <input type="text" className="form-control mb-3" placeholder="Remarks" />
                </div>
                <button className={`${CommonClasses.buttonColor} btn`}>Pay $133.32</button>
            </div>
        </div>
    )
}
export default Payment;