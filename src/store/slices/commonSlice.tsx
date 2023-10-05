import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { ProductApiResponse } from '../../api/responseTypes';

type CommonState = {

    loadingState: boolean;
    isLogging: boolean
}

const initialState: CommonState = {
    loadingState: false,
    isLogging: true
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.loadingState = action.payload;
        },
        setLogingUser: (state, action: PayloadAction<boolean>) => {
            state.isLogging = action.payload;
        }

    }

});
export const commonActions = commonSlice.actions;

export default commonSlice;