import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse, UserState } from '../../api/responseTypes';

const initialState: UserState = {
    user: null,
    userProfile: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserResponse>) => {
            state.user = action.payload;
        },
        setUserProfile: (state, action: PayloadAction<any>) => {
            state.userProfile = action.payload;
        }
    }

});
export const userActions = userSlice.actions;

export default userSlice;