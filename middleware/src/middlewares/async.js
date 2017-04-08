export default function({ dispatch }) {

    return next => action => {
        // If the action does not have payload
        // or, the payload foes not have a .then() property
        // we don't care about it, send it on (not a Promise)
        if (!action.payload || !action.payload.then) {
            return next(action); // next() - send action to next middleware in stack or reducers
        }

        console.log('We have a Promise', action);

        // Make sure the action's Promise resolves
        action.payload
            .then(function(response) {
                // Create a new action with the same type, but
                // replace Promise in payload with resolved data
                const newAction = { ...action, payload: response };

                dispatch(newAction); // diapatch() - resend through entire middleware cycle again
            });
    };

    // reformatted ES5 version of above
    /*
    return function(next) {
        return function(action) {
            next(action);
        }
    }
    */
}