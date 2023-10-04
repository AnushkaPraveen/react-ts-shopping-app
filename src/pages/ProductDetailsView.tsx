import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Classes from './ProductDetailsView.module.css';
import ImageSlider from '../components/modules/product/ImageSlider';
import ProductDetails from '../components/modules/product/ProductDetails';
import Item from '../components/modules/product/Item';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchProductsByCategory } from '../store/actions/productAction';

const ProductDetailsView = () => {
    let { productId } = useParams();
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.products);
    const loader = useAppSelector((state) => state.common.loadingState);
    const foundProduct = products?.products.find(product => product.id === (productId ? parseInt(productId) : undefined));

    const getItems = async () => {
        try {
            if (foundProduct) {
                await dispatch(fetchProductsByCategory(foundProduct.category));
            } else {
                console.log("No product found.");
            }

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <>
            <div className="container mb-5">
                <div className="row mt-5">
                    <div className=" col-lg-6 mt-2">
                        <ImageSlider productImages={foundProduct?.images} productThumbnail={foundProduct?.thumbnail} />
                    </div>
                    <div className=" col-lg-6 mt-4 align-items-center">
                        {foundProduct ? (
                            <ProductDetails productDetails={foundProduct} />
                        ) : (
                            <p>No product found.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    {products?.products.slice(0, 4).map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <Item product={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ProductDetailsView;