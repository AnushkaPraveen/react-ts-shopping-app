import classes from '../../../util/common.module.css';
import { loginUser } from '../../../store/actions/userAction';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';

const SignIn = () => {
    const dispatch = useAppDispatch();
     type UserDetails = {
        username: string;
        password: string;
    }
    const handleLogin = async () => {
        const userDetails:UserDetails = {
            username: "kminchelle",
            password: "0lelplR"
        }
        //dispatch(loginUser(userDetails));
    }
    return (
        <>
            <div className="d-flex justifiy-content-center">
                <div className="card w-100 p-5 shadow-lg mb-5 bg-white rounded mt-5">
                    <p className="text-center h2">Sign In</p>
                    <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Email" />
                    <input type="password" id="inputPassword5" className="form-control mb-3" aria-describedby="passwordHelpBlock" placeholder="Password" />
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label">
                            Remember Me
                        </label>
                    </div>
                    <button className={`${classes.buttonColor} btn`} onClick={handleLogin}>Sign In</button>
                </div>
            </div>
        </>
    )
}
export default SignIn;