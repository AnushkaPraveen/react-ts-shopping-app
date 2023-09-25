import classes from './Header.module.css';
import Dropdown from './modules/common/Dropdown';
const Header: React.FC = () => {

    return (
        <>
            <div className={classes.topBar}>
                <div className={classes.topBarText}>
                    <p> <i className=" bi-check2 me-1"></i>Free Shipping On All Orders Over $50</p>
                </div>
            </div>
            <nav className={`${classes.navBar} d-flex justify-content-evenly align-items-center navbar navbar-expand-lg`}>
                <p className={classes.navMainTitle}><i className="bi bi-shop text-info me-2"></i>Comforty</p>
                <div className='d-flex'>
                    <div className="dropdown me-2">
                        <Dropdown/>
                    </div>
                    <div className="input-group me-2">
                        <input className="form-control  border-right-0 border" type="search" placeholder="Search" id="example-search-input" />
                        <span className="input-group-append">
                            <div className="input-group-text bg-white"><i className="bi-search"></i></div>
                        </span>
                    </div>
                    <button className={`${classes.buttonColor} btn text-white`} type="submit">Search</button>
                </div>
                <div className='d-flex mt-sm-2 mt-lg-0 mt-md-0'>
                    <button type="button" className="btn btn-light me-4">
                        <i className="bi bi-cart me-2 fs-5"></i>
                        Cart <span className={`${classes.buttonColor} badge ms-2`}>4</span>
                    </button>
                    <button type="button" className="btn btn-light">
                        <i className="bi bi-person fs-5"></i>
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Header;