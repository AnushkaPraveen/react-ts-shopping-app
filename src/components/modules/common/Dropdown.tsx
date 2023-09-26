import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { fetchProductsByCategory } from '../../../store/actions/productAction';
import { commonActions } from '../../../store/slices/commonSlice';

const Dropdown = () => {
    const dispatch = useAppDispatch();
    const [selectedcategory, setSelectedCategory] = useState<string>("All categories")
    const categories = useAppSelector((state) => state.product.categories);

    const handleCategory = async (categoryName: string) => {
        dispatch(commonActions.setLoader(true));
        setSelectedCategory(categoryName)
        await dispatch(fetchProductsByCategory(categoryName));
        dispatch(commonActions.setLoader(false));

    }

    return (
        <>
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedcategory}
            </button>
            <ul className="dropdown-menu">
                {categories.map((item, index) => (
                    <li key={index}><a className="dropdown-item" href="#" onClick={() => handleCategory(item)}>{item}</a></li>
                ))
                }
            </ul>
        </>
    )
}
export default Dropdown;