// Container is a React component that has a direct connection to the state managed by Redux -
// bridge between two libraries
// Make most parent component that cares about the state a Container (smart component)

import React, { Component } from 'react';
import { connect } from 'react-redux'; // library for connecting react to redux
import { bindActionCreators } from 'redux'; // function for sending actions through reducers

import { selectBook } from '../actions/index'; // import action -reator


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                /* call our action-creator that was made availble on props by the connect( , mapDispatchToProps) */
                <li 
                    className="list-group-item" 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// function that takes application state as argument and returns an object as props in our BookList Container
// glue between react/redux
// if state changes, this Container will re-render with a new list of books
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// Return value from this function will end up as props on BookList Container.
// Enables calling our action creators in Container (e.g. this.props.selectBook)
function mapDispatchToProps(dispatch) {
    // bindActionCreators() - 
    // Whenever selectBook is called (action-creator), 
    // the result (action) 
    // should be passed to all of our reducers (dispatch)
    // and update our state
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// export connect() to promote BookList from Component to Container.
// connect(stateMapperFn, dipatchMapperFn)(ComponentClass)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);