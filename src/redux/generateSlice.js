import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    showLoader: false
};

const generateSlice = createSlice({
    name: 'general',
    initialState: INITIAL_STATE,
    reducers: {
        showorhideoader: (state, action) => {
            state.showLoader = action.payload; // Update showLoader property based on action payload
        },
    },
});

export const { showorhideoader } = generateSlice.actions;

export default generateSlice.reducer;
