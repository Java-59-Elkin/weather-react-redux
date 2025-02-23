import {CHANGE_CITY} from "../actions/weatherActions.js";

export const cityReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return {...state, city: action.payload};
        default:
            return state;
    }

}