import React, { useState } from 'react';
import Classes from './ProductDetails.module.css';

const ProductDetails = () => {
    const product = ['https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', 'https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4', 'https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc', 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU']
    const [productImage, setProductImage] = useState<string>(product[0]);
    const [activeThumbnailIndex, setActiveThumbnailIndex] = useState<number>(0);

    const handleThumbnailClick = (image: string, index: number) => {
        setProductImage(image);
        setActiveThumbnailIndex(index);
    };

    return (
        <>
            <div className="container mb-5">
                <div className="row mt-5">
                    <div className="col-lg-2 col-md-3 col-4 mt-2">
                        {product.map((pro, index) => (
                            <div key={index} className="p-1 mt-1 ">
                                <img src={pro} className={`${index === activeThumbnailIndex ? Classes.activeThumbnail : Classes.thumbnailImage} img`} onClick={() => handleThumbnailClick(pro, index)} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-5 col-md-6 col-8 d-flex justify-content-start align-items-center">
                        <img src={productImage} className={`${Classes.mainImage} img-fluid`} />
                    </div>
                    <div className="col-lg-5 col-md-9 col-12 mt-4 align-items-center">
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
                </div>

            </div>
        </>
    )
}
export default ProductDetails;