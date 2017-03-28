// define action-creators - return an action object

// action-creator function
export function selectBook(book) {
    // action object
    // type: - name of action (required)
    // payload: - data (optional)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }; // this should automatically be sent through reducers
}

