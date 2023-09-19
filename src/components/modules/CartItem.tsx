import classes from './CartItem.module.css';

const CartItem = () => {
    return (
        <div className='row my-2'>
            <div className='col d-flex justify-content-end align-items-center'>
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className={classes.productImage} />
            </div>
            <div className='col d-flex justify-content-start '>
                <div className='row'>
                    <div className='col'>
                        <p className='mb-0'>Item Name</p>
                        <div className='d-flex align-items-center'>
                            <p>qty</p>
                            <select className="form-select form-select-sm ms-2">
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col d-flex justify-content-center align-items-center'>
                <div>
                    <p className='mb-1'>$65.00</p>
                    <p className={classes.eachItemPrice}>$32.00 each</p>
                </div>
            </div>
        </div>
    )
}
export default CartItem;