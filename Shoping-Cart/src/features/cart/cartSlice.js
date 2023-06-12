import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [] ,
    totalQuantity : 0,
    totalPrice : 0
};

const cartSlice = createSlice({
    name : "Cart" ,
    initialState,
    reducers : {

        addItem : (state , action) => {
            if(!state.data.find(item => item.name === action.payload.name)) {
                state.data.push({
                    ...action.payload,
                    quantity : 1 ,
                })
            }
            state.totalQuantity = state.data.reduce((total , product) => total + product.quantity ,0);
            state.totalPrice = state.data.reduce((total , product) => total + product.price * product.quantity  ,0);
        },

        removeItem : (state , action) => {
            const removeItem = state.data.filter(item => item.name !== action.payload.name);
            state.data = [...removeItem]
            state.totalQuantity = state.data.reduce((total , product) => total + product.quantity ,0);
            state.totalPrice = state.data.reduce((total , product) => total + product.price * product.quantity  ,0);
            
        },

        increase : (state , action) => {
            const findIndexI = state.data.findIndex(item => item.name === action.payload.name);
            state.data[findIndexI].quantity++;
            state.totalQuantity = state.data.reduce((total , product) => total + product.quantity ,0);
            state.totalPrice = state.data.reduce((total , product) => total + product.price * product.quantity  ,0);
        },

        decrease : (state , action) => {
            const findIndexD = state.data.findIndex(item => item.name === action.payload.name);
            state.data[findIndexD].quantity--;
            state.totalQuantity = state.data.reduce((total , product) => total + product.quantity ,0);
            state.totalPrice = state.data.reduce((total , product) => total + product.price * product.quantity  ,0);
        },

        clear : (state) => {
            state.data = []
            state.totalQuantity = 0
            state.totalPrice = 0
        },

    }
});

export default cartSlice.reducer;
export const { addItem , removeItem , increase , decrease , clear } = cartSlice.actions;