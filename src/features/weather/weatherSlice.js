import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherInfo: {},
        message: 'Enter city name'
    },
    reducers: {
        putWeatherInfo: (state, action) => {
            return {...state, weatherInfo: action.payload}
        },
        putMessage: (state, action) => {
            return {...state, message: action.payload}
        }
    }

});

export const {putWeatherInfo, putMessage} = weatherSlice.actions;
export default weatherSlice.reducer;