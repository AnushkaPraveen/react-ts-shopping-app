import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { ProductApiResponse } from '../../api/responseTypes';

type CommonState = {
    
    loadingState:boolean;
}

const initialState: CommonState = {
    loadingState:false,
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.loadingState = action.payload;
        },
        
    }

});
export const commonActions = commonSlice.actions;

export default commonSlice;