import React, { useState } from 'react';
import Classes from './ProductDetailsView.module.css';
import ImageSlider from '../components/modules/product/ImageSlider';
import ProductDetails from '../components/modules/product/ProductDetails';
import Item from '../components/modules/product/Item';

const ProductDetailsView = () => {
    const arr = [1, 2, 3, 4,];
    return (
        <>
            <div className="container mb-5">
                <div className="row mt-5">
                    <div className=" col-lg-6 mt-2">
                        <ImageSlider />
                    </div>
                    <div className=" col-lg-6 mt-4 align-items-center">
                        <ProductDetails />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    {arr.map((num, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <Item />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ProductDetailsView;