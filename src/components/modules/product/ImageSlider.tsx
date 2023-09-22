import React, { useState } from 'react';
import Classes from './ImageSlider.module.css';

const ImageSlider = () => {
    const product = ['https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', 'https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4', 'https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc', 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU']
    const [productImage, setProductImage] = useState<string>(product[0]);
    const [activeThumbnailIndex, setActiveThumbnailIndex] = useState<number>(0);

    const handleThumbnailClick = (image: string, index: number) => {
        setProductImage(image);
        setActiveThumbnailIndex(index);
    };
    return (
        <>
            <div className='row'>
                <div className='col-lg-2 col-md-3 col-4'>
                    {product.map((pro, index) => (
                        <div key={index} className="p-1 mt-1 ">
                            <img src={pro} className={`${index === activeThumbnailIndex ? Classes.activeThumbnail : Classes.thumbnailImage} img`} onClick={() => handleThumbnailClick(pro, index)} />
                        </div>
                    ))}
                </div>
                <div className='col-lg-8 col-md-9 col-8 d-flex justify-content-center'>
                    <img src={productImage} className={`${Classes.mainImage} img-fluid`} />
                </div>
            </div>
        </>
    )
}
export default ImageSlider;