import {legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducer/weatherReducer.js";

export const store = createStore(weatherReducer);