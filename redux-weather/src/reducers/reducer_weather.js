import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // NEVER manipulate existing state directly - return a new one to replace the old state instead;
            return [action.payload.data, ...state]; // using ES6 spread operator to pull out old state data
            break;
    }
    return state;
}