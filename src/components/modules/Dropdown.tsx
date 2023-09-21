import { useAppSelector, useAppDispatch } from '../../store//hooks';
const Dropdown = () => {
    const categories= useAppSelector((state) => state.product.categories);
    return (
        <>
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                All Categories
            </button>
            <ul className="dropdown-menu">
                {categories.map((item,index)=>(
                    <li key={index}><a className="dropdown-item" href="#">{item}</a></li>
                ))
                }
            </ul>
        </>
    )
}
export default Dropdown;