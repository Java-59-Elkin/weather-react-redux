import {CHANGE_CITY} from '../actions/weatherActions.js';


export const weatherReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return {}
    }
    return state;
}