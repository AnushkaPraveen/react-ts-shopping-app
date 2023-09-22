import classes from '../util/common.module.css';

const SignIn = () => {
    return (
        <>
            <div className="d-flex justifiy-content-center">
                <div className="card w-50 p-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <p className="text-center h2">Sign In</p>
                    <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Email" />
                    <input type="password" id="inputPassword5" className="form-control mb-3" aria-describedby="passwordHelpBlock" placeholder="Password" />
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label">
                                Remember Me
                            </label>
                    </div>
                    <button className={`${classes.buttonColor} btn`}>Sign In</button>
                </div>
            </div>
        </>
    )
}
export default SignIn;