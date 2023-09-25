import { useEffect } from "react";
import Item from "../components/modules/product/Item";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchProducts, fetchProductCategory } from '../store/actions/productAction';
import { commonActions } from '../store/slices/commonSlice';
import Loader from "../components/modules/common/Loader";

const Home = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.products);
    const loader = useAppSelector((state) => state.common.loadingState);
    console.log("staet", loader);

    const handleApi = async () => {
        dispatch(commonActions.setLoader(true));
        await dispatch(fetchProducts());
        dispatch(commonActions.setLoader(false));
    }
    const handleFetchProductCategory = async () => {
        await dispatch(fetchProductCategory());
    }

    useEffect(() => {
        handleApi();
    }, [])

    useEffect(() => {
        handleFetchProductCategory();
    }, [])




    if (loader) {
        return <Loader />
    }

    return (
        <>
            <div className="container">
                {products?.products ? <div className="row">
                    {products?.products.map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 col-6" key={index}>
                            <Item product={item} />
                        </div>
                    ))}
                </div> : <div className="d-flex justify-content-center my-5">
                    <h3>No Available Any Products</h3>
                </div>}
            </div>
        </>
    )
}
export default Home;