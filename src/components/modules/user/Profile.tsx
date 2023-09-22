import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 my-5 d-flex justify-content-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU" className={classes.profileImage} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-5 d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center ">
                    <div className='text-center'>
                        <div className='d-flex'>
                            <label className={classes.labelStyle}>Name - </label><p>amal perera</p>
                        </div>
                        <div className='d-flex'>
                            <label className={classes.labelStyle}>DoB - </label><br />
                            <p>amal perera</p>
                        </div>
                        <div className='d-flex'>
                            <label className={classes.labelStyle}>Mobile - </label>
                            <p>amal perera</p>
                        </div>
                        <div className='d-flex'>
                            <label className={classes.labelStyle}>Email - </label>
                            <p>amal perera</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;