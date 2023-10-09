import { User } from "../../api/userApi";
import { UserDetails, } from "../../api/responseTypes";
import { userActions } from "../slices/userSlice";
import { commonActions } from "../slices/commonSlice";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
    'loginUser',
    async (userDetails: UserDetails, thunkAPI) => {
        try {
            console.log("inside");
            const userData = await User.loginUser(userDetails);
            console.log(userData);
            thunkAPI.dispatch(userActions.setUser(userData));
            thunkAPI.dispatch(commonActions.setLogingUser(true));
            localStorage.setItem("user", JSON.stringify(userData));
            toast.success("Successfuly Logged", { position: 'top-center', theme: "colored", autoClose: 3000 });
        } catch (error:any) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message, { position: 'top-center', theme: "colored", autoClose: 1000 });
        }
    }
);

export const getUserProfile = createAsyncThunk(
    'getuser',
    async (userId: number, thunkAPI) => {
        try {
            console.log("inside");
            const userData = await User.getUserDetails(userId);
            console.log(userData);
            thunkAPI.dispatch(userActions.setUserProfile(userData));
            //localStorage.setItem("user", JSON.stringify(userData));
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", { position: 'top-center', theme: "colored", autoClose: 1000 });
        }
    }
); 