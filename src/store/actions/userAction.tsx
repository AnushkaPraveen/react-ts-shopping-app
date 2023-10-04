import { User } from "../../api/userApi";
import { UserDetails } from "../../api/responseTypes";
import { userActions } from "../slices/userSlice";
import { Dispatch } from 'redux';
import { AppDispatch } from "../store";

export const loginUser =  async(userDetails: UserDetails) => {
    console.log(userDetails);
    
    return async (dispatch: Dispatch) => {
        try {
            console.log("inside");
            const userData = await User.loginUser(userDetails);
            console.log(userData);
            dispatch(userActions.setUser(userData));
        } catch (error) {
            console.log(error);
        }
    }
}