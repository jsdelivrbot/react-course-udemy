// reducers are only called from actions being dispatched by Container(s)

// State argument is NOT application state, only the state this reducer is responsible for.
// Can't return undefined from a reducer so we default 'state' argument to null for inital app load
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state; // default case where we don't care about the action
}