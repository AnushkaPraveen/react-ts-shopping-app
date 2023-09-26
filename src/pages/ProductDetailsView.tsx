import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Classes from './ProductDetailsView.module.css';
import ImageSlider from '../components/modules/product/ImageSlider';
import ProductDetails from '../components/modules/product/ProductDetails';
import Item from '../components/modules/product/Item';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const ProductDetailsView = () => {
    let { productId } = useParams();
    const products = useAppSelector((state) => state.product.products);
    const loader = useAppSelector((state) => state.common.loadingState);
    const foundProduct = products?.products.find(product => product.id === (productId ? parseInt(productId) : undefined));

    return (
        <>
            <div className="container mb-5">
                <div className="row mt-5">
                    <div className=" col-lg-6 mt-2">
                        <ImageSlider productImages={foundProduct?.images} productThumbnail={foundProduct?.thumbnail} />
                    </div>
                    <div className=" col-lg-6 mt-4 align-items-center">
                        <ProductDetails productDetails={foundProduct} />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    {/* {arr.map((num, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-12">
                            {/*  <Item /> 
                        </div>
                    ))} */}
                </div>
            </div>
        </>
    )
}
export default ProductDetailsView;