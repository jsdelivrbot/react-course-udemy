import {
    FETCH_USERS
} from '../actions/types.js';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_USERS:
            return [...state, ...action.payload.data];
    }

    return state;
}