import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from "../features/slices/weatherSlice.js";
import message from "../features/slices/messageSlice.js";

export const store = configureStore({
    reducer: {
        weatherInfo, message
    }
});