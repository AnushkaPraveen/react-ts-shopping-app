import { useState } from 'react';
import { Navigate} from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from '../../../util/common.module.css';
import { loginUser } from '../../../store/actions/userAction';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';

const SignIn = () => {
    const dispatch = useAppDispatch();
    const [signing, setSigning] = useState<boolean>(false);
    const isLogged = useAppSelector((state) => state.common.isLogging)

    type UserDetails = {
        username: string;
        password: string;
    }

    const initialValues = {
        username: '',
        password: '',
    };

    const handleLogin = async (values: any) => {
        setSigning(true);
        const userDetails: UserDetails = {
            username: values.username,
            password: values.password
        }
        await dispatch<any>(loginUser(userDetails));
        setSigning(false)
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('username is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    if (isLogged) {
        // Redirect the user to the home page once they are logged in
        return <Navigate to="/" />;
      }
    return (
        <>
            <div className="d-flex justifiy-content-center">
                <div className="card w-100 p-5 shadow-lg mb-5 bg-white rounded mt-5">
                    <p className="text-center h2">Sign In</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        <Form>
                            <Field type="text" className="form-control mb-3" id="username" name="username" placeholder="username" />
                            <ErrorMessage name="username" component="div" className="text-danger" />
                            <Field type="password" id="password" name="password" className="form-control mb-3" aria-describedby="passwordHelpBlock" placeholder="Password" />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                            <div className="form-check mb-3">
                                <Field className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label">
                                    Remember Me
                                </label>
                            </div>
                            <div className='d-flex justify-content-center'>
                                {signing ? <button className={`${classes.buttonColor} btn`} type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                    <span role="status">Signing...</span>
                                </button> : <button className={`${classes.buttonColor} btn`} type="submit">Sign In</button>}
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
export default SignIn;