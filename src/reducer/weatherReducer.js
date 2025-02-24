import {PUT_WEATHER} from "../actions/weatherActions.js";

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case PUT_WEATHER:
            return {
                ...state, weather: {
                    country: action.payload.sys.country,
                    city: action.payload.name,
                    temp: action.payload.main.temp,
                    pressure: action.payload.main.pressure,
                    sunset: action.payload.sys.sunset,
                }
            };
        default:
            return state;
    }

}

