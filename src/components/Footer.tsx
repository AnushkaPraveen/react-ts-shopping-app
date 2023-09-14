import classes from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className="row justify-content-evenly">
                <div className="col-lg-3 col-md-3 col-sm-4 col-10 mx-auto  order-lg-first order-md-first order-sm-last order-last">
                    <p className={classes.logoText}><i className="bi bi-shop text-info me-2"></i>Comforty</p>
                    <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                        Cras egestas purus </p>
                    <div className="d-flex justify-content-around">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-pinterest"></i>
                        <i className="bi bi-youtube"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-10 mx-auto mt-2 ">
                    <p>NEWSLETTER</p>
                    <div className='d-flex mb-3'>
                        <input className="form-control" type="text" placeholder="Your email" />
                        <button className={`${classes.buttonColor} btn text-white ms-2`} type="submit">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                </div>
            </div>
            <div className={classes.bottomBar}>
                <p className={classes.bottomBarText}>@ 2021 - Blogy - Designed & Develop by NMG</p>

            </div>
        </>
    )
}
export default Footer;