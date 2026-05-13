import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "@/store/login/authSlice.ts";

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
    }
})