import {configureStore} from "@reduxjs/toolkit";
import weather from "../features/weather/weatherSlice.js";

export const store = configureStore({
    reducer: {
        weather
    }
});