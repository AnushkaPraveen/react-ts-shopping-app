import Classes from './ProductDetails.module.css';

const ProductDetails = () => {
    return (
        <>
        <div>
            <p className='m-0'>Brand:</p>
           <p className='m-0'>Model:</p>
            <p className='m-0'>Avaliability: Only 2 in Stock</p>
            <h5 className='mt-2'>LG 4K Smart OLED TV</h5>
            <p>Para</p>
            <p className='m-0'>USD(incl.of all taxes):</p>
            <div className="d-flex">
                <h5 className="me-2">$600.72</h5>
                <h5>$600.72</h5>
            </div>
            <div className="d-flex align-items-center">
                <button className={`${Classes.updownbtn}`}>-</button>
                <span className={Classes.displayCount}>1</span>
                <button className={`${Classes.updownbtn} me-5`}>+</button>
                <button className={`${Classes.buyNowbtn} btn me-4`}>Buy Now</button>
                <button className={`${Classes.addCartbtn} btn`}>Add to Cart</button>
            </div> 
            </div>
        </>
    )
}
export default ProductDetails;