import { configureStore } from "@reduxjs/toolkit";
import beLovedSlice from "../features/beLoved/beLovedSlice";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
    reducer : {
        beLovedSlice,
        cartSlice
    }
});

export default store ;