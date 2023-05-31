import { combineReducers } from "redux";

import reducerBeLoved from "./beLoved/reducerBeLoved";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    beLovedState : reducerBeLoved ,
    cartState : cartReducer
});

export default rootReducer;