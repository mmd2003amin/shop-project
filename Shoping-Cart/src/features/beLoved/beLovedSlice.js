import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : []
};

const beLovedSlice = createSlice({
    name : "beLoved",
    initialState,
    reducers : {

        saveToBeloved : (state , action) => {
            if(!state.data.find(item => item.name === action.payload.name)) {
                state.data.push({
                    ...action.payload
                })
            }
        },

        removeFromBeloved : (state , action) => {
            const removeItem = state.data.filter(item => item.name !== action.payload.name);
            state.data = [...removeItem]
        }

    }
});

export default beLovedSlice.reducer;
export const { saveToBeloved , removeFromBeloved } = beLovedSlice.actions;