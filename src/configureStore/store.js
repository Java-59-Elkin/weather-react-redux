import {legacy_createStore} from "redux";
import {weatherReducer} from "../reducer/weatherReducer.js";

const initialState = {
    city: 'test'
}
export const store = legacy_createStore(weatherReducer, initialState);