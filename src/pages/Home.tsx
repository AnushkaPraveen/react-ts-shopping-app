import { useEffect } from "react";
import Item from "../components/modules/product/Item";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchProducts } from '../store/actions/productAction';

const Home = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.products);

    useEffect(() => {
        handleApi();
    }, [])



    const handleApi = () => {
        dispatch(fetchProducts());
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