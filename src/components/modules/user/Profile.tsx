import { useState, useEffect } from 'react';
import classes from './Profile.module.css';
import { getUserProfile } from '../../../store/actions/userAction';
import { commonActions } from '../../../store/slices/commonSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import Loader from "../../../components/modules/common/Loader";

const Profile = () => {
    const dispatch = useAppDispatch();
    const user = JSON.parse(localStorage.getItem('user') as string);
    const userProfile = useAppSelector((state) => state.user.userProfile);
    const loader = useAppSelector((state) => state.common.loadingState);
    console.log(userProfile);

    const getUserProfileDetails = async () => {
        dispatch(commonActions.setLoader(true))
        await dispatch<any>(getUserProfile(user.id));
        dispatch(commonActions.setLoader(false))
    }

    useEffect(() => {
        getUserProfileDetails();
    }, [])
    if (loader) {
        return <Loader />
    }
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 my-5 d-flex justify-content-center">
                    <img src={userProfile.image} className={classes.profileImage} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-5 d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center ">
                    <div className='text-center'>
                        <div className='d-flex'>
                            <label className={classes.labelStyle}>Name - </label><p>{userProfile?.firstName} {userProfile?.lastName}</p>
                        </div>
                        <div className='d-flex'>
                            <label className={classes.labelStyle}>DoB - </label><br />
                            <p>{userProfile?.birthDate}</p>
                        </div>
                        <div className='d-flex'>
                            <label className={classes.labelStyle}>Mobile - </label>
                            <p>{userProfile?.phone}</p>
                        </div>
                        <div className='d-flex'>
                            <label className={classes.labelStyle}>Email - </label>
                            <p>{userProfile?.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;