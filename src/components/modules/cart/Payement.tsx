import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Classes from './Payment.module.css';
import CommonClasses from '../../../util/common.module.css';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { createProductCart } from '../../../store/actions/cartAction';
import { ProductType } from '../product/productTypes';

const Payment = () => {
    const cartProducts = useAppSelector((state) => state.cart.productsCart);
    const subTotal = useAppSelector((state) => state.cart.cartTotalAmount);
    const salesTax = useAppSelector((state) => state.cart.totalTaxAmount);
    const totalAmount = subTotal - salesTax;

    const handleCartPayment = async() => {
        console.log("checked");

        const convertedProducts = cartProducts.map((product) => ({
            id: product.id,
            quantity: product.cartQuantity, // Provide a default quantity, you can adjust this as needed
        }));

        const item = {
            userId: 1,
            products: convertedProducts,
        };

        await createProductCart(item);
    }
    const initialValues = {
        cardNumber: '',
        expirationDate: '',
        cvc: '',
        nameOnCard: '',
        deliveryAddress: '',
        remarks: '',
        useCurrentAddress: false
    };
    const validationSchema = Yup.object().shape({
        cardNumber: Yup.string()
            .required('Card number is required')
            .matches(/^\d{4}$/, 'Invalid card number. Please enter a 16-digit card number'),
        expirationDate: Yup.string()
            .required('Expiration date is required')
            .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date. Use MM/YY format'),
        cvc: Yup.string()
            .required('CVC is required')
            .matches(/^\d{3,4}$/, 'Invalid CVC. Please enter a valid digit CVC'),
        nameOnCard: Yup.string().required('Name on card is required'),
        useCurrentAddress: Yup.boolean(),
       /*  deliveryAddress: Yup.string().when('useCurrentAddress', {
            is: (useCurrentAddress: boolean) => !useCurrentAddress,
            then: Yup.string().required('Delivery address is required'),
            otherwise: Yup.string()
        }), */
        remarks: Yup.string(),

    });
    return (
        <div className={Classes.paymentContainer}>
            <p className='d-flex justify-content-center h5'>Pay with Card</p>
            <hr />
            <div className="row">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleCartPayment}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <label className='mb-2'>Country or region</label><br />
                            <div className="col">
                                <div className="input-group">
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="1234 1234 1234 1234"
                                        name="cardNumber"
                                    />
                                    <span className="input-group-text">
                                        <i className="bi bi-credit-card-fill"></i>
                                    </span>
                                </div>
                                <ErrorMessage name="cardNumber" component="div" className="text-danger" />

                                <div className="d-flex mb-3">
                                    <Field type="text" name="expirationDate" className="form-control" placeholder="MM/YY" />
                                    <Field type="text" name="cvc" className="form-control" placeholder="CVC" />
                                </div>
                                <ErrorMessage name="expirationDate" component="div" className="text-danger" />
                                <ErrorMessage name="cvc" component="div" className="text-danger" />
                                <div className="mb-4">
                                    <label className='mb-2'>Name on card</label><br />
                                    <Field type="text" name="nameOnCard" className="form-control" />
                                    <ErrorMessage name="nameOnCard" component="div" className="text-danger" />
                                </div>
                                <Field type="text" name="deliveryAddress" className="form-control mb-3" placeholder="Delivery address" />
                                <div className="form-check mb-3">
                                    <Field className="form-check-input" type="checkbox" name="useCurrentAddress" />
                                    <label className="form-check-label">
                                        Use Current Address
                                    </label>
                                </div>
                                <Field type="text" name="remarks" className="form-control mb-3" placeholder="Remarks" />
                            </div>
                            <button type="submit" className={`${CommonClasses.buttonColor} btn`} disabled={isSubmitting}>Pay ${totalAmount}</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default Payment;