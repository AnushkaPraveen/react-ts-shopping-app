import { Link } from 'react-router-dom';
import { commonActions } from '../../../store/slices/commonSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';


const LoggedUser = () => {
    const dispatch = useAppDispatch();
    const user = JSON.parse(localStorage.getItem('user') as string);
    const handleLogout = () => {
        dispatch(commonActions.setLogingUser(false))
    }

    return (
        <div className="dropdown">
            <img src={user.image} className="rounded-circle dropdown-toggle" data-bs-toggle="dropdown" width="50" height="50" />
            <ul className="dropdown-menu">
                <li><Link to="profile" className="dropdown-item">My Profile</Link></li>
                <li><Link to="" className="dropdown-item" onClick={handleLogout}>Log Out</Link></li>
            </ul>
        </div>
    )
}
export default LoggedUser;