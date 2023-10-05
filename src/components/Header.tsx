import { useState, ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Dropdown from './modules/common/Dropdown';
import { fetchSearchProduct } from '../store/actions/productAction';
import LoggedUser from './modules/user/LoggedUser';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector((state) => state.cart.productsCart);
    const isLogged = useAppSelector((state) => state.common.isLogging)
    const [searchText, setSearchText] = useState<string>('');

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = event.target.value;
        setSearchText(inputValue);
    }

    const handleSearchProduct = async () => {
        await dispatch<any>(fetchSearchProduct(searchText));
    }

    return (
        <>
            <div className={classes.topBar}>
                <div className={classes.topBarText}>
                    <p> <i className=" bi-check2 me-1"></i>Free Shipping On All Orders Over $50</p>
                </div>
            </div>
            <nav className={`${classes.navBar} d-flex justify-content-evenly align-items-center navbar navbar-expand-lg`}>
                <Link to="/" className={classes.linkTextDecoration}>
                    <p className={classes.navMainTitle}><i className="bi bi-shop text-info me-2"></i>Comforty</p>
                </Link>

                <div className='d-flex'>
                    <div className="dropdown me-2">
                        <Dropdown />
                    </div>
                    <div className="input-group me-2">
                        <input className="form-control  border-right-0 border" type="search" placeholder="Search" id="example-search-input" onChange={handleInput} />
                        <span className="input-group-append">
                            <div className="input-group-text bg-white"><i className="bi-search"></i></div>
                        </span>
                    </div>
                    <button className={`${classes.buttonColor} btn text-white`} type="submit" onClick={handleSearchProduct}>Search</button>
                </div>
                <div className='d-flex mt-sm-2 mt-lg-0 mt-md-0'>
                    <Link to="/cart">
                        <button type="button" className="btn btn-light me-4">
                            <i className="bi bi-cart me-2 fs-5"></i>
                            Cart <span className={`${classes.buttonColor} badge ms-2`}>{cartProducts.length}</span>
                        </button>
                    </Link>
                    {isLogged ? <LoggedUser /> : <Link to="/login">
                        <button type="button" className="btn btn-light">
                            <i className="bi bi-person fs-5"></i>
                        </button>
                    </Link>}


                </div>
            </nav>
        </>
    )
}
export default Header;