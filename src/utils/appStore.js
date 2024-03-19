import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
const appStore = configureStore({
    //main app reducer
//*A single reducer function that will be used as the root reducer
    reducer:{
       cart: cartSliceReducer,
    }
});
export default appStore;