import classes from './Item.module.css';
const Item = () => {
    return (
        <>
            <div className='mx-2'>
                <span className="badge bg-secondary position-absolute mt-3 ms-3">New</span>
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className={classes.productItemImage} />
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <div >
                        <span className={classes.productName}>Library Stool Chair</span><br />
                        <span className={classes.productPrice}>$20</span>
                        <span className={classes.productSalePrice}>$20</span>
                    </div>
                    <button className={`${classes.productCartButton} btn`}><i className="bi bi-cart"></i></button>
                </div>

            </div>


        </>
    )

}
export default Item;