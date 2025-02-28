import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.js";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (state, action) => action.payload)
            .addCase(fetchWeather.rejected, () => ({}))
    }
});

export default weatherSlice.reducer;