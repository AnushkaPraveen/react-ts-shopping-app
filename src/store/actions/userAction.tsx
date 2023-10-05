import { User } from "../../api/userApi";
import { UserDetails, } from "../../api/responseTypes";
import { userActions } from "../slices/userSlice";

import { createAsyncThunk } from '@reduxjs/toolkit';

 export const loginUser = createAsyncThunk(
    'loginUser',
    async (userDetails:UserDetails,thunkAPI) => {
        try {
            console.log("inside");
            const userData = await User.loginUser(userDetails);
            console.log(userData);
            thunkAPI.dispatch(userActions.setUser(userData));
            localStorage.setItem("user", JSON.stringify(userData));
        } catch (error) {
            console.log(error);
        }
    }
  ); 

  export const getUserProfile = createAsyncThunk(
    'getuser',
    async (userId:number,thunkAPI) => {
        try {
            console.log("inside");
            const userData = await User.getUserDetails(userId);
            console.log(userData);
            thunkAPI.dispatch(userActions.setUserProfile(userData));
            //localStorage.setItem("user", JSON.stringify(userData));
        } catch (error) {
            console.log(error);
        }
    }
  ); 