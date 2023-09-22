import Item from "../components/modules/product/Item";
import { useAppSelector, useAppDispatch } from '../store/hooks';

import { fetchProducts } from '../store/actions/productAction';

const Home = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.products);

    const handleApi = () => {
        dispatch(fetchProducts());
    }
    return (
        <>
            <button onClick={handleApi}>check</button>
            <div className="container">
                {products?.products ? <div className="row">
                    {products?.products.map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 col-6" key={index}>
                            <Item product={item} />
                        </div>
                    ))}
                </div> : <p>No any Data to display</p>}
            </div>


        </>
    )
}
export default Home;