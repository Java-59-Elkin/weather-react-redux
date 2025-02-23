import {legacy_createStore} from "redux";
import {cityReducer} from "../reducer/cityReducer.js";

const initialState = {
    city: ''
}
export const store = legacy_createStore(cityReducer, initialState);