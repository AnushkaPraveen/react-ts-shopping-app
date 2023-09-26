import { useEffect, useState } from "react";
import Item from "../components/modules/product/Item";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchProducts, fetchProductCategory, fetchProductsByCategory } from '../store/actions/productAction';
import { commonActions } from '../store/slices/commonSlice';
import Loader from "../components/modules/common/Loader";

const Home = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.products);
    const loader = useAppSelector((state) => state.common.loadingState);
    const [itemsPerPage, setItemsPerPage] = useState<number>(16);
    const [page, setPage] = useState<number>(1);
    const [loadingMore, setLoadingMore] = useState(false);


    const handleApi = async () => {
        dispatch(commonActions.setLoader(true));
        await dispatch(fetchProducts());
        dispatch(commonActions.setLoader(false));
    }
    const handleFetchProductCategory = async () => {
        await dispatch(fetchProductCategory());
    }

    const handleScroll = () => {
        setLoadingMore(true);
        if (

            window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
        ) {
            // User has scrolled to the bottom, load more products

            setPage(page + 1); // Increment the page number to load the next page     
            setItemsPerPage(itemsPerPage + 16);
            setLoadingMore(false);

        }
    };

    useEffect(() => {
        handleApi();
    }, [])

    useEffect(() => {
        handleFetchProductCategory();
    }, [])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page]);




    if (loader) {
        return <Loader />
    }

    return (
        <>
            <div className="container">
                {products?.products.length ? <div className="row">
                    {products?.products.slice(0, itemsPerPage).map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 col-6" key={index}>
                            <Item product={item} />
                        </div>
                    ))}
                </div> : <div className="d-flex justify-content-center my-5">
                    <h3>No Available Any Products</h3>
                </div>}
                {loadingMore && <p>Loading..</p>}
            </div>
        </>
    )
}
export default Home;