import {legacy_createStore} from "redux";
import {rootReducer} from "../reducer/rootReducer.js";

const initialState = {
    city: '',
    weather: {
        country: 'a',
        city: 't',
        temp: 0,
        pressure: 0,
        sunset: 0
    },
}
export const store = legacy_createStore(rootReducer, initialState);