import {CHANGE_CITY} from "../actions/weatherActions.js";

const initialState = {
    city: ''
}

export const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return {...state, city: action.payload};
        default:
            return state;
    }

}