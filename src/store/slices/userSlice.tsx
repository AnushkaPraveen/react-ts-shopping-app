import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse, UserState } from '../../api/responseTypes';

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserResponse | null>) => {
            state.user = action.payload;
        },
    }

});
export const userActions = userSlice.actions;

export default userSlice;